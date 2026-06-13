import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { TOURNAMENTS } from '../data/site'

// A few illustrative recurring league nights to flesh out the calendar.
const LEAGUE_EVENTS = [
  { date: 'Apr 6, 2026', month: 'APR', day: '6', title: 'Adult Softball — Opening Night', meta: 'Diamonds 1–6 · 6:00 PM' },
  { date: 'Apr 9, 2026', month: 'APR', day: '9', title: 'Adult Soccer — Week 1', meta: 'Turf Fields · 7:00 PM' },
  { date: 'Apr 14, 2026', month: 'APR', day: '14', title: 'Youth Baseball — Practices Begin', meta: 'Diamonds 7–12 · 5:30 PM' },
  { date: 'Apr 20, 2026', month: 'APR', day: '20', title: 'Adult Volleyball — League Night', meta: 'Fieldhouse Courts · 6:30 PM' },
]

type CalItem = { date: string; month: string; day: string; title: string; meta: string }

function parseMonthDay(dateStr: string) {
  const m = dateStr.match(/^([A-Za-z]{3})\s+(\d+)/)
  return { month: (m?.[1] ?? '').toUpperCase(), day: m?.[2] ?? '' }
}

export default function CalendarPage() {
  const tournItems: CalItem[] = TOURNAMENTS.map((t) => {
    const { month, day } = parseMonthDay(t.date)
    return { date: t.date, month, day, title: `${t.name} (${t.sport})`, meta: t.date }
  })

  const all = [...LEAGUE_EVENTS, ...tournItems]

  return (
    <Layout>
      <PageHero
        eyebrow="2026 Season"
        title="Calendar"
        intro="League nights, tournaments, and special events at the Turner Road Sports Complex, all in one place."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Calendar' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="schedule-list">
            {all.map((e, i) => (
              <div className="schedule-row" key={`${e.title}-${i}`}>
                <div className="date-chip">
                  <div className="d">{e.day}</div>
                  <div className="m">{e.month}</div>
                </div>
                <div>
                  <h4>{e.title}</h4>
                  <div className="meta">{e.meta}</div>
                </div>
                <span className="tag tag--season">Scheduled</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--slate)' }}>
            Dates shown are illustrative for the 2026 season and subject to change.
          </p>
        </div>
      </section>
    </Layout>
  )
}
