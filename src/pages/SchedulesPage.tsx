import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { ADULT_LEAGUES, YOUTH_SPORTS } from '../data/site'

export default function SchedulesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Live This Season"
        title="Game Schedules"
        intro="Find game times, standings, and results for every league at the Turner Road Sports Complex. Select your league below to view its current schedule."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Game Schedules' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="sec-head left"><span className="eyebrow">Adult Leagues</span><h2 className="sec-title">Adult Schedules</h2></div>
          <div className="schedule-list">
            {ADULT_LEAGUES.map((s) => (
              <div className="schedule-row" key={s.id}>
                <div className="sport-icon" style={{ marginBottom: 0 }}>{s.icon}</div>
                <div>
                  <h4>{s.name}</h4>
                  <div className="meta">{s.season} · {s.ages}</div>
                </div>
                <Link to={`/adult-leagues#${s.id}`} className="btn btn--outline btn--sm">View Schedule</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="shell">
          <div className="sec-head left"><span className="eyebrow">Youth Sports</span><h2 className="sec-title">Youth Schedules</h2></div>
          <div className="schedule-list">
            {YOUTH_SPORTS.map((s) => (
              <div className="schedule-row" key={s.id}>
                <div className="sport-icon" style={{ marginBottom: 0 }}>{s.icon}</div>
                <div>
                  <h4>{s.name}</h4>
                  <div className="meta">{s.season} · {s.ages}</div>
                </div>
                <Link to={`/youth-sports#${s.id}`} className="btn btn--outline btn--sm">View Schedule</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell" style={{ textAlign: 'center' }}>
          <p className="sec-sub" style={{ margin: '0 auto 1.5rem', maxWidth: 520 }}>
            Looking for tournament brackets or the full season calendar?
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tournaments" className="btn btn--primary">Tournament Schedule</Link>
            <Link to="/calendar" className="btn btn--outline">Full Calendar</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
