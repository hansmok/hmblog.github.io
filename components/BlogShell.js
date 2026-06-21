"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalizePathname(pathname) {
  if (!pathname) return "";
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function BlogShell({ children }) {
  const pathname = normalizePathname(usePathname());
  const isBlogIndex = pathname === "/blog";
  const isBlogPost = pathname.startsWith("/blog/") && !isBlogIndex;

  return (
    <div className="blog-shell">
      {isBlogIndex ? (
        <>
          <div className="blog-shell-frame">{children}</div>
          <div className="blog-main-row">
            <a className="blog-main-link blog-main-link--flow" href="https://www.hansmok.com/">
              Main site -&gt;
            </a>
          </div>
        </>
      ) : null}

      {isBlogPost ? (
        <div className="blog-shell-frame">
          {children}
          <Link className="blog-corner-link blog-corner-link--top" href="/blog">
            Blog home {"<-"}
          </Link>
          <Link className="blog-corner-link blog-corner-link--bottom" href="/blog">
            Blog home {"<-"}
          </Link>
          <a className="blog-main-link blog-main-link--post" href="https://www.hansmok.com/">
            Main site -&gt;
          </a>
        </div>
      ) : null}
    </div>
  );
}
