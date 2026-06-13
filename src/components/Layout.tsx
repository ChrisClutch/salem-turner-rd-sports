import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="page">{children}</main>
      <Footer />
    </>
  )
}
