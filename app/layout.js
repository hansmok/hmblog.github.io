import "./globals.css";

import { blogDescription, blogTitle } from "../lib/posts";

export const metadata = {
  title: blogTitle,
  description: blogDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="site-shell">{children}</main>
      </body>
    </html>
  );
}

