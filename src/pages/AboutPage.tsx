import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import NewsletterStrip from '../components/NewsletterStrip'
import { SITE, STATS } from '../data/site'
import { IMAGES, coverBg } from '../data/images'

const IMPACT = [
  { num: '60K+', label: 'Annual Visitors' },
  { num: '15K', label: 'Hotel Room Nights' },
  { num: '$12M', label: 'Estimated Local Spending' },
  { num: '30+', label: 'Events Hosted' },
]

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Salem Parks & Recreation"
        title="About the Complex"
        intro={`${SITE.acres} acres of fields, courts, and community on Turner Road SE — built to give ${SITE.city} a year-round home for sport and recreation.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="section">
        <div className="shell split">
          <div className="prose">
            <span className="eyebrow">Our Mission</span>
            <h2>More than a place to play</h2>
            <p>
              The Turner Road Sports Complex exists to make active, healthy recreation
              accessible to every resident of {SITE.city}. From a child’s first season to a
              senior softball league, the {SITE.acres}-acre campus is designed to welcome
              players of every age and ability.
            </p>
            <p>
              Beyond league nights, the complex is a regional draw — its tournaments fill local
              hotels and restaurants and put Salem on the map for travel sports across the
              Pacific Northwest.
            </p>
          </div>
          <div className="split-visual" style={coverBg(IMAGES.fieldFence)}>
            <span className="pin">🌲 {SITE.city}</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--navy">
        <div className="shell">
          <div className="sec-head"><span className="eyebrow" style={{ color: 'var(--gold)' }}>By the numbers</span><h2 className="sec-title" style={{ color: '#fff' }}>The Complex at a Glance</h2></div>
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

      {/* ECONOMIC IMPACT */}
      <section className="section section--alt" id="impact">
        <div className="shell">
          <div className="sec-head"><span className="eyebrow">Community Return</span><h2 className="sec-title">Economic Impact</h2>
            <p className="sec-sub">
              Sports tourism is one of Salem’s fastest-growing visitor segments. Each tournament
              weekend brings families who stay, dine, and shop across the city — illustrative
              figures shown below.
            </p>
          </div>
          <div className="stats" style={{ color: 'var(--ink)' }}>
            {IMPACT.map((s) => (
              <div key={s.label}>
                <div className="stat-num" style={{ color: 'var(--turf)' }}>{s.num}</div>
                <div className="stat-label" style={{ color: 'var(--slate)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--slate)' }}>
            Figures are illustrative projections for a complex of this scale.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--turf">
        <div className="shell" style={{ textAlign: 'center' }}>
          <h2 className="sec-title" style={{ color: '#fff' }}>Be part of the action</h2>
          <p className="sec-sub" style={{ margin: '1rem auto 1.75rem', maxWidth: 560 }}>
            Join a league, bring a tournament, or partner as a sponsor. There’s a place for you
            on Turner Road.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/adult-leagues" className="btn btn--ghost">Join a League</Link>
            <Link to="/contact" className="btn btn--ghost">Become a Sponsor</Link>
          </div>
        </div>
      </section>

      <NewsletterStrip />
    </Layout>
  )
}
