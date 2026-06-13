import { Link } from 'react-router-dom'

type Props = {
  eyebrow?: string
  title: string
  intro?: string
  crumbs?: { label: string; to?: string }[]
}

export default function PageHero({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className="page-hero">
      <div className="shell">
        {crumbs && (
          <div className="crumb">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && <span className="sep">/</span>}
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </div>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  )
}
