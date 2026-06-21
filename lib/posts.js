import fs from 'node:fs';
import path from 'node:path';
import React from 'react';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function readPostFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Invalid post file: ${filePath}`);
  }

  const frontmatter = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const index = line.indexOf(':');
        if (index === -1) {
          return [line.trim(), ''];
        }

        const key = line.slice(0, index).trim();
        const value = line.slice(index + 1).trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
        return [key, value];
      }),
  );

  const slug = path.basename(filePath, '.md');
  const title = frontmatter.title || slug;
  const date = frontmatter.date || '';
  const summary = frontmatter.summary || '';
  const body = match[2].trim();

  return { slug, title, date, summary, body };
}

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map((file) => readPostFile(path.join(POSTS_DIR, file)))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostHref(post) {
  return `/${post.slug}`;
}

export const blogTitle = 'showerthoughts';
export const blogDescription = 'stream of consciousness on software, systems, and adjacent work.';

function inlineText(line) {
  return line.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');
}

export function renderMarkdown(body) {
  const blocks = body.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return blocks.map((block, index) => {
    const lines = block.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const first = lines[0] || '';

    if (/^#{1,3}\s+/.test(first)) {
      const level = first.match(/^#{1,3}/)[0].length;
      const text = inlineText(first.replace(/^#{1,3}\s+/, ''));
      const Tag = `h${Math.min(level + 1, 3)}`;
      return React.createElement(Tag, { key: index }, text);
    }

    return React.createElement('p', { key: index }, inlineText(lines.join(' ')));
  });
}
