import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faCheckCircle,
  faArrowRight,
  faCode,
  faLaptopCode,
  faGlobe,
  faMobileAlt,
  faServer,
  faPaintBrush,
  faRocket,
  faShieldAlt,
  faChartLine,
  faCogs,
  faDatabase,
  faCloud,
  faLightbulb,
  faUsers,
  faDesktop,
  faSitemap,
  faEdit,
  faSearch,
  faBolt
} from '@fortawesome/free-solid-svg-icons'
import {
  faReact,
  faAngular,
  faVuejs,
  faNodeJs,
  faPhp,
  faLaravel,
  faAws,
  faDocker,
  faWordpress,
  faShopify,
  faMagento,
  faJs,
  faHtml5,
  faCss3Alt,
  faPython
} from '@fortawesome/free-brands-svg-icons'

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('services')
  const [activeProcessStep, setActiveProcessStep] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  // Navigation tabs
  const navTabs = [
    { id: 'services', label: 'Our Web Services' },
    { id: 'process', label: 'Working Process' },
    { id: 'portfolio', label: 'Our Portfolio' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'skills', label: 'Our Skills' }
  ]

  // Benefits for Transform your business section
  const benefits = [
    'Establish your digital presence on web platform via responsive and modern designs',
    'Build unique responsive web solutions which optimize to handle increased website traffic',
    'Satisfy your technology needs with an exceptional engineering team',
    'Stay at the top of the search game by embracing our SEO strategies for best search results',
    'Experience your existing web applications to new according to your business goals',
    'Provide reliable, flexibility for adding new features and expand your business'
  ]

  // Web Development Services
  const services = [
    {
      icon: faLaptopCode,
      title: 'Custom Web App Development',
      description: 'Our developers are ready to solve business challenges. We create user-centric digital web platforms, custom software development, custom web applications and use cases.'
    },
    {
      icon: faGlobe,
      title: 'Cross platform Apps',
      description: 'Our web applications are built to enable business and web teams to build sites that are tailored according to platforms whether Android, iOS, or Modern web with single code base or we develop.'
    },
    {
      icon: faRocket,
      title: 'Modern engineering',
      description: 'Our experienced teams deliver next-generation web apps, products, platforms, systems in a modern development approach to create a scalable website, with micro-services-based architecture.'
    },
    {
      icon: faCode,
      title: 'Web Portal Development',
      description: 'Our offices are based on a sturdy and flexible architecture built - mainly C#, ASP.Net, WordPress for portals through our experience in B2B and B2C.'
    },
    {
      icon: faPaintBrush,
      title: 'Enhanced User Experience',
      description: 'Our team and web developers aim to help research the understand and implement UI best of the website. Our UX strategy focuses on ensuring services.'
    },
    {
      icon: faLightbulb,
      title: 'Technology Consulting',
      description: 'You need general consultation about the right web infrastructure or Best practices, The technology and the processes will help you to enhance your website, software, database, and infrastructure.'
    }
  ]

  // Web Development Capabilities
  const capabilities = [
    'Advanced HTML/CSS/JavaScript web technologies',
    'Modern architecture integration',
    'Large codebase management',
    'High Complexity and Massive API integrations',
    'Production-standard codebase',
    'Best SEO practices',
    'Best practices for cloud service',
    'Mobile-first Methodology & delivery code'
  ]

  // Development Platforms & Frameworks
  const platforms = {
    mobile: {
      title: 'Mobile Development',
      icon: faMobileAlt,
      technologies: [
        { name: 'iOS', icon: faMobileAlt },
        { name: 'Android', icon: faMobileAlt },
        { name: 'Xamarin', icon: faCode },
        { name: 'React Native', icon: faReact },
        { name: 'Swift', icon: faCode },
        { name: 'Kotlin', icon: faCode },
        { name: 'Flutter', icon: faCode },
        { name: 'Ionic', icon: faCode }
      ]
    },
    frontend: {
      title: 'Front-End Development',
      icon: faDesktop,
      technologies: [
        { name: 'React.js', icon: faReact },
        { name: 'Vue.js', icon: faVuejs },
        { name: 'Angular', icon: faAngular },
        { name: 'AWS Amplify', icon: faAws },
        { name: 'Bootstrap', icon: faCss3Alt },
        { name: 'Tailwind', icon: faCss3Alt },
        { name: 'TypeScript', icon: faJs },
        { name: 'jQuery', icon: faJs }
      ]
    },
    backend: {
      title: 'Back End Development',
      icon: faServer,
      technologies: [
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Python', icon: faPython },
        { name: 'PHP', icon: faPhp },
        { name: 'ASP.NET', icon: faCode },
        { name: 'Java', icon: faCode },
        { name: 'Ruby', icon: faCode },
        { name: 'MongoDB', icon: faDatabase },
        { name: 'MySQL', icon: faDatabase }
      ]
    },
    cms: {
      title: 'Content Management System',
      icon: faEdit,
      technologies: [
        { name: 'WordPress', icon: faWordpress },
        { name: 'Shopify', icon: faShopify },
        { name: 'Magento', icon: faMagento },
        { name: 'Drupal', icon: faCode },
        { name: 'Joomla', icon: faCode },
        { name: 'Wix', icon: faCode }
      ]
    }
  }

  // Success Story
  const successStory = {
    client: 'eMASTERS',
    title: "Digital Ordering Application for Customer Relationship Management",
    tags: ['Grocery stores', 'Inventory Management', 'E-commerce', 'iOS and Android applications'],
    description: 'eMASTERS is an innovative mobile POS application developed for small retail and grocery businesses across North America and globally. The system automates all operations including sales, inventory, customer management with complete control and visibility into operations through real-time analytics.'
  }

  // Process Steps
  const processSteps = [
    { id: 'plan', label: 'Plan and Development', color: 'bg-primary-500' },
    { id: 'qa', label: 'QA Testing', color: 'bg-amber-500' },
    { id: 'research', label: 'Research and Analysis', color: 'bg-blue-500' },
    { id: 'frontend', label: 'Front-end Development', color: 'bg-green-500' },
    { id: 'creation', label: 'Creation and Development', color: 'bg-purple-500' },
    { id: 'launch', label: 'Launch and Maintenance', color: 'bg-red-500' }
  ]

  // Process Details
  const processDetails = [
    {
      title: 'Creation and Development',
      items: ['Build the architecture', 'Develop core features', 'Database design', 'API development']
    },
    {
      title: 'QA Testing',
      items: ['Unit testing', 'Integration testing', 'Performance testing', 'Security audit']
    },
    {
      title: 'Front-end Development',
      items: ['UI implementation', 'Responsive design', 'Cross-browser testing', 'Performance optimization']
    },
    {
      title: 'Launch',
      items: ['Deployment', 'Monitoring setup', 'Documentation', 'Training']
    }
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
              Web Development
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Increase the efficiency of your business via relevant web development solutions
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

      {/* Transform Your Business Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="mb-4">
            <p className="text-primary-500 font-medium">Delivering tangible business results through web solutions</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Transform your business <span className="text-accent">with web</span>
              </h2>

              <p className="text-neutral-600 mb-8 leading-relaxed">
                With our web development services from concept to launch and beyond with our scalable web app development and re-engineering services. From website redesign to transformation including custom web application development, Modern technologies, CMS solutions, API integrations, and more. Our experienced team of web developers is dedicated to delivering robust web solutions.
              </p>

              <ul className="space-y-4">
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

              <p className="text-neutral-500 text-sm mt-8 italic">
                Through our industry experts, entire tech stacks and multi-tier implementation processes ensuring that Scaled agile development of any type of modern develop clean code methods. Here, our developers help in projects with proper coding style and approach flow. Our design first method along with iterative approach and engineering ensures success at making fast deliveries in form of working code. We ensure that engineering expertise connects the dots that helps make decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Web Development Image Collage */}
              <div className="relative">
                {/* Main laptop image */}
                <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-6 shadow-xl">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-8 bg-neutral-100 flex items-center px-3 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="p-4 h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={faLaptopCode} className="text-primary-300 text-6xl" />
                    </div>
                  </div>
                </div>

                {/* Floating code snippet */}
                <div className="absolute -top-4 -right-4 bg-slate-800 rounded-lg p-3 shadow-xl">
                  <code className="text-xs text-green-400">
                    &lt;div class="app"&gt;<br />
                    &nbsp;&nbsp;&lt;Component /&gt;<br />
                    &lt;/div&gt;
                  </code>
                </div>

                {/* Floating phone */}
                <div className="absolute -bottom-4 -left-4 w-20 h-36 bg-slate-900 rounded-2xl p-1 shadow-xl">
                  <div className="h-full bg-white rounded-xl overflow-hidden">
                    <div className="h-3 bg-primary-500"></div>
                    <div className="p-1">
                      <div className="h-1 bg-neutral-200 rounded mb-1"></div>
                      <div className="h-1 bg-neutral-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Web Development Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our <span className="text-primary-500">Web Development</span> Services
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
              Our business transformation services help achieve tangible outcomes for your business and establish business agility through optimized solutions based on evaluation of your current capabilities
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Web Development Capabilities */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Web Development <span className="text-primary-500">Capabilities</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-10 bg-neutral-100 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-white rounded-full px-3 flex items-center">
                      <span className="text-xs text-neutral-400">https://www.yourwebsite.com</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 h-64 bg-gradient-to-br from-primary-50 to-slate-50">
                  <div className="flex gap-4 h-full">
                    {/* Sidebar */}
                    <div className="w-16 bg-white rounded-lg p-2 shadow-sm">
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-full h-8 bg-primary-100 rounded"></div>
                        ))}
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                      <div className="h-4 bg-neutral-200 rounded w-1/2 mb-4"></div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="h-16 bg-blue-100 rounded"></div>
                        <div className="h-16 bg-green-100 rounded"></div>
                        <div className="h-16 bg-amber-100 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-neutral-100 rounded"></div>
                        <div className="h-3 bg-neutral-100 rounded w-3/4"></div>
                        <div className="h-3 bg-neutral-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Person illustration */}
              <div className="flex justify-center mt-4">
                <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-primary-400 text-4xl" />
                </div>
              </div>
            </motion.div>

            {/* Capabilities List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 flex-shrink-0" />
                    <span className="text-neutral-700">{capability}</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(platforms).map(([key, platform], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={platform.icon} className="text-primary-500 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900">{platform.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {platform.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg text-sm"
                    >
                      <FontAwesomeIcon icon={tech.icon} className="text-neutral-500" />
                      <span className="text-neutral-700">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-2 text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center justify-center gap-2">
                  Discover
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </button>
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
            className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-3xl">e</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold">{successStory.client}</h3>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-white mb-4">{successStory.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {successStory.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{successStory.description}</p>

                <Link
                  to="/portfolio/emasters"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  View Case Study
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Development Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Web Development <span className="text-primary-500">Process Steps</span>
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
            {/* Process Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveProcessStep(index)}
                  className={`relative p-6 rounded-xl text-left transition-all ${
                    activeProcessStep === index
                      ? `${step.color} text-white shadow-lg`
                      : 'bg-white border border-neutral-200 text-neutral-700 hover:border-primary-200 hover:shadow-md'
                  }`}
                >
                  <span className={`text-xs font-medium ${activeProcessStep === index ? 'text-white/70' : 'text-neutral-400'}`}>
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-semibold mt-1">{step.label}</h4>

                  {/* Connector dots */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 border-t-2 border-dashed border-neutral-300 hidden md:block"></div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Central Visual */}
            <div className="mt-12 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faGlobe} className="text-primary-500 text-4xl" />
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faRocket} className="text-sm" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faDatabase} className="text-sm" />
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faCogs} className="text-sm" />
                </div>
              </div>
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
              Ready to Build Your <span className="text-accent">Web Application</span>?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let's discuss how we can help transform your ideas into a powerful web solution that drives results.
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

export default WebDevelopment
