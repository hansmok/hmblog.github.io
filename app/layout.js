import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="site-shell">{children}</main>
      </body>
    </html>
  );
}

