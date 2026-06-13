import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import SchedulesPage from './pages/SchedulesPage'
import CalendarPage from './pages/CalendarPage'
import AdultLeaguesPage from './pages/AdultLeaguesPage'
import YouthSportsPage from './pages/YouthSportsPage'
import TournamentsPage from './pages/TournamentsPage'
import FieldsPage from './pages/FieldsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/adult-leagues" element={<AdultLeaguesPage />} />
        <Route path="/youth-sports" element={<YouthSportsPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/fields" element={<FieldsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
