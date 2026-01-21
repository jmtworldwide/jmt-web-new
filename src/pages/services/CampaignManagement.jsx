import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
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
  faUsersCog,
  faSlidersH,
  faLayerGroup,
  faSync
} from '@fortawesome/free-solid-svg-icons'
import {
  faSalesforce,
  faHubspot,
  faFigma
} from '@fortawesome/free-brands-svg-icons'

const CampaignManagement = () => {
  const [activeTab, setActiveTab] = useState('services')

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  // Navigation tabs
  const navTabs = [
    { id: 'services', label: 'Our Marketing Services' },
    { id: 'process', label: 'Working Process' },
    { id: 'team', label: 'Our Team' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'why', label: 'Why JMT?' }
  ]

  // Benefits for Boost your brand's reach section
  const benefits = [
    'Design Requests & Revisions - Unlimited. Skip the queue with your dedicated team',
    'Online engagement with a broader audience through our marketing services',
    'Email Customer easily and Drive measurable output in interesting marketing campaigns',
    'Engaging custom journeys for your audience'
  ]

  // Campaign Services
  const services = [
    {
      icon: faEnvelope,
      title: 'Email Templates and Audit',
      description: 'Our team can help you draft all the content for campaigns including email templates, a/b testing scenarios, landing page content, audience strategy, and optimization.'
    },
    {
      icon: faBullhorn,
      title: 'Email Campaign Management',
      description: 'We work with you to configure all campaign development steps. Once complete, we will schedule and automate campaigns in various platforms.'
    },
    {
      icon: faChartLine,
      title: 'Email Marketing Automation',
      description: 'You will be working with our experienced email strategists, designers, and developers who work with various email automation platforms.'
    },
    {
      icon: faFileAlt,
      title: 'Email Template Creation and Template Conversion',
      description: 'Our team can design email marketing campaigns from scratch in platforms such as Adobe Campaign, Salesforce Marketing, Braze, and more.'
    },
    {
      icon: faCode,
      title: 'AMP Emails Webviews and Migration',
      description: 'We offer AMP for Email, HTML5 compatibility, responsive email templates, and migration services.'
    },
    {
      icon: faChartBar,
      title: 'Analytics and Deliverability',
      description: 'We offer comprehensive analytics, reporting, deliverability optimization, and campaign performance tracking.'
    }
  ]

  // Email Campaign Management Features
  const emailFeatures = [
    'Data Management',
    'Multiuser access',
    'Successful connections of channels',
    'Delivery automation',
    'Mobile delivery design',
    'Visual deployment',
    'A/B testing for templates',
    'Dynamic content creation',
    'Connected channel & subscriptions',
    'Analytics data'
  ]

  // Development Platforms & Frameworks
  const platforms = {
    design: {
      title: 'Design',
      icon: faPaintBrush,
      technologies: [
        { name: 'Adobe Creative Cloud', icon: faLayerGroup },
        { name: 'Figma', icon: faFigma },
        { name: 'XD', icon: faLayerGroup },
        { name: 'Dreamweaver', icon: faLayerGroup }
      ]
    },
    implementation: {
      title: 'Implementation',
      icon: faCogs,
      technologies: [
        { name: 'Adobe Campaign', icon: faLayerGroup },
        { name: 'Salesforce', icon: faSalesforce },
        { name: 'Marketo', icon: faChartLine },
        { name: 'HubSpot', icon: faHubspot }
      ]
    }
  }

  // Success Story
  const successStory = {
    client: 'Adobe',
    title: 'Partner Marketing and Affiliate Campaign Management',
    description: 'JMT helped Adobe build and manage their partner marketing campaigns, providing end-to-end email campaign development, template creation, and marketing automation support across multiple regions and partner tiers.',
    tags: ['Email Marketing', 'Campaign Automation', 'Partner Marketing']
  }

  // Process Steps
  const processSteps = [
    { id: 'brief', label: 'Campaign Brief', icon: faClipboardList, color: 'bg-primary-500' },
    { id: 'strategy', label: 'Campaign Strategy', icon: faLightbulb, color: 'bg-amber-500' },
    { id: 'development', label: 'Template Development', icon: faCode, color: 'bg-green-500' },
    { id: 'testing', label: 'QA & Testing', icon: faCheckCircle, color: 'bg-purple-500' },
    { id: 'deployment', label: 'Deployment', icon: faRocket, color: 'bg-blue-500' },
    { id: 'analytics', label: 'Analytics & Reporting', icon: faChartLine, color: 'bg-red-500' }
  ]

  // Team Members
  const teamMembers = [
    { name: 'Ajay Ryan Alesna', role: 'Lead Technical Engineer', image: null },
    { name: 'Nissar Khan', role: 'Senior Manager, Partner & Partner Relations', image: null },
    { name: 'Brian Eshiki', role: 'Partner Relationship Manager', image: null },
    { name: 'Jonathan Ferman', role: 'Client Success Manager - SC Partner Platform', image: null },
    { name: 'Erin Flanagan', role: 'Community Engagement Coordinator', image: null },
    { name: 'Tess Jammalomadoho', role: 'Partner Ecosystem Program Manager', image: null },
    { name: 'Nina Knight Lenti', role: 'Senior Manager, Partner Marketing', image: null },
    { name: 'Todd Sigler', role: 'Partner Support & Marketing', image: null },
    { name: 'Mike Knox', role: 'Senior Manager, Partner Platform and Tools', image: null },
    { name: 'Steve Kusel', role: 'Partner Success Engineer', image: null },
    { name: 'Vijay Venkat', role: 'Partner Program and Ecosystem', image: null }
  ]

  // Industries
  const industries = [
    'Retail Industry',
    'Healthcare Industry',
    'Food Industry',
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
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Campaign Management
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Transform every campaign into a successful and unique experience for your customers.
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
                      ? 'bg-primary-500 text-white'
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

      {/* Boost Your Brand's Reach Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-4">
            <p className="text-primary-500 font-medium">Campaigns to engage your customers better</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Boost your brand's <span className="text-accent">reach</span>
              </h2>

              <p className="text-neutral-600 mb-8 leading-relaxed">
                Looking for a dedicated full-time Marketing Campaign team to help you design effective campaign journey, for your customers to improve their customer experiences? Look no further. Our dedicated team of experienced email marketing consultants helps create customer-centric strategies for improved engagement.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-neutral-500 text-sm italic">
                With our team of dedicated designers and developer professionals at your disposal, campaigns can be rolled out in days or weeks rather than months. You will be working with our marketing experts to deliver targeted email campaigns that drive results through our extensive experience in Adobe Campaign, Salesforce Marketing Cloud, and Marketo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Marketing Team Image Mockup */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-6 shadow-xl">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faUsers} className="text-primary-500 text-2xl" />
                        </div>
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faBullhorn} className="text-accent text-2xl" />
                        </div>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faChartLine} className="text-green-500 text-2xl" />
                        </div>
                      </div>
                      <p className="text-neutral-400 text-sm">Campaign Management Team</p>
                    </div>
                  </div>
                </div>

                {/* Floating email icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Campaign Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our <span className="text-primary-500">Campaign Services</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <FontAwesomeIcon icon={service.icon} className="text-primary-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent/30"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
              We offer Targeted Email Marketing Solutions & Transparent Packages For Businesses Worldwide - From Strategy To Development To Execution
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Email Campaign Management */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Email <span className="text-primary-500">Campaign Management</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Phone */}
                <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="h-8 bg-primary-500 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white/30 rounded"></div>
                    </div>
                    {/* Email content mockup */}
                    <div className="p-4">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <FontAwesomeIcon icon={faEnvelope} className="text-primary-500" />
                        </div>
                        <div className="h-2 w-24 bg-neutral-200 rounded mx-auto"></div>
                      </div>
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-neutral-200 rounded w-3/4 mb-1"></div>
                              <div className="h-1.5 bg-neutral-100 rounded w-1/2"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating notification */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {emailFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Platforms & Frameworks Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Development <span className="text-primary-500">Platforms & Frameworks</span> Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(platforms).map(([key, platform], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={platform.icon} className="text-primary-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">{platform.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {platform.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg"
                    >
                      <FontAwesomeIcon icon={tech.icon} className="text-neutral-500 text-lg" />
                      <span className="text-neutral-700 text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our <span className="text-primary-500">Success Stories</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Adobe Logo Side */}
              <div className="relative h-64 lg:h-auto p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-white text-4xl font-bold">Adobe</span>
                  </div>
                  <p className="text-white/80 text-sm max-w-xs">
                    Creative Cloud Partner Platform & Experience team
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 bg-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">{successStory.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {successStory.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/90 leading-relaxed mb-6">{successStory.description}</p>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 font-medium transition-colors"
                >
                  View Case Study
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Management Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Campaign Management <span className="text-primary-500">Process Steps</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          {/* Process Flow Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Central Campaign Visual */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary-500 text-4xl mb-2" />
                      <p className="text-sm font-medium text-neutral-600">Campaign<br />Management</p>
                    </div>
                  </div>
                </div>

                {/* Orbiting process steps */}
                {processSteps.map((step, index) => {
                  const angle = (index * 60) - 90 // Start from top
                  const radius = 140
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 40px)`
                      }}
                    >
                      <div className={`w-20 h-20 ${step.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg`}>
                        <FontAwesomeIcon icon={step.icon} className="text-xl mb-1" />
                        <span className="text-[10px] text-center leading-tight px-1">{step.label}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Process Steps Grid (Mobile Fallback) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`${step.color} rounded-xl p-4 text-white text-center`}
                >
                  <FontAwesomeIcon icon={step.icon} className="text-2xl mb-2" />
                  <p className="text-sm font-medium">{step.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Did you know?</h3>
            <p className="text-neutral-600 leading-relaxed max-w-3xl">
              JMT Co-Founder Tess Jammalomadaho was a part of The Gartner Global Partner Campaign team. She now sits as Creative Developer Specialist and is greatly instrumental to Adobe.
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mt-4">
              The Creative Development team is part of CreativeONE. Week over week supported by and for developers and LET you succeed.
            </p>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                #CreativeONE
              </span>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {teamMembers.slice(0, 12).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-primary-400 text-2xl" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">{member.name}</h4>
                <p className="text-xs text-neutral-500">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            The Adobe Creative Cloud Partner Platform & Experience team
          </p>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch Your <span className="text-accent">Campaign</span>?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let's discuss how we can help transform your marketing campaigns into powerful customer engagement tools.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CampaignManagement
