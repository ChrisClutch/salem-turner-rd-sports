import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import NewsletterStrip from '../components/NewsletterStrip'
import { ADULT_LEAGUES } from '../data/site'

export default function AdultLeaguesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="18 & Over"
        title="Adult Leagues"
        intro="Recreational and competitive divisions running year-round at the Turner Road Sports Complex. Register as a team or sign up as a free agent and we’ll find you a roster."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Adult Leagues' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="sport-grid">
            {ADULT_LEAGUES.map((s) => (
              <div className="sport-card" id={s.id} key={s.id}>
                <div className="sport-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <div className="sport-meta">
                  <span className="tag tag--season">{s.season}</span>
                  {s.ages && <span className="tag tag--age">{s.ages}</span>}
                </div>
                <p>{s.blurb}</p>
                <Link to="/contact" className="card-link" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  Register interest →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--turf">
        <div className="shell" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: '#fff' }}>No team? No problem.</span>
          <h2 className="sec-title" style={{ color: '#fff' }}>Free-Agent Registration</h2>
          <p className="sec-sub" style={{ margin: '1rem auto 1.75rem', maxWidth: 560 }}>
            Sign up as an individual and we’ll place you on a team that needs players.
            It’s the easiest way to get into a league and meet new people.
          </p>
          <Link to="/contact" className="btn btn--ghost">Become a Free Agent</Link>
        </div>
      </section>

      <NewsletterStrip />
    </Layout>
  )
}
