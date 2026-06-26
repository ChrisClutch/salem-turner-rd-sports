import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import NewsletterStrip from '../components/NewsletterStrip'
import { YOUTH_SPORTS } from '../data/site'
import { IMAGES, coverBg } from '../data/images'

export default function YouthSportsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Ages 3–14"
        title="Youth Recreational Sports"
        intro="Programs that put fun, fundamentals, and sportsmanship first. Every child plays, every child grows — from their very first tee-ball swing to competitive travel-ready divisions."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Youth Sports' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="sport-grid">
            {YOUTH_SPORTS.map((s) => (
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

      <section className="section section--alt">
        <div className="shell split">
          <div className="prose">
            <span className="eyebrow">Coaches &amp; Volunteers</span>
            <h2>Help our kids play</h2>
            <p>
              Our youth programs run on the energy of volunteer coaches and team parents.
              No experience required — we provide the training, equipment, and support so
              you can focus on the kids.
            </p>
            <ul className="bullets">
              <li>Free background check and coach certification</li>
              <li>Practice plans and equipment provided</li>
              <li>Flexible weeknight and weekend schedules</li>
            </ul>
            <Link to="/contact" className="btn btn--turf" style={{ marginTop: '0.5rem' }}>Volunteer to Coach</Link>
          </div>
          <div className="split-visual" style={coverBg(IMAGES.soccerPlay)}>
            <span className="pin">⭐ Tots through age 14</span>
          </div>
        </div>
      </section>

      <NewsletterStrip />
    </Layout>
  )
}
