import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faCheck,
  faCheckCircle,
  faLightbulb,
  faBullseye,
  faCloud,
  faMobileAlt,
  faTabletAlt,
  faDesktop,
  faCalendarAlt,
  faComments,
  faSearch,
  faCar,
  faChartBar,
  faDatabase,
  faServer,
  faCog,
  faUsers,
  faClipboardCheck,
  faBell,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { faJava, faAws } from '@fortawesome/free-brands-svg-icons'

// Import images
import heroImg from '@/assets/xtime/car-radio-listening-91028216.png'
import laptopImg from '@/assets/xtime/HOLD_302159992_AR_-1_SPBBGGYHUIDW.png'
import tabletImg from '@/assets/xtime/engage-tablet2_V2.png'
import mobileImg from '@/assets/xtime/Xtime-Mobile.png'
import gmlogo from '@/assets/xtime/GM-logo.png'
import fordlogo from '@/assets/xtime/Ford_logo_flat.png'
import nissanlogo from '@/assets/xtime/nissan_logo.png'
import subarulogo from '@/assets/xtime/subaru.png'
import bmwlogo from '@/assets/xtime/bmw.png'
import toyotalogo from '@assets/xtime/toyota_logo.png'
import cloudSolutionImg from '@/assets/xtime/Artboard.png'
import projectAnalysisImg from '@/assets/xtime/inspect-prouct-hero-1.png'
import finalDesignImg from '@/assets/xtime/final_design.png'
import cloudMigrationImg from '@/assets/xtime/ipad-scheduling.png'
import spectrumImg from '@/assets/xtime/xtime-spectrum-300px.png'
import inviteImg from '@/assets/xtime/invite-2.png'
import scheduleImg from '@/assets/xtime/schedule-1.png'
import engageImg from '@/assets/xtime/engage-1.png'
import inspectImg from '@/assets/xtime/inspect-2.png'

