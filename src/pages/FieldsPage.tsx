import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import NewsletterStrip from '../components/NewsletterStrip'
import { SITE } from '../data/site'

const FACILITIES = [
  { icon: '⚾', name: '12 Championship Diamonds', desc: 'Lighted, fully-fenced baseball and softball fields with covered dugouts and electronic scoreboards.' },
  { icon: '⚽', name: 'Lighted Turf Fields', desc: 'All-weather synthetic turf and natural grass pitches sized for soccer, lacrosse, and flag football.' },
  { icon: '🏀', name: 'Indoor Fieldhouse', desc: '8 hardwood courts that convert between basketball, volleyball, pickleball, and indoor soccer.' },
  { icon: '🅿️', name: 'On-Site Parking', desc: 'Ample lighted parking with dedicated team, official, and accessible stalls.' },
  { icon: '🍔', name: 'Concessions & Plaza', desc: 'A central plaza with concessions, shaded seating, and space for vendors on event weekends.' },
  { icon: '♿', name: 'Accessible Throughout', desc: 'ADA-accessible paths, restrooms, seating, and parking across the entire campus.' },
]

export default function FieldsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow={`${SITE.acres} Acres · ${SITE.address.line1}`}
        title="Fields & Rentals"
        intro="From a single practice slot to a full tournament weekend, the Turner Road Sports Complex has the space, surfaces, and support to host your event."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Fields & Rentals' }]}
      />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="shell split">
          <div className="prose">
            <span className="eyebrow">The Campus</span>
            <h2>About the complex</h2>
            <p>
              Spread across {SITE.acres} acres on {SITE.address.line1} in {SITE.city}, the complex
              was designed to keep play, parking, and amenities all within an easy walk. Outdoor
              diamonds and turf fields ring a central plaza, with the indoor fieldhouse anchoring
              year-round activity.
            </p>
            <p>
              That layout makes it ideal for multi-field tournaments: families can move between
              games in minutes, and everything from concessions to restrooms is close at hand.
            </p>
          </div>
          <div className="split-visual bg-grad-1">
            <span className="pin">📍 {SITE.address.line1}, {SITE.city}</span>
          </div>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="section section--alt">
        <div className="shell">
          <div className="sec-head"><span className="eyebrow">What’s on site</span><h2 className="sec-title">Facilities</h2></div>
          <div className="sport-grid">
            {FACILITIES.map((f) => (
              <div className="sport-card" key={f.name}>
                <div className="sport-icon">{f.icon}</div>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTALS */}
      <section className="section">
        <div className="shell">
          <div className="info-cards">
            <div className="info-card" id="general">
              <h3>General Rentals</h3>
              <p style={{ marginBottom: '0.75rem' }}>
                Reserve a field or court by the hour for practices, clinics, birthday parties,
                or pickup games. Hourly and seasonal blocks available.
              </p>
              <Link to="/contact" className="card-link" style={{ color: 'var(--orange)' }}>Request a Rental →</Link>
            </div>
            <div className="info-card" id="tournament">
              <h3>Tournament Rentals</h3>
              <p style={{ marginBottom: '0.75rem' }}>
                Host your own multi-day event with access to multiple fields, scoreboards,
                tournament HQ space, and on-site staff support.
              </p>
              <Link to="/contact" className="card-link" style={{ color: 'var(--orange)' }}>Plan an Event →</Link>
            </div>
            <div className="info-card">
              <h3>Weather Updates</h3>
              <p style={{ marginBottom: '0.75rem' }}>
                Field closures and cancellations are posted in real time during inclement
                weather. Sign up for text alerts so you’re never caught out.
              </p>
              <Link to="/contact" className="card-link" style={{ color: 'var(--orange)' }}>Get Text Alerts →</Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterStrip />
    </Layout>
  )
}
