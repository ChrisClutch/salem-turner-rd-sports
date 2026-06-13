import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import NewsletterStrip from '../components/NewsletterStrip'
import { SITE, FEATURE_CARDS, STATS, ADULT_LEAGUES, YOUTH_SPORTS, TOURNAMENTS, SPONSORS } from '../data/site'

const SLIDES = [
  {
    bg: 'bg-grad-1',
    badge: '177 Acres on Turner Road',
    title: <>Salem’s home for <em>sports</em></>,
    sub: 'Twelve championship diamonds, lighted turf fields, and an indoor fieldhouse — all in one place on Turner Road SE.',
    actions: [
      { label: 'Explore the Complex', to: '/fields', cls: 'btn--primary' },
      { label: 'Game Schedules', to: '/schedules', cls: 'btn--ghost' },
    ],
  },
  {
    bg: 'bg-grad-2',
    badge: 'Leagues for every age',
    title: <>Play your <em>season</em></>,
    sub: 'Adult and youth leagues year-round — baseball, softball, soccer, basketball, volleyball, and pickleball.',
    actions: [
      { label: 'Adult Leagues', to: '/adult-leagues', cls: 'btn--primary' },
      { label: 'Youth Sports', to: '/youth-sports', cls: 'btn--ghost' },
    ],
  },
  {
    bg: 'bg-grad-3',
    badge: '2026 Tournament Season',
    title: <>Bring your <em>team</em> to Salem</>,
    sub: 'Regional baseball, fastpitch, and volleyball tournaments draw teams and families from across the Northwest.',
    actions: [
      { label: 'View Tournaments', to: '/tournaments', cls: 'btn--primary' },
      { label: 'Rent the Fields', to: '/fields#tournament', cls: 'btn--ghost' },
    ],
  },
]

export default function HomePage() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6000)
    return () => clearInterval(t)
  }, [])

  const upcoming = TOURNAMENTS.slice(0, 4)

  return (
    <Layout>
      {/* HERO */}
      <section className="hero">
        <div className="hero-stage">
          {SLIDES.map((s, i) => (
            <div key={i} className={`hero-slide ${s.bg} ${i === active ? 'is-active' : ''}`} aria-hidden={i !== active}>
              <div className="hero-pattern" />
            </div>
          ))}
          <div className="hero-field">
            <div className="hero-content">
              <span className="hero-badge">{SLIDES[active].badge}</span>
              <h1 className="hero-title">{SLIDES[active].title}</h1>
              <p className="hero-sub">{SLIDES[active].sub}</p>
              <div className="hero-actions">
                {SLIDES[active].actions.map((a) => (
                  <Link key={a.label} to={a.to} className={`btn ${a.cls}`}>{a.label}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === active ? 'is-active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <div className="feature-strip">
        {FEATURE_CARDS.map((c) => (
          <div className="feature-card" key={c.title}>
            <span className="eyebrow">{c.eyebrow}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <Link to={c.to} className="card-link">{c.cta} →</Link>
          </div>
        ))}
      </div>

      {/* STATS */}
      <section className="section section--navy">
        <div className="shell">
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="section section--alt">
        <div className="shell split">
          <div className="prose">
            <span className="eyebrow">The Complex</span>
            <h2>177 acres of play on Turner Road</h2>
            <p>
              The Turner Road Sports Complex is {SITE.city}’s premier destination for
              recreation and competition. Operated by {SITE.org}, the {SITE.acres}-acre
              campus brings together championship-caliber fields, indoor courts, and family
              amenities under one address.
            </p>
            <p>
              Whether you’re joining a weeknight adult league, signing your kids up for their
              first season, or bringing a travel team to a regional tournament, there’s a place
              for you on Turner Road.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/about" className="btn btn--turf">About the Complex</Link>
              <Link to="/fields" className="btn btn--outline">Fields &amp; Rentals</Link>
            </div>
          </div>
          <div className="split-visual bg-grad-1">
            <span className="pin">📍 {SITE.address.line1}, {SITE.city}</span>
          </div>
        </div>
      </section>

      {/* LEAGUES */}
      <section className="section">
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">Get in the game</span>
            <h2 className="sec-title">Adult Leagues</h2>
            <p className="sec-sub">Competitive and recreational divisions running all year. Register solo or bring a full roster.</p>
          </div>
          <div className="sport-grid">
            {ADULT_LEAGUES.slice(0, 6).map((s) => (
              <div className="sport-card" key={s.id}>
                <div className="sport-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <div className="sport-meta">
                  <span className="tag tag--season">{s.season}</span>
                  {s.ages && <span className="tag tag--age">{s.ages}</span>}
                </div>
                <p>{s.blurb}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/adult-leagues" className="btn btn--outline">All Adult Leagues</Link>
          </div>
        </div>
      </section>

      {/* YOUTH */}
      <section className="section section--alt">
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">For the next generation</span>
            <h2 className="sec-title">Youth Sports</h2>
            <p className="sec-sub">Skill-building, sportsmanship, and a whole lot of fun for ages 3 to 14.</p>
          </div>
          <div className="sport-grid">
            {YOUTH_SPORTS.map((s) => (
              <div className="sport-card" key={s.id}>
                <div className="sport-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <div className="sport-meta">
                  <span className="tag tag--season">{s.season}</span>
                  {s.ages && <span className="tag tag--age">{s.ages}</span>}
                </div>
                <p>{s.blurb}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/youth-sports" className="btn btn--outline">All Youth Sports</Link>
          </div>
        </div>
      </section>

      {/* UPCOMING TOURNAMENTS */}
      <section className="section">
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">Mark your calendar</span>
            <h2 className="sec-title">Upcoming Tournaments</h2>
            <p className="sec-sub">A sample of the regional events coming to the complex this season.</p>
          </div>
          <table className="tourn-table">
            <thead>
              <tr><th>Event</th><th>Sport</th><th>Dates</th></tr>
            </thead>
            <tbody>
              {upcoming.map((t) => (
                <tr key={t.name}>
                  <td><span className="tourn-name">{t.name}</span></td>
                  <td><span className={`sport-pill ${t.sport}`}>{t.sport}</span></td>
                  <td>{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/tournaments" className="btn btn--primary">Full Tournament Schedule</Link>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="section section--alt">
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">Powered by our community</span>
            <h2 className="sec-title">Our Sponsors</h2>
            <p className="sec-sub">Local partners who help keep Salem playing. Interested in joining them?{' '}
              <Link to="/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>Get in touch.</Link>
            </p>
          </div>
          <div className="sponsor-grid">
            {SPONSORS.map((s) => (
              <div className="sponsor-cell" key={s}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterStrip />
    </Layout>
  )
}
