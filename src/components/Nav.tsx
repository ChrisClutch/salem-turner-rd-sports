import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV, SITE } from '../data/site'
import Logo from './Logo'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname, location.hash])

  const isActive = (to: string) => {
    const base = to.split('#')[0]
    return base !== '/' && location.pathname.startsWith(base)
  }

  return (
    <header className="sitehead">
      <div className="topbar">
        <span>{SITE.address.line1} · {SITE.address.line2}</span>
        <div className="topbar-links">
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`}>{SITE.phone}</a>
          <Link to="/contact">Contact</Link>
          <Link to="/schedules">Game Schedules</Link>
        </div>
      </div>

      <nav className="navbar" aria-label="Primary">
        <div className="navbar-inner">
          <Link to="/" className="brand" aria-label={`${SITE.name} home`}>
            <Logo className="brand-mark" />
            <span className="brand-text">
              <span className="brand-org">{SITE.org}</span>
              <span className="brand-name">{SITE.name}</span>
            </span>
          </Link>

          <ul className="navlinks">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={`navlink ${isActive(item.to) || location.pathname === item.to ? 'active' : ''}`}>
                  {item.label}
                  {item.children && <span className="caret">▾</span>}
                </Link>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to}>{c.label}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? '' : 'closed'}`}>
        {NAV.map((item) => (
          <div className="m-item" key={item.label}>
            {item.children ? (
              <>
                <button
                  className="m-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                >
                  {item.label} <span style={{ float: 'right' }}>{openGroup === item.label ? '−' : '+'}</span>
                </button>
                {openGroup === item.label && (
                  <div className="m-sub">
                    <Link to={item.to}>All {item.label}</Link>
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to}>{c.label}</Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link className="m-link" to={item.to}>{item.label}</Link>
            )}
          </div>
        ))}
      </div>
    </header>
  )
}
