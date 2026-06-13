// ============================================================
// Turner Road Sports Complex — Salem Parks & Recreation
// Site content data
// ============================================================

export const SITE = {
  org: 'Salem Parks & Recreation',
  name: 'Turner Road Sports Complex',
  shortName: 'Sports Salem',
  acres: 177,
  tagline: '177 acres of play on Turner Road',
  city: 'Salem, Oregon',
  address: {
    line1: 'Turner Road SE',
    line2: 'Salem, Oregon 97302',
    maps: 'https://www.google.com/maps/search/?api=1&query=Turner+Road+SE+Salem+Oregon',
  },
  phone: '(503) 588-6261',
  email: 'sports@cityofsalem.net',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    twitter: 'https://twitter.com/',
  },
}

export type NavChild = { label: string; to: string }
export type NavItem = { label: string; to: string; children?: NavChild[] }

export const NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Game Schedules', to: '/schedules' },
  { label: 'Calendar', to: '/calendar' },
  {
    label: 'Adult Leagues',
    to: '/adult-leagues',
    children: [
      { label: 'Adult Baseball', to: '/adult-leagues#baseball' },
      { label: 'Adult Basketball', to: '/adult-leagues#basketball' },
      { label: 'Adult Soccer', to: '/adult-leagues#soccer' },
      { label: 'Adult Softball', to: '/adult-leagues#softball' },
      { label: 'Adult Volleyball', to: '/adult-leagues#volleyball' },
      { label: 'Adult Pickleball', to: '/adult-leagues#pickleball' },
      { label: 'Senior Softball', to: '/adult-leagues#senior-softball' },
    ],
  },
  {
    label: 'Youth Sports',
    to: '/youth-sports',
    children: [
      { label: 'Youth Baseball', to: '/youth-sports#baseball' },
      { label: 'Youth Basketball', to: '/youth-sports#basketball' },
      { label: 'Youth Flag Football', to: '/youth-sports#flag-football' },
      { label: 'Youth Indoor Soccer', to: '/youth-sports#indoor-soccer' },
      { label: 'Youth Volleyball', to: '/youth-sports#volleyball' },
      { label: 'Tots Sports Sampler', to: '/youth-sports#tots' },
    ],
  },
  {
    label: 'Tournaments',
    to: '/tournaments',
    children: [
      { label: 'How to Sign Up', to: '/tournaments#sign-up' },
      { label: 'Baseball Tournaments', to: '/tournaments#baseball' },
      { label: 'Fastpitch Tournaments', to: '/tournaments#fastpitch' },
      { label: 'Volleyball Tournaments', to: '/tournaments#volleyball' },
    ],
  },
  {
    label: 'Fields & Rentals',
    to: '/fields',
    children: [
      { label: 'General Rentals', to: '/fields#general' },
      { label: 'Tournament Rentals', to: '/fields#tournament' },
      { label: 'About the Complex', to: '/fields#about' },
    ],
  },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// Quick-link feature cards on the homepage (mirrors Medford's hero callouts)
export const FEATURE_CARDS = [
  {
    eyebrow: '2026 Season',
    title: 'Tournament & Event Schedule',
    body: 'View every tournament, league night, and special event coming to the complex this year.',
    to: '/tournaments',
    cta: 'View Schedule',
  },
  {
    eyebrow: 'Community',
    title: 'Annual Economic Impact Report',
    body: 'See how 177 acres of sport drives visitors, hotel stays, and dollars into the Salem economy.',
    to: '/about#impact',
    cta: 'Read the Report',
  },
  {
    eyebrow: 'Today',
    title: 'Game Schedules',
    body: 'Links to live game schedules and standings for every adult and youth league.',
    to: '/schedules',
    cta: 'Find Your Game',
  },
]

export const STATS = [
  { num: '177', label: 'Acres' },
  { num: '12', label: 'Championship Fields' },
  { num: '8', label: 'Indoor Courts' },
  { num: '30+', label: 'Leagues & Tournaments' },
]

export type Sport = {
  id: string
  name: string
  season: string
  ages?: string
  blurb: string
  icon: string
}

