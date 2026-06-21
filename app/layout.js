import './globals.css'

export const metadata = {
  title: 'hansmok blog',
  description: 'A one-page blog about software, systems, and the work in between.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="site-shell">
          {children}
        </main>
      </body>
    </html>
  )
}
