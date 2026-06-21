import { notFound } from "next/navigation";

import { getAllPostSlugs, getPostBySlug, renderMarkdown } from "../../lib/posts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-post-shell">
      <article className="blog-post-card">
        <p className="eyebrow">article.md</p>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>post</span>
        </div>
        <div className="post-body">{renderMarkdown(post.body)}</div>
      </article>
    </div>
  );
}
