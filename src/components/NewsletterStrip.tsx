import { useState } from 'react'
import { isValidEmail } from '../utils/sanitize'

export default function NewsletterStrip() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) return
    setSent(true)
  }

  return (
    <section className="section">
      <div className="shell">
        <div className="newsletter">
          <div>
            <h2>Join our email &amp; text list</h2>
            <p>
              Get league registration openings, tournament dates, and weather
              cancellation updates for the complex delivered straight to you.
            </p>
            {sent && <p className="nl-note">✓ Thanks! You’re on the list.</p>}
          </div>
          {!sent && (
            <form className="nl-form" onSubmit={onSubmit}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={254}
                autoComplete="email"
                aria-label="Email address"
              />
              <button type="submit" className="btn">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
