import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCheck,
  faCheckCircle,
  faArrowRight,
  faMobileAlt,
  faCode,
  faLaptopCode,
  faRocket,
  faPaintBrush,
  faLayerGroup,
  faCogs,
  faCloud,
  faShieldAlt,
  faChartLine,
  faUsers,
  faLightbulb,
  faClipboardCheck,
  faSyncAlt,
  faHeadset
} from '@fortawesome/free-solid-svg-icons'
import { 
  faApple, 
  faAndroid, 
  faReact, 
  faSwift,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faAws,
  faGoogle,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

// You may need to add these images to your assets folder
// import heroImg from '@/assets/mobile-dev/hero-bg.png'
// import successStoryImg from '@/assets/mobile-dev/success-story.png'

const MobileDevelopment = () => {
  const [activeTab, setActiveTab] = useState('services')
  const [activeProcessStep, setActiveProcessStep] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  }

  // Navigation tabs
  const navTabs = [
    { id: 'services', label: 'Our Mobile Services' },
    { id: 'process', label: 'Working Process' },
    { id: 'portfolio', label: 'Our Portfolio' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'skills', label: 'Our Skills' }
  ]

  // Benefits for "Expand your digital footprint" section
  const benefits = [
    'Establish your presence on any device and platform using any latest technology',
    'Reduce costs - time for market and business users million loss of quality',
    'Delight your users with responsive and custom iOS native/hybrid applications',
    'Upgrade and improve your mobile UI, eliminate all technical debts',
    'Ensure security scalability and robust change management of your application',
    'Get free consulting services to leverage your Application from concept to deployment'
  ]

  // Mobile App Development Services
  const services = [
    {
      icon: faLightbulb,
      title: 'App Prototyping and Strategy',
      description: 'To create intuitive mobile interface solutions for your mobile clients or employees, you can consult our agency - we perform thorough research and create interactive prototypes.'
    },
    {
      icon: faAndroid,
      title: 'Native Apps Development',
      description: 'Build apps for both Android and iOS platforms. Using native technology for optimal responsiveness and design, we create solutions tuned to use mobile specific features.'
    },
    {
      icon: faLayerGroup,
      title: 'Hybrid Apps Development',
      description: 'Deliver apps that combine the best of native and web app technologies. Build once, deliver on iOS, Android, and the web without sacrificing performance.'
    },
    {
      icon: faLaptopCode,
      title: 'Full Stack Mobile App Development',
      description: 'We offer a comprehensive mobile app development lifecycle from design to development, testing, deployment and on-going maintenance and support.'
    },
    {
      icon: faPaintBrush,
      title: 'Mobile App UX Design Services',
      description: 'Our mobile app UI/UX design team employs expertise to ensure engaging user experiences with interfaces and interactions.'
    },
    {
      icon: faRocket,
      title: 'Progressive Web App Development',
      description: 'Our PWAs enable App-like experience that offers similar mobile experience on your mobile device from a single codebase.'
    }
  ]

  // Development Platforms & Frameworks
  const platforms = {
    ios: {
      title: 'iOS App Development',
      technologies: [
        { name: 'Swift', icon: faSwift },
        { name: 'Objective-C', icon: faApple },
        { name: 'Xcode', icon: faApple },
        { name: 'SwiftUI', icon: faApple },
        { name: 'UIKit', icon: faApple },
        { name: 'CoreData', icon: faApple },
        { name: 'ARKit', icon: faApple },
        { name: 'TestFlight', icon: faApple }
      ]
    },
    android: {
      title: 'Android App Development',
      technologies: [
        { name: 'Jetpack', icon: faAndroid },
        { name: 'Java', icon: faJava },
        { name: 'Kotlin', icon: faAndroid },
        { name: 'XML', icon: faCode },
        { name: 'SQLite', icon: faAndroid },
        { name: 'Room', icon: faAndroid },
        { name: 'Android Studio', icon: faAndroid },
        { name: 'Gradle', icon: faAndroid }
      ]
    },
    crossPlatform: {
      title: 'Cross-Platform Development',
      technologies: [
        { name: 'React Native', icon: faReact },
        { name: 'Flutter', icon: faMobileAlt },
        { name: 'Ionic', icon: faLayerGroup },
        { name: 'Xamarin', icon: faCode },
        { name: 'NativeScript', icon: faJs },
        { name: 'Cordova', icon: faHtml5 }
      ]
    },
    progressive: {
      title: 'Progressive App Development',
      technologies: [
        { name: 'Vue.js', icon: faJs },
        { name: 'Angular', icon: faGoogle },
        { name: 'React', icon: faReact },
        { name: 'PWA', icon: faMobileAlt },
        { name: 'Workbox', icon: faGoogle },
        { name: 'Firebase', icon: faGoogle }
      ]
    }
  }

  // Success Story
  const successStory = {
    client: 'eMASTERS',
    title: 'Mobile Point-of-Sale System to Master Shop Management',
    tags: ['Grocery Stores', 'Inventory Management', 'E-commerce', 'iOS and Android applications'],
    description: 'eMASTERS is an innovative mobile POS application developed for small retail and grocery businesses across North America and globally. The system automates all operations including sales transactions, customer purchases, and vendor sales updates, generating revenue of millions of dollars annually.'
  }

  // Process Steps
  const processSteps = [
    {
      number: '01',
      title: 'Project Initiation',
      items: [
        'Stakeholder alignment',
        'Define project scope, timeline, and budget',
        'Assemble project team',
        'Set up project management tools',
        'Establish communication channels'
      ]
    },
    {
      number: '02',
      title: 'Discovery Phase',
      items: [
        'Market and competitor research',
        'User persona development',
        'Feature prioritization',
        'Technical feasibility analysis',
        'Risk assessment'
      ]
    },
    {
      number: '03',
      title: 'Design & UI Development',
      items: [
        'Wireframing and prototyping',
        'UI/UX design iterations',
        'Design system creation',
        'User testing and feedback',
        'Design handoff to development'
      ]
    },
    {
      number: '04',
      title: 'Full Launch & Go Live',
      items: [
        'App store submission',
        'Marketing and launch strategy',
        'User onboarding optimization',
        'Performance monitoring',
        'Post-launch support'
      ]
    }
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
    'Mobile Development',
    'Cloud Solutions',
    'API Integration',
    'MEAN Solutions'
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
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('/assets/mobile-dev/hero-bg.png')] bg-cover bg-center opacity-30"></div>

        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mobile Application<br />
              <span className="text-primary-400">Development</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Offering end-to-end mobile application development services for consumers as well as businesses
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

      {/* Expand Your Digital Footprint Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-primary-500 font-medium mb-2">Expand your digital footprint across the mobile platform</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Build Top-Notch <span className="text-accent">Mobile Experience</span>
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our mobile app development services include native and cross-platform development with Kotlin, iOS, 
                Android, and hybrid mobile application development. As a full-service custom development company, 
                you can expect a world-class engineering team delivering digital solutions supporting iOS and 
                Android development at scale.
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
                We specialize in app development technical norms like Android, iOS, React Native, Flutter, 
                Ionic native, React, NodeJS, Swift, Objective C, Visual Studio C#, Angular, Firebase, AWS, 
                and Azure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Mobile Apps Collage Image */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div key={item} className="aspect-[9/16] bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-full bg-gradient-to-b from-primary-200 to-primary-300 flex items-center justify-center">
                        <FontAwesomeIcon icon={faMobileAlt} className="text-primary-500 text-2xl" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mobile App Development Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Mobile <span className="text-primary-500">App Development</span> Services
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
              A Full cycle product development from <span className="text-accent">Idea to Live</span> project. 
              We are your one-stop for your <span className="text-primary-400">Android or iOS</span> application development
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Development Platforms & Frameworks Expertise */}
      <section className="py-16 md:py-24 bg-slate-50">
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
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    key === 'ios' ? 'bg-slate-900' :
                    key === 'android' ? 'bg-green-500' :
                    key === 'crossPlatform' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}>
                    <FontAwesomeIcon 
                      icon={
                        key === 'ios' ? faApple :
                        key === 'android' ? faAndroid :
                        key === 'crossPlatform' ? faReact :
                        faRocket
                      } 
                      className="text-white text-xl" 
                    />
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
      <section className="py-16 md:py-24 bg-white">
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
                      <FontAwesomeIcon icon={faMobileAlt} className="text-white text-4xl" />
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
                  to="/portfolio"
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

      {/* Mobile Development Process Steps */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Mobile Development <span className="text-primary-500">Process Steps</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Process Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Process Flow Visual */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Row */}
                  <button
                    onClick={() => setActiveProcessStep(0)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      activeProcessStep === 0 
                        ? 'bg-primary-500 text-white shadow-lg' 
                        : 'bg-slate-100 text-neutral-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className="text-xs opacity-70">Step 01</span>
                    <h4 className="font-semibold">Project Initiation</h4>
                  </button>

                  <button
                    onClick={() => setActiveProcessStep(1)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      activeProcessStep === 1 
                        ? 'bg-primary-500 text-white shadow-lg' 
                        : 'bg-slate-100 text-neutral-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className="text-xs opacity-70">Step 02</span>
                    <h4 className="font-semibold">Full Launch & Go Live</h4>
                  </button>

                  {/* Middle - Visual Element */}
                  <div className="col-span-2 py-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <FontAwesomeIcon icon={faMobileAlt} className="text-primary-500 text-3xl" />
                        </div>
                      </div>
                      {/* Connecting Lines */}
                      <div className="absolute top-1/2 -left-16 w-12 h-0.5 bg-primary-300"></div>
                      <div className="absolute top-1/2 -right-16 w-12 h-0.5 bg-primary-300"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-primary-300"></div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-primary-300"></div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <button
                    onClick={() => setActiveProcessStep(2)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      activeProcessStep === 2 
                        ? 'bg-primary-500 text-white shadow-lg' 
                        : 'bg-slate-100 text-neutral-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className="text-xs opacity-70">Step 03</span>
                    <h4 className="font-semibold">Discovery Phase</h4>
                  </button>

                  <button
                    onClick={() => setActiveProcessStep(3)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      activeProcessStep === 3 
                        ? 'bg-primary-500 text-white shadow-lg' 
                        : 'bg-slate-100 text-neutral-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className="text-xs opacity-70">Step 04</span>
                    <h4 className="font-semibold">Design & UI Development</h4>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Process Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold text-primary-100">
                    {processSteps[activeProcessStep].number}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {processSteps[activeProcessStep].title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {processSteps[activeProcessStep].items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faCheck} className="text-primary-500" />
                      <span className="text-neutral-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries & Core Services */}
      <section className="py-16 md:py-24 bg-white border-t border-neutral-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Industries */}
            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Industries</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <Link 
                      to="#"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      {industry}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Core Services */}
            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Core Services</h3>
              <ul className="space-y-3">
                {coreServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to="#"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Ready to Build Your <span className="text-accent">Mobile App</span>?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let's discuss how we can help transform your ideas into a powerful mobile application 
              that drives results.
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

export default MobileDevelopment
