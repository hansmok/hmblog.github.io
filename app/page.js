const posts = [
  {
    date: '2026-06-21',
    title: 'Why I stopped debugging at the UI layer',
    excerpt: 'A note on stopping at the visible symptom when the failure is usually in the state machine behind it.',
  },
  {
    date: '2026-06-18',
    title: 'Routing, auth, and the cost of indirection',
    excerpt: 'Why reverse proxies, identity providers, and DNS combine into one failure domain from the user’s point of view.',
  },
  {
    date: '2026-06-10',
    title: 'What I want from a personal site',
    excerpt: 'Low friction, direct navigation, and enough density that the page respects my time.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="resume-section hero-panel">
        <p className="eyebrow">blog.txt</p>
        <h1>hansmok blog</h1>
        <p className="lead-copy">
          A one-page site for notes on software, systems, and the work behind the work.
        </p>
        <div className="hero-meta">
          <span>new york city</span>
          <span>monospace shell</span>
          <span>static export</span>
        </div>
      </section>

      <section className="resume-section">
        <p className="eyebrow">latest.md</p>
        <div className="featured-post">
          <div className="frame-meta">
            <span>{posts[0].date}</span>
            <span>post</span>
          </div>
          <h2>{posts[0].title}</h2>
          <p>{posts[0].excerpt}</p>
          <a className="frame-link" href="#archive">
            Jump to archive
          </a>
        </div>
      </section>

      <section className="resume-section" id="archive">
        <p className="eyebrow">archive.md</p>
        <div className="stack">
          {posts.map((post) => (
            <article className="content-panel" key={post.title}>
              <div className="frame-meta">
                <span>{post.date}</span>
                <span>post</span>
              </div>
              <h2>{post.title}</h2>
              <p className="lead-copy">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <p className="eyebrow">link.txt</p>
        <div className="content-panel">
          <p className="lead-copy">Main site: <a href="https://www.hansmok.com/">www.hansmok.com</a></p>
        </div>
      </section>
    </>
  )
}
