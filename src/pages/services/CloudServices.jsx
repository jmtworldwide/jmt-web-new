import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faServer,
  faShieldAlt,
  faSync,
  faCogs,
  faChartLine,
  faCheck,
  faCheckCircle,
  faArrowRight,
  faDatabase,
  faNetworkWired,
  faLock,
  faRocket,
  faTools,
  faCloudUploadAlt,
  faCodeBranch,
  faCubes,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// Import images
import cloudBgImg from '@/assets/cloud-data-security-1.png'
import cloudProcessImg from '@/assets/integrationimg.png'
import cloudStoryImg from '@/assets/cloudstory2.png'
import cloudSecurityImg from '@/assets/harness-the-power-of-cloud.png'
import implementCloudImg from '@/assets/implementcloud.png'

const CloudServices = () => {
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

  // Cloud Application Development Services
  const cloudAppServices = [
    {
      icon: faCloud,
      title: 'Cloud-based SaaS Applications',
      description: 'We provide software-as-a-Service solutions using flexible Business model, subscription services and SaaS tools.'
    },
    {
      icon: faSync,
      title: 'Re-engineering Existing Application',
      description: 'Re-engineering involves rewriting with a new architecture, with new tools (Python vs Java migration, Lifecycle dependency).'
    },
    {
      icon: faCloudUploadAlt,
      title: 'Cloud Migration',
      description: 'The digital world is moving toward SaaS services. We help you reimagine your strategies for existing applications and infrastructure.'
    },
    {
      icon: faNetworkWired,
      title: 'Cloud Integration',
      description: 'Cloud integration for complex systems, distributed process workflows with data flow and external API integrations, event driven architecture.'
    },
    {
      icon: faCubes,
      title: 'Application Scaling',
      description: 'Scale the size of your cloud infrastructure (Cloud migration, hosting, microservices), and more. Efficiently to meet the needs of your growing.'
    },
    {
      icon: faTools,
      title: 'DevOps & Support',
      description: 'Simplify cloud operations with continuous monitoring, automation, and proactive support for seamless enterprise application performance.'
    }
  ]

  // Cloud App Solutions checklist
  const cloudSolutionsChecklist = [
    'Cloud Assessment services',
    'IVaaS/Web/Cloud development',
    'Cost effective Infrastructure',
    'Multi-Cloud Integration',
    'Cloud Scalability',
    'Docker deployment',
    'Containerized Applications',
    'Infrastructure as a service',
    'Platform as a service',
    'Backup and Disaster Recovery'
  ]

  // Development Platforms categories
  const platformCategories = [
    {
      title: 'Deployment & Management',
      icon: faRocket,
      items: [
        { name: 'AWS', logo: '☁️' },
        { name: 'Azure', logo: '🔷' },
        { name: 'Google Cloud', logo: '🌐' },
        { name: 'Docker', logo: '🐳' },
        { name: 'Kubernetes', logo: '⚙️' }
      ]
    },
    {
      title: 'Application Services',
      icon: faLayerGroup,
      items: [
        { name: 'Node.js', logo: '💚' },
        { name: 'Python', logo: '🐍' },
        { name: 'Java', logo: '☕' },
        { name: 'React', logo: '⚛️' },
        { name: '.NET', logo: '🔵' }
      ]
    },
    {
      title: 'Foundation Services',
      icon: faDatabase,
      items: [
        { name: 'MongoDB', logo: '🍃' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'Redis', logo: '🔴' },
        { name: 'Elasticsearch', logo: '🔍' },
        { name: 'Kafka', logo: '📨' }
      ]
    }
  ]

  // Cloud Services Process Steps - Circular diagram data
  const cloudProcessServices = [
    {
      id: 1,
      name: 'Advisory Services',
      number: '01',
      position: 'left',
      color: 'bg-primary-500',
      items: [
        'Framework for public, private, and hybrid cloud approaches, cloud types (IaaS, PaaS, and SaaS)',
        'Building Reference architectures, security policy and Cloud Management platform',
        'Cloud Strategy and Roadmap'
      ]
    },
    {
      id: 2,
      name: 'Migration Services',
      number: '02',
      position: 'top',
      color: 'bg-neutral-700',
      items: [
        'Implementation services for Workload Automation',
        'Migration services for an easy onboard from another automation solution',
        'App development for specific integrations with third party applications',
        'Health Check Assessment and Optimization Services'
      ]
    },
    {
      id: 3,
      name: 'Management Services',
      number: '03',
      position: 'right',
      color: 'bg-neutral-700',
      items: [
        'Leverage new and existing IT investments while minimizing risk and cost.',
        'Ensure cloud governance, compliance and visibility across your IT environment with a digital self-service model.',
        'Improve infrastructure availability and uptime with automation and self-service capabilities.'
      ]
    }
  ]

  const [activeService, setActiveService] = useState(1)

  // Industries we serve
  const industries = [
    'HealthCare',
    'Hospitality Industry',
    'Automobile',
    'Agriculture Industry',
    'Banking & Insurance'
  ]

  const coreServices = [
    'Web Development',
    'Mobile Development',
    'Cloud Services',
    'API Integration',
    'Data Analytics'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${cloudBgImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/40 to-neutral-800/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Cloud Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Increasing business agility with cloud development services
            </p>
            {/* Sub-navigation */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['SaaS Solutions', 'Managed Services', 'Case Studies', 'Our Expertise', 'Cost Efficiency'].map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm text-white/70 hover:text-white cursor-pointer transition-colors border-b border-transparent hover:border-white pb-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Harness the Power Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Build secure and scalable digital solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                Harness the power of the cloud
              </h2>
              <div className="prose prose-lg text-neutral-600 max-w-none">
                <p>
                  Whether you're a startup looking to get to market quickly or an enterprise
                  seeking scalable solutions, we provide comprehensive cloud development and
                  management services. Our unique combination of strategy, architecture, and
                  delivery enables you to innovate faster and stay ahead.
                </p>
                <ul className="space-y-3 mt-6 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Design and build custom or cloud-hosted Fintech solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Use scalable microservices and API-driven development with cloud hosting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Leverage serverless solutions, dynamic and scalable during peak load</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Get continuous security updates, optimized load as per the system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Maintain cloud service delivery optimization, cloud cost effectiveness</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={cloudSecurityImg}
                  alt="Cloud Security"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary-400/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Application Development Services */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Cloud Application <span className="text-accent">Development Services</span>
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cloudAppServices.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <FontAwesomeIcon icon={service.icon} className="text-primary-500 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={implementCloudImg} alt="Implement Cloud" className="w-full h-auto" />
          {/* <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" /> */}
        </div>
        <div className="container-custom relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed italic">
              "We create and implement Cloud Applications that are
              <span className="font-semibold text-accent"> browser-agnostic, Future-proof and Scalable</span>, we will
              reshape your Cloud Strategies and take it to the next
              level in the Simplest and the most effective way"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cloud App Solution & Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={cloudProcessImg}
                  alt="Cloud Integration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                Cloud App Solution <span className="text-accent">& Integration</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cloudSolutionsChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                    </div>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Platforms & Frameworks */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Development <span className="text-accent">Platforms & Frameworks</span> Expertise
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {platformCategories.map((category, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={category.icon} className="text-primary-500 text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors">
                      <span className="text-xl">{item.logo}</span>
                      <span className="text-sm font-medium text-neutral-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our <span className="text-accent">Success Stories</span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={cloudStoryImg}
              alt="Success Story"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/60 to-neutral-900/10" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-xl text-white">
                  <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    CASE STUDY
                  </span>
                  <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                    Cloud Migration for Enterprise Platform
                  </h3>
                  <p className="text-white/90 mb-6">
                    We helped a global enterprise migrate their legacy systems to a modern cloud
                    infrastructure, resulting in 60% cost reduction and 99.9% uptime.
                  </p>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300"
                  >
                    View Case Study
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services Process Steps - Circular Diagram */}
      <section className="py-24 md:py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Cloud Services <span className="text-accent">Process Steps</span>
            </h2>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-soft">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Circular Diagram - Left Side (3 columns) */}
                <div className="lg:col-span-3 relative">
                  {/* SVG Circular Diagram */}
                  <div className="relative w-full max-w-lg mx-auto aspect-square">
                    {/* Outer Circle with Arrow */}
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Circular arrow path */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill={activeService === 1 ? '#3B82F6' : activeService === 2 ? '#F97316' : '#F97316'} />
                        </marker>
                      </defs>

                      {/* Main circular path */}
                      <circle
                        cx="200"
                        cy="200"
                        r="150"
                        fill="none"
                        stroke={activeService === 3 ? '#F97316' : '#E5E7EB'}
                        strokeWidth="3"
                        strokeDasharray={activeService === 3 ? "600 1000" : "0"}
                        strokeDashoffset={activeService === 3 ? "-150" : "0"}
                        className="transition-all duration-500"
                      />

                      {/* Active circular segment */}
                      <circle
                        cx="200"
                        cy="200"
                        r="150"
                        fill="none"
                        stroke={activeService === 1 ? '#3B82F6' : activeService === 2 ? '#F97316' : 'transparent'}
                        strokeWidth="3"
                        strokeDasharray="300 1000"
                        strokeDashoffset={activeService === 1 ? "75" : activeService === 2 ? "-225" : "0"}
                        className="transition-all duration-500"
                        markerEnd="url(#arrowhead)"
                      />

                      {/* Gray circle when not fully active */}
                      <circle
                        cx="200"
                        cy="200"
                        r="150"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                        className={activeService === 3 ? 'opacity-0' : 'opacity-100'}
                      />
                    </svg>

                    {/* Center Cloud Diagram */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%]">
                      {/* 24/7 Monitoring Label */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary-500 font-semibold text-sm whitespace-nowrap">
                        24/7 Monitoring
                      </div>

                      {/* Cloud Shape */}
                      <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-[100px] p-6 shadow-lg">
                        {/* SaaS/PaaS/SaaS Labels */}
                        <div className="absolute top-4 left-8 text-xs text-gray-500 space-y-1">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-gray-300 rounded"></div>
                            <span>SaaS</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-gray-300 rounded"></div>
                            <span>PaaS</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-gray-300 rounded"></div>
                            <span>SaaS</span>
                          </div>
                        </div>

                        {/* Testing Label */}
                        <div className="absolute top-4 right-8 text-xs text-gray-500 flex items-center gap-1">
                          <span>Testing</span>
                          <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-[8px] text-gray-500" />
                          </div>
                        </div>

                        {/* Private/Hybrid/Public Bar */}
                        <div className="flex mt-12 rounded-lg overflow-hidden shadow-inner">
                          <div className="flex-1 bg-primary-500 text-white text-xs py-2 px-3 font-medium">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                              Private
                            </span>
                          </div>
                          <div className="flex-1 bg-primary-400 text-white text-xs py-2 px-3 font-medium text-center">
                            Hybrid
                          </div>
                          <div className="flex-1 bg-primary-300 text-white text-xs py-2 px-3 font-medium text-right">
                            Public
                          </div>
                        </div>

                        {/* Legacy Apps & On-Premise */}
                        <div className="flex justify-between mt-4 px-2">
                          <div className="text-center">
                            <div className="w-6 h-6 bg-white border border-gray-300 rounded mx-auto mb-1 flex items-center justify-center">
                              <FontAwesomeIcon icon={faServer} className="text-[10px] text-gray-400" />
                            </div>
                            <span className="text-[10px] text-gray-500">Legacy Apps</span>
                          </div>
                          <div className="text-center">
                            <div className="w-6 h-6 bg-white border border-gray-300 rounded mx-auto mb-1 flex items-center justify-center">
                              <FontAwesomeIcon icon={faDatabase} className="text-[10px] text-gray-400" />
                            </div>
                            <span className="text-[10px] text-gray-500 block">On-Premise</span>
                            <span className="text-[10px] text-gray-500 block">Infrastructure</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Buttons positioned around the circle */}
                    {/* 01 - Advisory Services (Left) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                      <span className="absolute -top-4 left-1/2 -translate-y-1/2 text-4xl font-bold text-accent/30">01</span>
                      <button
                        onClick={() => setActiveService(1)}
                        className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeService === 1
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                      >
                        Advisory<br />Services
                      </button>
                    </div>

                    {/* 02 - Migration Services (Top) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                      <span className="absolute -right-10 top-1/2 -translate-x-1/2 text-4xl font-bold text-accent/30">02</span>
                      <button
                        onClick={() => setActiveService(2)}
                        className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeService === 2
                          ? 'bg-neutral-700 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                      >
                        Migration<br />Services
                      </button>
                    </div>

                    {/* 03 - Management Services (Right) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                      <span className="absolute -bottom-10 left-1/2 -translate-y-1/2 text-4xl font-bold text-accent/30">03</span>
                      <button
                        onClick={() => setActiveService(3)}
                        className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeService === 3
                          ? 'bg-neutral-700 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                      >
                        Management<br />Services
                      </button>
                    </div>
                  </div>
                </div>

                {/* Service Details - Right Side (2 columns) */}
                <div className="lg:col-span-2">
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl font-bold text-accent/40">
                        {cloudProcessServices.find(s => s.id === activeService)?.number}
                      </span>
                      <h3 className="text-xl font-bold text-accent">
                        {cloudProcessServices.find(s => s.id === activeService)?.name}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {cloudProcessServices.find(s => s.id === activeService)?.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                          </div>
                          <span className="text-neutral-600 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Industries & Core Services */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div {...fadeInUp} className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Industries</h3>
              <div className="space-y-2">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-neutral-600 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    {industry}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Core Services</h3>
              <div className="space-y-2">
                {coreServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-neutral-600 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container-custom text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud services can help you achieve your business goals
              with scalable, secure, and cost-effective solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default CloudServices
