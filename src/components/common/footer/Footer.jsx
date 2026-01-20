import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook,
  IoMail,
  IoCall,
  IoLocationSharp,
  IoArrowForward
} from 'react-icons/io5'

// Import images
import logoImg from '@/assets/logo-jmt-new.png'

const footerLinks = {
  services: [
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'UI/UX Services', path: '/ui-ux-services' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
  ],
  company: [
    { name: 'About Us', path: '/about-us' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact-us' },
  ],
  projects: [
    { name: 'Xtime', path: '/xtime' },
    { name: 'eMasters', path: '/emasters' },
    { name: 'Adobe', path: '/adobe' },
  ],
}

const socialLinks = [
  { icon: IoLogoLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: IoLogoTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: IoLogoFacebook, href: 'https://facebook.com', label: 'Facebook' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-primary-100">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-5 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-primary-500 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center gap-2"
              >
                Subscribe
                <IoArrowForward />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/home" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-200 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-display font-bold text-xl">
                  JMT<span className="text-primary-400">.</span>
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              Delivering innovative technology solutions that transform businesses
              and create meaningful digital experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@jmtworldwidellc.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <IoMail className="text-primary-400" />
                info@jmtworldwidellc.com
              </a>
              <a href="tel:+14084210793" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <IoCall className="text-primary-400" />
                +1 (408) 421-0793
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <IoLocationSharp className="text-primary-400 mt-1 flex-shrink-0" />
                <span>San Francisco, CA, USA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
            <p>© {currentYear} JMT Worldwide LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
