import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoSearch, IoClose, IoChevronDown } from 'react-icons/io5'
import { HiMenuAlt3 } from 'react-icons/hi'

// Import images
import logoImg from '@/assets/logo-jmt-new.png'

const services = [
  { name: 'Campaign Management', path: '/campaign-management' },
  { name: 'Cloud Services', path: '/cloud-services' },
  { name: 'Digital Transformation', path: '/digital-transformation' },
  { name: 'Learning Management System', path: '/learning-management-system' },
  { name: 'Mobile Development', path: '/mobile-development' },
  { name: 'Portal & Collaboration', path: '/portal-collaboration' },
  { name: 'QA Testing', path: '/qatesting' },
  { name: 'UI/UX Services', path: '/ui-ux-services' },
  { name: 'Web Development', path: '/web-development' },
  { name: 'Workflow Automation', path: '/workflow-automation' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    setIsSearchOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/home" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-200 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-display font-bold text-xl text-neutral-900">
                  JMT<span className="text-primary-400">.</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="nav-link flex items-center gap-1">
                  Services
                  <IoChevronDown
                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-hard p-3 mt-2"
                    >
                      <div className="grid gap-1">
                        {services.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ${isActive
                                ? 'bg-primary-50 text-primary-500 font-medium'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                              }`
                            }
                          >
                            {service.name}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Search button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary-50 flex items-center justify-center text-neutral-600 hover:text-primary-400 transition-colors"
              >
                {isSearchOpen ? <IoClose size={20} /> : <IoSearch size={20} />}
              </motion.button>

              {/* Contact button (desktop) */}
              <Link to="/contact-us" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                >
                  Contact Us
                </motion.button>
              </Link>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary-50 flex items-center justify-center text-neutral-600 hover:text-primary-400 transition-colors"
              >
                <HiMenuAlt3 size={22} />
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Search overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-medium border-t border-neutral-100"
            >
              <div className="container-custom py-4">
                <div className="relative max-w-2xl mx-auto">
                  <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services, projects..."
                    className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-hard z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600"
                  >
                    <IoClose size={22} />
                  </motion.button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="space-y-2">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-500' : 'text-neutral-700 hover:bg-neutral-50'
                      }`
                    }
                  >
                    Home
                  </NavLink>

                  {/* Services accordion */}
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      Services
                      <IoChevronDown
                        className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {services.map((service) => (
                              <NavLink
                                key={service.path}
                                to={service.path}
                                className={({ isActive }) =>
                                  `block px-4 py-2 rounded-lg text-sm transition-colors ${isActive
                                    ? 'bg-primary-50 text-primary-500'
                                    : 'text-neutral-600 hover:bg-neutral-50'
                                  }`
                                }
                              >
                                {service.name}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-500' : 'text-neutral-700 hover:bg-neutral-50'
                      }`
                    }
                  >
                    Portfolio
                  </NavLink>

                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-500' : 'text-neutral-700 hover:bg-neutral-50'
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                </nav>

                {/* Contact button */}
                <div className="mt-8">
                  <Link to="/contact-us" className="block">
                    <button className="w-full btn btn-primary">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
