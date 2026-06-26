import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import NewsletterStrip from '../components/NewsletterStrip'
import { TOURNAMENTS, Tournament } from '../data/site'
import { IMAGES, coverBg } from '../data/images'

function TournTable({ rows }: { rows: Tournament[] }) {
  return (
    <table className="tourn-table">
      <thead>
        <tr><th>Event</th><th>Sport</th><th>Dates</th><th>Details</th></tr>
      </thead>
      <tbody>
        {rows.map((t) => (
          <tr key={t.name}>
            <td><span className="tourn-name">{t.name}</span></td>
            <td><span className={`sport-pill ${t.sport}`}>{t.sport}</span></td>
            <td>{t.date}</td>
            <td style={{ color: 'var(--slate)' }}>{t.blurb}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function TournamentsPage() {
  const baseball = TOURNAMENTS.filter((t) => t.sport === 'Baseball')
  const fastpitch = TOURNAMENTS.filter((t) => t.sport === 'Fastpitch')
  const volleyball = TOURNAMENTS.filter((t) => t.sport === 'Volleyball')

  return (
    <Layout>
      <PageHero
        eyebrow="2026 Season"
        title="Tournaments"
        intro="The Turner Road Sports Complex hosts regional baseball, fastpitch, and volleyball tournaments all year — drawing teams, families, and fans from across Oregon and the Northwest."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Tournaments' }]}
      />

      <section className="section" id="sign-up">
        <div className="shell split">
          <div className="prose">
            <span className="eyebrow">Director Info</span>
            <h2>How to sign up</h2>
            <p>
              Bringing a team to Salem? Registration for each event opens roughly eight weeks
              in advance. Spots fill quickly, so reserve early.
            </p>
            <ul className="bullets">
              <li>Choose your event and age bracket below</li>
              <li>Complete team registration and submit your roster</li>
              <li>Receive your pool-play schedule one week prior</li>
              <li>Check in at the complex tournament HQ on game day</li>
            </ul>
            <Link to="/contact" className="btn btn--primary">Register a Team</Link>
          </div>
          <div className="split-visual" style={coverBg(IMAGES.fieldhouse)}>
            <span className="pin">🏆 Teams from across the NW</span>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="baseball">
        <div className="shell">
          <div className="sec-head left"><span className="eyebrow">Diamonds</span><h2 className="sec-title">Baseball Tournaments</h2></div>
          <TournTable rows={baseball} />
        </div>
      </section>

      <section className="section" id="fastpitch">
        <div className="shell">
          <div className="sec-head left"><span className="eyebrow">Fastpitch</span><h2 className="sec-title">Fastpitch Tournaments</h2></div>
          <TournTable rows={fastpitch} />
        </div>
      </section>

      <section className="section section--alt" id="volleyball">
        <div className="shell">
          <div className="sec-head left"><span className="eyebrow">Indoor Courts</span><h2 className="sec-title">Volleyball Tournaments</h2></div>
          <TournTable rows={volleyball} />
        </div>
      </section>

      <NewsletterStrip />
    </Layout>
  )
}
