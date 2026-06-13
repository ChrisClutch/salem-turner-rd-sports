import { useState } from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { SITE } from '../data/site'
import { isValidEmail, isValidPhone, sanitize } from '../utils/sanitize'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'General Question', message: '' })

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: sanitize(value) }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !isValidEmail(form.email) || !isValidPhone(form.phone)) return
    setSent(true)
  }

  return (
    <Layout>
      <PageHero
        eyebrow="We’re Here to Help"
        title="Contact Us"
        intro="Questions about leagues, rentals, tournaments, or sponsorships? Reach out and the Salem Parks & Recreation team will get back to you."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="shell split" style={{ alignItems: 'start' }}>
          {/* INFO */}
          <div>
            <div className="info-cards" style={{ gridTemplateColumns: '1fr' }}>
              <div className="info-card">
                <h3>Visit</h3>
                <p>{SITE.address.line1}<br />{SITE.address.line2}</p>
                <a href={SITE.address.maps} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              </div>
              <div className="info-card">
                <h3>Call</h3>
                <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`}>{SITE.phone}</a>
                <p style={{ marginTop: '0.35rem' }}>Mon–Fri, 8:00 AM – 5:00 PM</p>
              </div>
              <div className="info-card">
                <h3>Email</h3>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            {sent ? (
              <div className="form-success">
                <strong>Thanks, {form.name || 'friend'}!</strong>
                <p style={{ margin: '0.4rem 0 0' }}>Your message is on its way. We’ll be in touch soon.</p>
              </div>
            ) : (
              <form className="form-grid" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" required value={form.name} onChange={(e) => update('name', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="topic">Topic</label>
                  <select id="topic" value={form.topic} onChange={(e) => update('topic', e.target.value)}>
                    <option>General Question</option>
                    <option>League Registration</option>
                    <option>Free-Agent Signup</option>
                    <option>Field / Court Rental</option>
                    <option>Tournament Hosting</option>
                    <option>Sponsorship</option>
                    <option>Volunteer / Coaching</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" required value={form.message} onChange={(e) => update('message', e.target.value)} />
                </div>
                <div className="full">
                  <button type="submit" className="btn btn--primary">Send Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
