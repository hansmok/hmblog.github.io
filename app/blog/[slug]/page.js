import { redirect } from "next/navigation";

import { getAllPostSlugs } from "../../../lib/posts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostRedirect({ params }) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
