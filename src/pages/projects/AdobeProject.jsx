import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faCheck,
  faCheckCircle,
  faArrowRight,
  faEnvelope,
  faChartLine,
  faUsers,
  faBullhorn,
  faCogs,
  faRocket,
  faDatabase,
  faCloud,
  faPaintBrush,
  faCode,
  faMobileAlt,
  faDesktop,
  faLightbulb,
  faFileAlt,
  faClipboardList,
  faPaperPlane,
  faChartBar,
  faMousePointer,
  faEye,
  faPercent,
  faNewspaper,
  faBlog,
  faBook,
  faGraduationCap,
  faStore,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'

const AdobeProject = () => {
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
    { id: 'services', label: 'Services' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'results', label: 'Results' },
    { id: 'why', label: 'Why choose us?' }
  ]

  // Campaign Management Services
  const campaignServices = [
    'Build automated emails',
    'Create personalized landing pages',
    'User data synchronization',
    'Create Lifecycle Emails from Marketo/Eloqua',
    'Schedule Email sends',
    'A/B test Content',
    'Track data & user analytics'
  ]

  // Primary Analysis
  const analysisItems = [
    {
      number: '01',
      title: 'Pain Points',
      description: 'The client needed a way to manage and implement email marketing campaigns across multiple partner tiers'
    },
    {
      number: '02',
      title: 'Key Objectives',
      description: 'Streamline partner communication, automate campaign workflows, and improve engagement metrics'
    },
    {
      number: '03',
      title: 'Our Solution',
      description: 'Built comprehensive email templates, automated workflows, and integrated analytics dashboard'
    },
    {
      number: '04',
      title: 'Results',
      description: 'Increased email open rates by 23%, click-through rates by 15%, and partner engagement by 40%'
    }
  ]

  // Adobe Teams
  const adobeTeams = [
    { name: 'Adobe Experience Manager', icon: faLayerGroup },
    { name: 'Adobe Creative Cloud Exchange', icon: faPaintBrush },
    { name: 'The Blog', icon: faBlog },
    { name: 'Adobe Trans', icon: faGraduationCap },
    { name: 'Adobe Document Cloud', icon: faFileAlt },
    { name: 'Adobe Stock', icon: faStore },
    { name: 'Adobe Developer App', icon: faCode }
  ]

  // Process Flow
  const processFlow = [
    {
      number: '01',
      title: 'Designing Daily Content Coordination with all teams',
      deliverables: ['Adobe Campaign Cloud', 'Adobe Experience Cloud', 'Adobe Document Cloud']
    },
    {
      number: '02',
      title: 'Designing the content for the Newsletter',
      deliverables: ['Adobe Experience Design', 'Adobe Analytics Cloud']
    },
    {
      number: '03',
      title: 'Setting up Flows, Lifecycle and re-Campaigns',
      deliverables: ['Adobe Captivate']
    },
    {
      number: '04',
      title: 'Execute the emails for the selected Campaigns',
      deliverables: ['Adobe Audience', 'Adobe Analytics']
    }
  ]

  // Newsletter sections
  const newsletterSections = [
    { name: 'New Products', description: 'Latest product updates and releases' },
    { name: 'Partner Tips', description: 'Best practices for partners' },
    { name: 'New Releases', description: 'Feature announcements' },
    { name: 'Partner Events', description: 'Upcoming events and webinars' }
  ]

  // Technology Stack
  const techStack = [
    { name: 'Adobe Campaign', icon: faLayerGroup },
    { name: 'Adobe Analytics', icon: faChartLine },
    { name: 'Adobe Experience', icon: faLayerGroup }
  ]

  // Email Results/Deliverables
  const emailResults = {
    sends: '10392',
    clicks: '615',
    openRate: '23%',
    clickRate: '6%'
  }

  // Click breakdown by section
  const clickBreakdown = [
    { section: 'DXIM - Adobe Exc...', clicks: 203, percentage: 35 },
    { section: 'PS Captivate Class...', clicks: 156, percentage: 25 },
    { section: 'Sandbox', clicks: 98, percentage: 15 },
    { section: 'Adobe Analytics L...', clicks: 87, percentage: 14 },
    { section: 'Adobe Portfolio A...', clicks: 71, percentage: 11 }
  ]

  // Industries
  const industries = [
    'Retail Industry',
    'Healthcare Industry',
    'Travel Industry',
    'Automobile Industry',
    'Banking & Finance Industry'
  ]

  // Core Services
  const coreServices = [
    'App Development',
    'Web Development',
    'Mobile Development',
    'Cloud Services',
    'API Integrations',
    'UI/UX Solutions'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Adobe
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Partner and Affiliate Marketing Campaign Management & Campaign Automation for Business Partners
            </p>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container-custom">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-4 text-sm md:text-base font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-500 text-white'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* An Integrated Solution for Multi-channel Marketing Campaigns */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-4">
            <p className="text-red-500 font-medium">An integrated solution for multi-channel</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Marketing <span className="text-red-500">campaigns</span>
              </h2>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                Being part of the Adobe Experience Cloud, Adobe Campaign enables automation of marketing processes. Adobe Campaign enables marketers to design, automate and deliver 1-to-1 messages across many different channels - including email, SMS, app notifications, direct mail and more.
              </p>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                With Adobe Campaign, cross channel campaigns can be easily created when all the customer data is centralized providing highly targeted customer experiences that meet each customer where they are - email, mobile, offline channels, and more.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Working directly with the experience marketing team at Adobe, our JMT team has been instrumental in helping build and execute partner marketing campaigns globally, helping Adobe maintain strong partner relationships and drive engagement across their partner ecosystem.
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
              <div className="relative">
                {/* Tablet/iPad mockup */}
                <div className="relative bg-slate-900 rounded-2xl p-2 shadow-2xl max-w-md mx-auto">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-6 bg-neutral-100 flex items-center px-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="p-4 h-64 bg-gradient-to-br from-red-50 to-slate-50">
                      <div className="flex gap-4 h-full">
                        <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                          <div className="h-3 bg-red-200 rounded w-1/2 mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 bg-neutral-100 rounded"></div>
                            <div className="h-2 bg-neutral-100 rounded w-3/4"></div>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            <div className="h-12 bg-red-100 rounded"></div>
                            <div className="h-12 bg-blue-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating illustration */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-red-400 text-4xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success of our Campaign Management System */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Email Template Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Email Template */}
                <div className="w-80 bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="h-8 bg-red-500 flex items-center px-4">
                    <span className="text-white text-sm font-medium">Email Campaign</span>
                  </div>
                  <div className="p-6">
                    <div className="w-full h-24 bg-gradient-to-r from-red-100 to-red-50 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-red-500 font-bold text-xl">Adobe</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-3 bg-neutral-200 rounded"></div>
                      <div className="h-3 bg-neutral-200 rounded w-3/4"></div>
                      <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-slate-100 rounded"></div>
                      <div className="h-16 bg-slate-100 rounded"></div>
                    </div>
                    <button className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-300 rounded-full"></div>
              </div>
            </motion.div>

            {/* Campaign Management Services */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Success of our <span className="text-red-500">Campaign Management</span> System
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <ul className="space-y-4">
                {campaignServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 flex-shrink-0" />
                    <span className="text-neutral-700">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Analysis for the Campaign */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-red-500">Primary Analysis</span> for the Campaign
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Analysis Grid */}
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
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-bold text-neutral-200">{item.number}</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-red-500">{item.title}</h3>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>

                {/* Red dot */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Central Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-neutral-500 ml-2">Campaign Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 bg-slate-100 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="col-span-2 bg-slate-50 rounded-lg p-4">
                  <div className="flex gap-4">
                    <div className="flex-1 h-20 bg-red-100 rounded"></div>
                    <div className="flex-1 h-20 bg-blue-100 rounded"></div>
                    <div className="flex-1 h-20 bg-green-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Management services to the following Teams at Adobe */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Campaign Management services to the following <span className="text-red-500">Teams at Adobe</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {adobeTeams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={team.icon} className="text-red-500 text-2xl" />
                </div>
                <p className="text-sm text-neutral-700 font-medium">{team.name}</p>
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
              Our <span className="text-red-500">Process Flow</span>
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processFlow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-1">
                  <span className="text-4xl font-bold text-red-200">{step.number}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable, delIndex) => (
                      <span
                        key={delIndex}
                        className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A peep into the Adobe Partner Newsletter with all Designs */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A peep into the Adobe Partner <span className="text-red-400">Newsletter</span> with all Designs
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Wireframe mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 space-y-2">
                    <div className="h-4 bg-neutral-200 rounded"></div>
                    <div className="h-20 bg-neutral-100 rounded"></div>
                    <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                  </div>
                  <div className="col-span-2">
                    <div className="h-4 bg-red-200 rounded mb-3"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-neutral-100 rounded"></div>
                      <div className="h-24 bg-neutral-100 rounded"></div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 bg-neutral-200 rounded"></div>
                      <div className="h-2 bg-neutral-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Newsletter Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Adobe News</h3>
                    <p className="text-white/60 text-sm">Weekly Digest</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {newsletterSections.map((section, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">{section.name}</p>
                        <p className="text-white/60 text-sm">{section.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-white/60 text-sm mb-2">Learn More</p>
                  <div className="flex gap-2">
                    {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((link, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 text-white rounded text-sm">
                        {link}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Technology Stack */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our <span className="text-red-500">Technology Stack</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-red-50 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <FontAwesomeIcon icon={tech.icon} className="text-red-500 text-4xl" />
                </div>
                <p className="text-neutral-700 font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Results and Deliverables */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Email <span className="text-red-500">Results and Deliverables</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Sends */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPaperPlane} className="text-blue-500 text-2xl" />
              </div>
              <p className="text-sm text-neutral-500 mb-2">Sends</p>
              <p className="text-4xl font-bold text-neutral-900">{emailResults.sends}</p>
              <p className="text-sm text-green-500 mt-2">Subscribers</p>
            </motion.div>

            {/* Clicks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMousePointer} className="text-green-500 text-2xl" />
              </div>
              <p className="text-sm text-neutral-500 mb-2"># Clicks</p>
              <p className="text-4xl font-bold text-neutral-900">{emailResults.clicks}</p>
              <p className="text-sm text-green-500 mt-2">Clicks</p>
            </motion.div>

            {/* Open Rate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faEye} className="text-amber-500 text-2xl" />
              </div>
              <p className="text-sm text-neutral-500 mb-2">MAYOPEN %</p>
              <p className="text-4xl font-bold text-neutral-900">{emailResults.openRate}</p>
              <p className="text-sm text-neutral-400 mt-2">21 opens</p>
            </motion.div>

            {/* Click Rate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPercent} className="text-purple-500 text-2xl" />
              </div>
              <p className="text-sm text-neutral-500 mb-2">Click Rate</p>
              <p className="text-4xl font-bold text-neutral-900">{emailResults.clickRate}</p>
              <p className="text-sm text-neutral-400 mt-2">of total</p>
            </motion.div>
          </div>

          {/* Click Breakdown Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Tracking of Section Headings - % of Clicks
            </h3>

            <div className="space-y-4">
              {clickBreakdown.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-40 text-sm text-neutral-600 truncate">{item.section}</div>
                  <div className="flex-1 h-6 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-sm font-medium text-neutral-700">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Did you know?</h3>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mb-4">
              JMT Co-Founder Tess Jammalomadaho was a part of The Gartner Global Partner Campaign team. She now sits as Creative Developer Specialist and is greatly instrumental to Adobe.
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-3xl">
              The Creative Development team is part of CreativeONE. Week over week supported by and for developers and LET you succeed.
            </p>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                #CreativeONE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries & Core Services Footer */}
      <section className="py-16 bg-slate-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-6">Industries</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <Link to="#" className="text-slate-300 hover:text-white transition-colors">
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
                    <Link to="#" className="text-slate-300 hover:text-white transition-colors">
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
            className="inline-flex items-center gap-3 text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AdobeProject