const Xtime = () => {
  const [activeTab, setActiveTab] = useState('about')

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  // Navigation tabs
  const navTabs = [
    { id: 'about', label: 'About the Project' },
    { id: 'features', label: 'Features' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'process', label: 'Process Steps' },
    { id: 'why', label: 'Why choose us?' }
  ]


  // OE Brands - combine name and logo in one array of objects
  const brands = [
    { name: 'GM', logo: gmlogo },
    { name: 'BMW', logo: bmwlogo },
    { name: 'Nissan', logo: nissanlogo },
    { name: 'Subaru', logo: subarulogo },
    { name: 'Toyota', logo: toyotalogo }
  ]

  // Products
  const products = [
    { name: 'INVITE', logo: inviteImg, icon: faBell, color: 'border-blue-500 text-blue-500', bgColor: 'bg-blue-50', features: ['Dashboard', 'Notifications', 'Service Reminders'] },
    { name: 'SCHEDULE', logo: scheduleImg, icon: faCalendarAlt, color: 'border-amber-500 text-amber-500', bgColor: 'bg-amber-50', features: ['Online Scheduling', 'Mobile Scheduling', 'Dealer Scheduling', 'Call Center Scheduling', 'Menu pricing', 'Ride Sharing'] },
    { name: 'ENGAGE', logo: engageImg, icon: faComments, color: 'border-green-500 text-green-500', bgColor: 'bg-green-50', features: ['Tablet Reception', 'Texting', 'Walk-around', 'Vehicle Check-in', 'Add-ons Detailing', 'Diagnostics'] },
    { name: 'INSPECT', logo: inspectImg, icon: faSearch, color: 'border-red-500 text-red-500', bgColor: 'bg-red-50', features: ['Vehicle Inspection', 'Service History', 'Recalls', 'Tires', 'Service Reminders'] }
  ]

  // Success points for Cloud-based Solution
  const cloudSuccessPoints = [
    {
      text: 'Re-Designed the existing Customer / Dealer / Inspection interface which increased User Retention by 14% and improved customer satisfaction',
      highlight: 'Superior Customer Experience Management'
    },
    {
      text: 'The process of appointment scheduling required managing complex data efficiently to display the relevant results',
      highlight: 'Scalable Data Management'
    },
    {
      text: "Integrate different API's to the workflow and connected vehicles to manage interactions and generate reports",
      highlight: "Robust API's and Integration"
    },
    {
      text: 'Managed customer experiences better by having instant access to service history, inspections, recalls, and tires',
      highlight: 'Smarter Cloud Management'
    },
    {
      text: 'Developed different workflows for Mobile/Web based appointment scheduling, Tablet based check-in and inspection interfaces',
      highlight: 'Specialized Multi-Channel Workflow Automation'
    },
    {
      text: 'Harnessed the right product strategy, roadmap, workflow model and Cloud ecosystem collaborations',
      highlight: 'Digital Transformation and Cloud Migration'
    }
  ]

  // Primary Analysis items
  const analysisItems = [
    {
      number: '01',
      title: 'Pain Points',
      icon: faBullseye,
      color: 'text-primary-500',
      items: [
        "The client needed a way to manage and implement SaaS Based Solutions for Xtime's products to increase customer experience during vehicle service"
      ]
    },
    {
      number: '02',
      title: 'Key Objectives',
      icon: faCog,
      color: 'text-accent',
      items: [
        'Product Integration with Dealers Service Lane Tools',
        'Regulatory Compliance with NHTSA',
        'Application Migration from On-Prem to Cloud',
        'Real-time integration with Vehicle built-in displays'
      ]
    },
    {
      number: '03',
      title: 'Our Solution',
      icon: faLightbulb,
      color: 'text-amber-500',
      items: [
        'Enhance the workflow for the X-time products by managing API Integrations and improve the Branding of the product'
      ]
    },
    {
      number: '04',
      title: 'Channels',
      icon: faMobileAlt,
      color: 'text-red-500',
      items: [
        'iOS Application for scheduling requests',
        'Website for scheduling and management',
        'Tablet Application for service providers'
      ]
    }
  ]

  // Xtime Spectrum Products
  const spectrumProducts = [
    {
      name: 'INVITE',
      logo: inviteImg,
      color: 'border-blue-500 text-blue-500',
      bgColor: 'bg-blue-50',
      features: ['Dashboard', 'Notifications', 'Service Reminders']
    },
    {
      name: 'SCHEDULE',
      logo: scheduleImg,
      color: 'border-amber-500 text-amber-500',
      bgColor: 'bg-amber-50',
      features: ['Online Scheduling', 'Mobile Scheduling', 'Dealer Scheduling', 'Call Center Scheduling', 'Menu pricing', 'Ride Sharing']
    },
    {
      name: 'ENGAGE',
      logo: engageImg,
      color: 'border-green-500 text-green-500',
      bgColor: 'bg-green-50',
      features: ['Tablet Reception', 'Texting', 'Walk-around', 'Vehicle Check-in', 'Add-ons Detailing', 'Diagnostics']
    },
    {
      name: 'INSPECT',
      logo: inspectImg,
      color: 'border-red-500 text-red-500',
      bgColor: 'bg-red-50',
      features: ['Inspection Dashboard', 'Dealership Chat', 'Multi-point Inspection', 'Enhanced Multimedia', 'Online Approvals', 'Service Tracker']
    }
  ]

  // Process Flow Steps
  const processFlowSteps = [
    { number: '01', text: 'Data from different OE centres around the selected area' },
    { number: '02', text: 'Integration with suitable API to filter and perform operation' },
    { number: '03', text: 'Perform the service selected by the user' },
    { number: '04', text: 'Generate the reports and analytics for the service' }
  ]

  // Scheduler Workflow Steps (UI mockups)
  const schedulerSteps = [
    { title: 'Schedule your service', subtitle: 'Start with Phone or Email' },
    { title: 'Individual Details', subtitle: 'First Name, Last Name, Phone, Email' },
    { title: 'What does your vehicle need?', subtitle: 'Individual Services - Recall, Repair, etc.' },
    { title: 'Tell us about your vehicle', subtitle: 'Make, Year, Model' },
    { title: 'Transportation Options', subtitle: 'I have a ride / I\'ll wait at the dealership' },
    { title: 'Appointment Time', subtitle: 'Select date and time slot' },
    { title: 'Success!', subtitle: 'Email confirmation sent' },
    { title: 'Review and Confirm', subtitle: 'Contact Info, Reminders, Review' }
  ]

  // Technology Stack
  const techStack = {
    bi: {
      title: 'Business Intelligence Tools',
      items: [
        { name: 'Tableau', icon: faChartBar },
        { name: 'Micro Strategy', icon: faChartBar }
      ]
    },
    backend: {
      title: 'Backend Implementation',
      items: [
        { name: 'Amazon Web Services', icon: faAws },
        { name: 'Java', icon: faJava }
      ]
    }
  }

  // Cloud Migration Strategy
  const cloudMigrationPoints = [
    'Lift and Shift combined with robust A/B Testing',
    'Identify & Migrate specific components including DB, as-is from on-prem to cloud',
    'Break large monolith projects into smaller micro services based on strategic normalisation before migrating',
    'Created multiple AWS accounts & environments for develop, integration, Production to drive CI/CD Framework',
    'Established access controls using IAM Roles within VPC',
    'Developed Real-time Splunk alerts for health monitoring of systems'
  ]

  // Final Design Products
  const finalDesignProducts = [
    { name: 'Xtime Engage', description: 'Walk-around inspection interface' },
    { name: 'Xtime Inspect', description: 'Multi-point inspection dashboard' },
    { name: 'Xtime Schedule', description: 'Appointment scheduling system' }
  ]

  // Industries
  const industries = [
    'Retail Industry',
    'Healthcare Industry',
    'Travel Industry',
    'Automotive Industry',
    'Banking & Finance Industry'
  ]

  // Core Services
  const coreServices = [
    'Web Development',
    'Mobile Development',
    'Cloud Services',
    'API Integrations',
    'UI/UX Solutions'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image - Car Dashboard */}
        <div className="absolute inset-0 bg-[url('/assets/xtime/hero-bg.jpg')] bg-cover bg-center opacity-60">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/90">
            <img
              src={heroImg}
              alt="Count on us"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Xtime
            </h1>

            {/* Mobile text - visible only on small screens, hidden on md and above */}
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed block md:hidden">
              Technical Management of SaaS Implementation
            </p>

            {/* Desktop text - hidden on small screens, visible on md and above */}
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed hidden md:block">
              Technical Management and Implementation of SaaS Based Solutions for Automotive industry OEs across North America and Australia
            </p>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200">
          <div className="container-custom">
            <div className="flex flex-wrap">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 ${activeTab === tab.id
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

      {/* Seamless Mobile Transformation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-primary-500">Seamless Mobile Transformation</span> with Cloud Migration
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                Xtime is a leader in Automotive service lane management tools with significant footprint across North America. The product supports all major OE brands including
              </p>

              {/* Brand Logos */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-neutral-100 rounded-lg"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
                <span className="text-neutral-500 text-sm">And More....</span>
              </div>

              <p className="text-neutral-600 leading-relaxed">
                The client is also a leading cloud-based Customer Relationship Management (CRM) and scheduling platform for automotive manufacturers and automotive service departments. As the industry's only product platform designed specifically to help dealers transform service operations, Xtime has consistently demonstrated its capability to boost customer satisfaction and revenue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Device Mockups */}
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8">
                <div className="flex items-end justify-center gap-4">
                  {/* Laptop */}
                  <div className="w-64 h-44 bg-white rounded-lg shadow-xl overflow-hidden border border-neutral-200">
                    <img
                      src={laptopImg}
                      alt="Xtime Laptop"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Tablet */}
                  <div className="w-24 h-18 bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200">
                    <img
                      src={tabletImg}
                      alt="Xtime Tablet"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Phone */}
                  <div className="w-16 h-32 bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200">
                    <img
                      src={mobileImg}
                      alt="Xtime Mobile"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success of Cloud-based Solution */}
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
                {/* Person with devices illustration */}
                <img
                  src={cloudSolutionImg}
                  alt="Cloud Solution"
                  className="w-full h-auto"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCloud} className="text-primary-500 text-2xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCog} className="text-accent text-xl" />
                </div>
              </div>
            </motion.div>

            {/* Success Points */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Success of our <span className="text-primary-500">Cloud-based</span> Solution
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <ul className="space-y-6">
                {cloudSuccessPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-600">{point.text} - <span className="text-accent font-medium">{point.highlight}</span></p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Analysis for the Project */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary-500">Primary Analysis</span> for the Project
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Analysis Grid with Central Dashboard */}
          <div className="relative">
            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analysisItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Number and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={item.icon} className={`${item.color}`} />
                    <span className={`${item.color} font-medium`}>{item.title}</span>
                    <span className="text-4xl font-bold text-neutral-200 ml-auto">{item.number}</span>
                  </div>

                  {/* Red dot indicator */}
                  <div className="absolute top-0 right-1/4 w-3 h-3 bg-accent rounded-full"></div>

                  {/* Content Card */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                    <ul className="space-y-2">
                      {item.items.map((text, textIndex) => (
                        <li key={textIndex} className="text-neutral-600 text-sm leading-relaxed">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting dotted line */}
                  {index < analysisItems.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-neutral-300"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Central Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <div className="relative">
                {/* Tablet with Dashboard */}
                <img
                  src={projectAnalysisImg}
                  alt="Project Analysis"
                  className="w-full h-auto"
                />
                {/* Phone Mockup */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services to Xtime Products */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Services for <span className="text-primary-500">Products at Xtime</span>
            </h2>
            <div className="w-8 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Xtime Spectrum Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <img src={spectrumImg} alt="Xtime Spectrum" className="w-160 h-auto mx-auto" />
          </motion.div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spectrumProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Icon Circle */}

                <div className="relative inline-block mb-6">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
                  <img src={product.logo} alt={product.name} className="w-20 h-20 mb-6" />
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-neutral-900 mb-6">{product.name}</h3>

                {/* Features List */}
                <div className="bg-white rounded-xl border border-neutral-200 border-dashed p-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-primary-500 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Flow */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary-500">Process Flow</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Vertical Process Flow */}
          <div className="max-w-2xl mx-auto">
            {processFlowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex items-start gap-8 mb-12"
              >
                {/* Step Number */}
                <span className="text-5xl font-bold text-neutral-200 flex-shrink-0 w-16">{step.number}</span>

                {/* Content Card */}
                <div className="flex-1 relative">
                  {/* Red dot */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>

                  <div className="bg-neutral-100 rounded-xl p-6">
                    <p className="text-neutral-600">{step.text}</p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < processFlowSteps.length - 1 && (
                  <div className="absolute left-24 top-full w-0.5 h-12 border-l-2 border-dashed border-neutral-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduler Product Workflow */}
      <section className="py-16 md:py-24 bg-slate-50 border-l-4 border-primary-500">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              A peek into the <span className="text-primary-500">Scheduler product Workflow</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Workflow UI Mockups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedulerSteps.slice(0, 8).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Red dot connector */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full z-10"></div>

                {/* Mockup Card */}
                <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-sm">
                  {/* Progress indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-neutral-400">Schedule your service</span>
                  </div>

                  {/* Step indicators */}
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${num <= Math.ceil((index + 1) / 2)
                          ? 'bg-primary-500 text-white'
                          : 'bg-neutral-200 text-neutral-500'
                          }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 text-[10px] text-neutral-400 mb-4">
                    <span>Vehicle</span>
                    <span>Services</span>
                    <span>Transportation</span>
                    <span>Appointment</span>
                  </div>

                  {/* Content */}
                  <h4 className="font-medium text-neutral-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-neutral-500">{step.subtitle}</p>

                  {/* Placeholder content */}
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-neutral-100 rounded"></div>
                    <div className="h-2 bg-neutral-100 rounded w-3/4"></div>
                  </div>

                  {/* Button */}
                  <button className="mt-4 w-full py-2 bg-neutral-200 text-neutral-500 text-xs rounded">
                    NEXT
                  </button>
                </div>

                {/* Connecting dotted line */}
                {index < 7 && index !== 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-neutral-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary-500">Technology Stack</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Intelligence Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Business Intelligence Tools</h3>
              <div className="w-12 h-1 bg-accent mb-8"></div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2">
                    <FontAwesomeIcon icon={faChartBar} className="text-primary-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Tableau</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2">
                    <FontAwesomeIcon icon={faChartBar} className="text-amber-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Micro Strategy</span>
                </div>
              </div>
            </motion.div>

            {/* Backend Implementation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Backend Implementation</h3>
              <div className="w-12 h-1 bg-accent mb-8"></div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2">
                    <FontAwesomeIcon icon={faAws} className="text-amber-600 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Amazon Web Services</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2">
                    <FontAwesomeIcon icon={faJava} className="text-red-500 text-2xl" />
                  </div>
                  <span className="text-sm text-neutral-600">Java</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Migration Strategy */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-primary-500">Cloud Migration</span> Strategy
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <ul className="space-y-4">
                {cloudMigrationPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Tablet mockup with car service interface */}
              <img src={cloudMigrationImg} alt="Tablet Mockup" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary-500">Final Design</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
            <img src={finalDesignImg} alt="Tablet Mockup" className="w-full h-auto" />
          </motion.div>
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

export default Xtime
