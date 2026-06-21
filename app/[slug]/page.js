import Link from "next/link";
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
      <div className="blog-post-slot blog-post-slot--top">
        <Link className="blog-corner-link blog-corner-link--top" href="/">
          Blog home {"<-"}
        </Link>
      </div>

      <article className="blog-post-card">
        <p className="eyebrow">article.md</p>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-body">{renderMarkdown(post.body)}</div>
      </article>

      <div className="blog-post-slot blog-post-slot--bottom">
        <Link className="blog-corner-link blog-corner-link--bottom" href="/">
          Blog home {"<-"}
        </Link>
        <a className="blog-main-link blog-main-link--post" href="https://www.hansmok.com/">
          Main site -&gt;
        </a>
      </div>
    </div>
  );
}
