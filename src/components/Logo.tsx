// Inline SVG mark for the Turner Road Sports Complex — a baseball diamond /
// field motif rendered in the brand orange on a navy roundel.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Turner Road Sports Complex">
      <circle cx="32" cy="32" r="32" fill="#0d1b2a" />
      <circle cx="32" cy="32" r="29" fill="none" stroke="#1b7a3e" strokeWidth="2" />
      {/* diamond */}
      <path d="M32 16 L48 32 L32 48 L16 32 Z" fill="none" stroke="#f4791f" strokeWidth="3" strokeLinejoin="round" />
      {/* center */}
      <circle cx="32" cy="32" r="4" fill="#f4b400" />
      {/* base markers */}
      <circle cx="32" cy="16" r="2.4" fill="#ffffff" />
      <circle cx="48" cy="32" r="2.4" fill="#ffffff" />
      <circle cx="32" cy="48" r="2.4" fill="#ffffff" />
      <circle cx="16" cy="32" r="2.4" fill="#ffffff" />
    </svg>
  )
}
