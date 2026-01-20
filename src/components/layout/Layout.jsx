import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
