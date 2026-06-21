import Link from "next/link";

import { getAllPosts, getPostHref } from "../lib/posts";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-home-shell">
      <div className="blog-home-slot blog-home-slot--top" />

      <section className="resume-section archive-section">
        <p className="eyebrow">archive.md</p>
        <div className="stack">
          {posts.map((post) => (
            <article className="content-panel" key={post.slug}>
              <div className="frame-meta">
                <span>{post.date}</span>
                <span>post</span>
              </div>
              <h2>
                <Link href={getPostHref(post)}>{post.title}</Link>
              </h2>
              <p className="lead-copy">{post.summary}</p>
              <Link className="frame-link" href={getPostHref(post)}>
                open article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="blog-home-slot blog-home-slot--bottom">
        <a className="blog-main-link blog-main-link--flow" href="https://www.hansmok.com/">
          Main site -&gt;
        </a>
      </div>
    </div>
  );
}
