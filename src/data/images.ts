// ============================================================
// Photography — fields, courts, and the complex.
//
// These reference free-for-commercial-use stock photos (Unsplash &
// Pexels; no attribution required) served from their image CDNs. They
// load in the visitor's browser at runtime. Each is layered over a brand
// gradient fallback, so the layout holds even if a CDN image is blocked.
//
// To self-host later: download these into /public/images and swap the
// URLs below for local paths like '/images/hero-baseball.jpg'.
// ============================================================

const U = (id: string) =>
  `https://images.unsplash.com/${id}?fm=jpg&q=70&w=1920&auto=format&fit=crop`

export const IMAGES = {
  heroBaseball: U('photo-1475440197469-e367ec8eeb19'),
  heroCourt: U('photo-1609513677385-5d2b049d9431'),
  heroSoccer: U('photo-1487466365202-1afdb86c764e'),
  complexAerial:
    'https://images.pexels.com/photos/30747154/pexels-photo-30747154.jpeg?auto=compress&cs=tinysrgb&w=1920',
  fieldhouse: U('photo-1701272873248-ee041b51b02b'),
  fieldFence: U('photo-1768815022389-720cc089f40e'),
  soccerPlay: U('photo-1431324155629-1a6deb1dec8d'),
} as const

import type { CSSProperties } from 'react'

/** Cover-style background for a photo panel. */
export function coverBg(url: string): CSSProperties {
  return { backgroundImage: `url("${url}")`, backgroundSize: 'cover', backgroundPosition: 'center' }
}