export const ADULT_LEAGUES: Sport[] = [
  { id: 'baseball', name: 'Adult Baseball', season: 'Spring – Summer', ages: '18+', icon: '⚾', blurb: 'Wood-bat and BBCOR divisions on full-size championship diamonds.' },
  { id: 'basketball', name: 'Adult Basketball', season: 'Fall – Winter', ages: '18+', icon: '🏀', blurb: 'Recreational and competitive divisions in the indoor fieldhouse.' },
  { id: 'soccer', name: 'Adult Soccer', season: 'Spring & Fall', ages: '18+', icon: '⚽', blurb: '7v7 and 11v11 outdoor leagues on lighted turf and grass pitches.' },
  { id: 'softball', name: 'Adult Softball', season: 'Spring – Summer', ages: '18+', icon: '🥎', blurb: "Men's, women's, and coed slow-pitch on dedicated softball diamonds." },
  { id: 'volleyball', name: 'Adult Volleyball', season: 'Year-round', ages: '18+', icon: '🏐', blurb: 'Indoor coed and women’s leagues plus summer sand courts.' },
  { id: 'pickleball', name: 'Adult Pickleball', season: 'Year-round', ages: '18+', icon: '🎾', blurb: 'Open play and leagues on a dozen dedicated outdoor and indoor courts.' },
  { id: 'senior-softball', name: 'Senior Softball', season: 'Spring – Summer', ages: '50+', icon: '🥎', blurb: 'A welcoming, active league for our 50-and-better players.' },
]

export const YOUTH_SPORTS: Sport[] = [
  { id: 'baseball', name: 'Youth Baseball', season: 'Spring', ages: 'Ages 5–14', icon: '⚾', blurb: 'Tee-ball through majors, with a free intro program for first-time players.' },
  { id: 'basketball', name: 'Youth Basketball', season: 'Winter', ages: 'Ages 6–14', icon: '🏀', blurb: 'Skill-based divisions emphasizing fundamentals, teamwork, and fun.' },
  { id: 'flag-football', name: 'Youth Flag Football', season: 'Fall', ages: 'Ages 6–13', icon: '🏈', blurb: 'Non-contact NFL-style flag football on the complex turf fields.' },
  { id: 'indoor-soccer', name: 'Youth Indoor Soccer', season: 'Winter', ages: 'Ages 4–12', icon: '⚽', blurb: 'Fast-paced small-sided soccer in the heated indoor arena.' },
  { id: 'volleyball', name: 'Youth Volleyball', season: 'Fall', ages: 'Ages 8–14', icon: '🏐', blurb: 'Learn-to-play and competitive divisions for new and returning players.' },
  { id: 'tots', name: 'Tots Sports Sampler', season: 'Year-round', ages: 'Ages 3–5', icon: '⭐', blurb: 'A rotating introduction to soccer, basketball, and tee-ball basics.' },
]

export type Tournament = {
  name: string
  sport: 'Baseball' | 'Fastpitch' | 'Volleyball'
  date: string
  blurb: string
}

export const TOURNAMENTS: Tournament[] = [
  { name: 'Cherry City Spring Classic', sport: 'Baseball', date: 'Apr 11–12, 2026', blurb: 'Season-opening youth baseball showcase across all age brackets.' },
  { name: 'Willamette Diamond Dash', sport: 'Baseball', date: 'May 2–3, 2026', blurb: 'Fast-format weekend pool play and bracket championships.' },
  { name: 'Memorial Day Slam', sport: 'Baseball', date: 'May 23–25, 2026', blurb: 'A holiday-weekend staple drawing teams from across the Northwest.' },
  { name: 'Bigfoot Bash', sport: 'Baseball', date: 'Jun 13–14, 2026', blurb: 'Mid-summer favorite with double-elimination brackets.' },
  { name: 'Summer Sizzler', sport: 'Baseball', date: 'Jul 18–19, 2026', blurb: 'Peak-season tournament under the lights on all 12 diamonds.' },
  { name: 'Fall Classic', sport: 'Baseball', date: 'Sep 19–20, 2026', blurb: 'The signature end-of-season championship event.' },
  { name: 'Cherry Blossom Fling', sport: 'Fastpitch', date: 'Mar 28–29, 2026', blurb: 'Early-spring fastpitch opener for 8U through 18U.' },
  { name: 'Halloween in May', sport: 'Fastpitch', date: 'May 9–10, 2026', blurb: 'Costumed, can’t-miss fastpitch weekend for the whole family.' },
  { name: 'The Icebreaker', sport: 'Volleyball', date: 'Jan 17–18, 2026', blurb: 'The first indoor club volleyball tournament of the new year.' },
  { name: 'Capital Court Clash', sport: 'Volleyball', date: 'Feb 21–22, 2026', blurb: 'A full house of club teams across eight indoor courts.' },
]

export const SPONSORS = [
  'Willamette Valley Bank',
  'Cherry City Brewing',
  'Salem Health',
  'Roth’s Fresh Markets',
  'Mountain West Investment',
  'Capitol Toyota',
  'Bo & Vine',
  'Garmin Salem',
  'Pioneer Trust',
  'Travel Salem',
  'Oregon Smiles Dental',
  'Rivenes Roofing',
]
