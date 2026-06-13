import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="section" style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="shell">
          <span className="eyebrow">Error 404</span>
          <h1 className="sec-title" style={{ marginBottom: '1rem' }}>Foul Ball — Page Not Found</h1>
          <p className="sec-sub" style={{ margin: '0 auto 2rem', maxWidth: 480 }}>
            The page you’re looking for isn’t on the field. Let’s get you back in the game.
          </p>
          <Link to="/" className="btn btn--primary">Back to Home Plate</Link>
        </div>
      </section>
    </Layout>
  )
}
