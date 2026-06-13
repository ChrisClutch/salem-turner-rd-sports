import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Logo className="brand-mark" />
            <span className="brand-text">
              <span className="brand-org" style={{ color: 'rgba(255,255,255,0.6)' }}>{SITE.org}</span>
              <span className="brand-name">{SITE.name}</span>
            </span>
          </Link>
          <p>{SITE.acres} acres of athletic fields, courts, and community on {SITE.address.line1} in {SITE.city}.</p>
          <div className="footer-social">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
            <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Play</h4>
          <ul>
            <li><Link to="/adult-leagues">Adult Leagues</Link></li>
            <li><Link to="/youth-sports">Youth Sports</Link></li>
            <li><Link to="/tournaments">Tournaments</Link></li>
            <li><Link to="/schedules">Game Schedules</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Complex</h4>
          <ul>
            <li><Link to="/fields">Fields &amp; Rentals</Link></li>
            <li><Link to="/about">About the Complex</Link></li>
            <li><Link to="/about#impact">Economic Impact</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit</h4>
          <ul>
            <li><a href={SITE.address.maps} target="_blank" rel="noopener noreferrer">{SITE.address.line1}</a></li>
            <li>{SITE.address.line2}</li>
            <li><a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`}>{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.org}. All rights reserved.</span>
        <span>{SITE.name} · {SITE.city}</span>
      </div>
    </footer>
  )
}
