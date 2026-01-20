import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faCheck,
  faCheckCircle,
  faMobileAlt,
  faStore,
  faChartLine,
  faUsers,
  faBoxes,
  faShoppingCart,
  faCreditCard,
  faClipboardList,
  faBell,
  faSearch,
  faCog,
  faDatabase,
  faCloud,
  faCode,
  faPalette,
  faFont,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'
import { faAws, faReact, faFlutter, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Emasters = () => {
  const [activeTab, setActiveTab] = useState('about')

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  // Navigation tabs
  const navTabs = [
    { id: 'about', label: 'About the App' },
    { id: 'services', label: 'Services' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'screens', label: 'Product Screens' },
    { id: 'why', label: 'Why choose us?' }
  ]

  // Success points for CRM Application
  const crmSuccessPoints = [
    {
      text: 'Redesigned the Customer/Dealer/Retailer interactions and all order fulfillment and inventory operations',
      highlight: 'Streamlined Operations'
    },
    {
      text: 'Deployed to Google Play Store, App Store for iOS users. Tablet/iPad for retailers',
      highlight: 'Multi-Platform Deployment'
    },
    {
      text: 'The POS system automates sales and tracks "Walk-In" Walkin customers, returns, and repeat customers',
      highlight: 'Smart POS Integration'
    },
    {
      text: 'Implemented real-time Reports, Dashboards for Sales to users, Payments, Margins, and Inventory trends',
      highlight: 'Real-time Analytics'
    },
    {
      text: 'Created a shopping cart like experience to help users add items to order that flows through to inventory management',
      highlight: 'Intuitive Shopping Experience'
    },
    {
      text: 'Managed a full product life cycle from ideation to release using design best practices',
      highlight: 'Complete Product Lifecycle'
    }
  ]

  // Primary Features of the App
  const primaryFeatures = [
    {
      number: '01',
      title: 'Dashboard',
      icon: faChartLine,
      color: 'text-blue-500',
      description: 'Customer can see all their orders, pending payments, and store credits in a single dashboard view'
    },
    {
      number: '02',
      title: 'Inventory',
      icon: faBoxes,
      color: 'text-green-500',
      description: 'A guided walkthrough for the customer through product selection and purchase process'
    },
    {
      number: '03',
      title: 'POS',
      icon: faCreditCard,
      color: 'text-purple-500',
      description: 'Point of Sale system for Walk-in customers with cash, credit, and store credit payment options'
    },
    {
      number: '04',
      title: 'Reports',
      icon: faClipboardList,
      color: 'text-amber-500',
      description: 'Comprehensive reports and analytics for sales, inventory, and customer behavior tracking'
    }
  ]

  // Process Flow Steps
  const processSteps = [
    { id: 'login', label: 'Login', description: 'User authentication' },
    { id: 'dashboard', label: 'Dashboard', description: 'Overview of all activities' },
    { id: 'inventory', label: 'Inventory', description: 'Product management' },
    { id: 'categories', label: 'Categories', description: 'Product categorization' },
    { id: 'pos', label: 'POS', description: 'Point of sale' },
    { id: 'orders', label: 'Orders', description: 'Order management' },
    { id: 'reports', label: 'Reports', description: 'Analytics & insights' }
  ]

  // App Wireframes
  const wireframes = [
    { title: 'Login Screen', type: 'wireframe' },
    { title: 'Dashboard', type: 'wireframe' },
    { title: 'Inventory List', type: 'wireframe' },
    { title: 'Product Detail', type: 'wireframe' },
    { title: 'POS Screen', type: 'wireframe' },
    { title: 'Order Summary', type: 'wireframe' }
  ]

  // High Fidelity Screens
  const highFidelityScreens = [
    { title: 'Current Managers', color: 'from-orange-400 to-orange-600' },
    { title: 'Dashboard', color: 'from-orange-500 to-red-500' },
    { title: 'Categories', color: 'from-orange-400 to-orange-600' },
    { title: 'Cart/Order', color: 'from-orange-500 to-red-500' },
    { title: 'POS', color: 'from-orange-400 to-orange-600' }
  ]

  // Moodboard & Branding
  const brandColors = [
    { name: 'Primary', hex: '#FF6B35', color: 'bg-orange-500' },
    { name: 'Secondary', hex: '#2C3E50', color: 'bg-slate-800' },
    { name: 'Accent', hex: '#27AE60', color: 'bg-green-500' },
    { name: 'Background', hex: '#F8F9FA', color: 'bg-gray-100' }
  ]

  // Technology Stack
  const techStack = [
    { name: 'React Native', icon: faReact, color: 'text-cyan-500' },
    { name: 'Flutter', icon: faCode, color: 'text-blue-500' },
    { name: 'Firebase', icon: faDatabase, color: 'text-amber-500' },
    { name: 'AWS', icon: faAws, color: 'text-orange-500' },
    { name: 'Stripe', icon: faCreditCard, color: 'text-purple-500' }
  ]

  // Industries
  const industries = [
    'Retail Industry',
    'Healthcare Industry',
    'Food Industry',
    'Travel Industry',
    'Banking & Finance Industry'
  ]

  // Core Services
  const coreServices = [
    'App Development',
    'Web Development',
    'Cloud Services',
    'API Integrations',
    'UI/UX Solutions'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            {/* eMasters Logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">e</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              eMASTERS
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-4xl leading-relaxed"
          >
            A retail commerce project for internal Sales Based, Collaboration and Marketing Management
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200">
          <div className="container-custom">
            <div className="flex flex-wrap">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-primary-500 border-primary-500'
                      : 'text-neutral-500 border-transparent hover:text-primary-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-Store CRM Application Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              In-Store <span className="text-primary-500">Customer Relationship Management (CRM)</span>
              <br />Application for local Businesses
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              {/* eMasters Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">e</span>
                </div>
                <span className="text-2xl font-bold text-neutral-800">eMASTERS</span>
              </div>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                eMASTERS is a retail point of sale mobile/tablet application for small businesses to manage their business activities like sales and inventory by directly Posting their sales into the application and view results and analytics reports, sales receipts and notifications for inventory, all from single app.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Our team created the Office Suite, eMASTERS suite for Android & iOS platform helping grocery stores and small businesses track orders and inventory, process POS orders with ability to accept cash, credit card, gift cards and online payments. eMASTERS is customizable to complement the unique business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Phone Mockup with App Screen */}
              <div className="relative flex justify-center">
                {/* Illustration of person */}
                <div className="absolute -left-8 bottom-0 w-32 h-40 opacity-80">
                  <div className="w-full h-full flex items-end justify-center">
                    <FontAwesomeIcon icon={faUsers} className="text-orange-300 text-6xl" />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative z-10 w-64 h-[500px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="h-8 bg-orange-500 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white/30 rounded"></div>
                    </div>
                    {/* App content mockup */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
                        <div>
                          <div className="h-2 w-20 bg-neutral-200 rounded"></div>
                          <div className="h-1.5 w-14 bg-neutral-100 rounded mt-1"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="aspect-square bg-orange-50 rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-orange-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                      <div className="h-2 bg-neutral-100 rounded mb-2"></div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg">
                            <div className="w-10 h-10 bg-orange-100 rounded"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-neutral-200 rounded w-3/4"></div>
                              <div className="h-1.5 bg-neutral-100 rounded w-1/2 mt-1"></div>
                            </div>
                            <div className="text-xs text-orange-500 font-medium">$XX</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-10 right-10 grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success of our CRM Application */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Person with devices */}
                <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <FontAwesomeIcon icon={faStore} className="text-orange-400 text-6xl mb-4" />
                    <div className="flex gap-3 justify-center">
                      <FontAwesomeIcon icon={faMobileAlt} className="text-orange-300 text-2xl" />
                      <FontAwesomeIcon icon={faShoppingCart} className="text-orange-300 text-2xl" />
                      <FontAwesomeIcon icon={faCreditCard} className="text-orange-300 text-2xl" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-orange-500 text-2xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBoxes} className="text-green-500 text-xl" />
                </div>
              </div>
            </motion.div>

            {/* Success Points */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Success of our <span className="text-primary-500">CRM Application</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <ul className="space-y-5">
                {crmSuccessPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-600">
                        {point.text} - <span className="text-accent font-medium">{point.highlight}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Features of the App */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary-500">Primary Features</span> of the App
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Features with Phone Mockups */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Phone Mockup */}
                <div className="relative mb-6">
                  <div className="w-full max-w-[180px] mx-auto h-[320px] bg-slate-900 rounded-[2rem] p-2 shadow-xl">
                    <div className="h-full bg-white rounded-[1.5rem] overflow-hidden">
                      <div className="h-6 bg-orange-500"></div>
                      <div className="p-3">
                        <div className="h-2 bg-neutral-200 rounded mb-2"></div>
                        <div className="grid grid-cols-2 gap-1 mb-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-12 bg-orange-50 rounded"></div>
                          ))}
                        </div>
                        <div className="space-y-1">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-8 bg-neutral-50 rounded flex items-center px-2 gap-2">
                              <div className="w-6 h-6 bg-orange-100 rounded"></div>
                              <div className="flex-1 h-2 bg-neutral-200 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {feature.number}
                  </div>
                </div>

                {/* Feature Info */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 mb-3`}>
                    <FontAwesomeIcon icon={feature.icon} className={`${feature.color} text-xl`} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Flow */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary-500">Process Flow</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Process Flow Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Top Row */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-orange-200">
                    <FontAwesomeIcon icon={faUsers} className="text-orange-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Login</span>
                </div>
                <div className="w-8 h-0.5 bg-orange-300"></div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-orange-200">
                    <FontAwesomeIcon icon={faChartLine} className="text-orange-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Dashboard</span>
                </div>
              </div>
            </div>

            {/* Connecting line down */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-orange-300"></div>
            </div>

            {/* Middle Row */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-green-200">
                    <FontAwesomeIcon icon={faBoxes} className="text-green-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Inventory</span>
                </div>
                <div className="w-8 h-0.5 bg-green-300"></div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-blue-200">
                    <FontAwesomeIcon icon={faLayerGroup} className="text-blue-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Categories</span>
                </div>
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-purple-200">
                    <FontAwesomeIcon icon={faCreditCard} className="text-purple-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">POS</span>
                </div>
                <div className="w-8 h-0.5 bg-purple-300"></div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-amber-200">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-amber-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Orders</span>
                </div>
                <div className="w-8 h-0.5 bg-amber-300"></div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border-2 border-red-200">
                    <FontAwesomeIcon icon={faClipboardList} className="text-red-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Reports</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Wireframes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              A peep into the <span className="text-primary-500">App's Wireframes</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Wireframe Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {wireframes.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Wireframe Phone */}
                <div className="w-full max-w-[140px] mx-auto h-[240px] bg-white border-2 border-neutral-300 rounded-[1.5rem] p-2 shadow-sm">
                  <div className="h-full bg-neutral-50 rounded-[1rem] overflow-hidden">
                    <div className="h-4 bg-neutral-200"></div>
                    <div className="p-2">
                      <div className="h-1.5 bg-neutral-200 rounded mb-2"></div>
                      <div className="space-y-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="h-6 bg-neutral-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-3">{screen.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Fidelity Screens */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 relative overflow-hidden">
        {/* Decorative wave */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-white/80">High-Fidelity</span> Screens
            </h2>
            <div className="w-16 h-1 bg-white/50 mt-4"></div>
          </motion.div>

          {/* High Fidelity Phone Mockups */}
          <div className="flex flex-wrap justify-center items-end gap-6">
            {highFidelityScreens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                style={{ marginTop: index % 2 === 0 ? '0' : '2rem' }}
              >
                {/* Phone */}
                <div className="w-44 h-[360px] bg-slate-900 rounded-[2rem] p-2 shadow-2xl">
                  <div className="h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="h-6 bg-orange-500 flex items-center justify-center">
                      <div className="w-12 h-1 bg-white/30 rounded"></div>
                    </div>
                    <div className="p-3">
                      <div className="h-2 bg-neutral-200 rounded mb-2"></div>
                      <div className="grid grid-cols-2 gap-1 mb-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-10 bg-orange-50 rounded"></div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-6 bg-neutral-50 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-sm font-medium whitespace-nowrap">{screen.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moodboard & Branding */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary-500">Moodboard</span> & Branding
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Color Palette */}
            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Color Palette</h3>
              <div className="flex gap-4">
                {brandColors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${color.color} rounded-xl shadow-lg mb-2`}></div>
                    <p className="text-xs text-neutral-500">{color.name}</p>
                    <p className="text-xs text-neutral-400">{color.hex}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Primary Font</p>
                  <p className="text-2xl font-bold text-neutral-900">Montserrat Bold</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Body Font</p>
                  <p className="text-lg text-neutral-700">Light | Regular | Medium | Bold</p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-neutral-900">Aa</span>
                  <span className="text-2xl text-neutral-700">Header - 32 pt</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-xl text-neutral-600">Body - 14 pt</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary-500">Technology Stack</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3">
                  <FontAwesomeIcon icon={tech.icon} className={`${tech.color} text-3xl`} />
                </div>
                <p className="text-sm text-neutral-600">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Core Services Footer */}
      <section className="py-16 bg-slate-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold text-primary-400 mb-6">Industries</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <Link to="#" className="text-primary-300 hover:text-primary-200 transition-colors">
                      {industry}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Services */}
            <div>
              <h3 className="text-lg font-bold text-accent mb-6">Core Services</h3>
              <ul className="space-y-3">
                {coreServices.map((service, index) => (
                  <li key={index}>
                    <Link to="#" className="text-primary-300 hover:text-primary-200 transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Portfolio CTA */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="container-custom text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Emasters
