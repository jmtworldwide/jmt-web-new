import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faLightbulb,
  faPencilRuler,
  faMobileAlt,
  faDesktop,
  faPalette,
  faCheck,
  faCheckCircle,
  faArrowRight,
  faClipboardList,
  faUsers,
  faEdit,
  faCogs,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// Import images
import heroImg from '@/assets/uiux-deliver/wireframing-stage-of-a-web-design-project-147007588.png'
import wireframeImg from '@/assets/uiux-deliver/taking-idea-from-concept-to-reality.png'
import designerImg from '@/assets/uiux-deliver/undraw_Design_sprint_re_tke3.png'
import entrepreneurImg from '@/assets/uiux-deliver/sharing-custom-crm-app.png'
import impactImg from '@/assets/uiux-deliver/pexels-pixabay-273230.png'
import mobileMockupImg from '@/assets/uiux-deliver/mob.png'

const UiUxServices = () => {
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

  const services = [
    {
      icon: faSearch,
      title: 'User Research',
      description: 'User testing and research with key users ensures we create an immersive experience based on your product goals and objectives.',
      color: 'bg-blue-50 text-primary-500'
    },
    {
      icon: faLightbulb,
      title: 'Agile UX Design',
      description: 'Our flexible UX strategy that has us iterate rapidly and test often. We use incremental improvements to make sure we get it right.',
      color: 'bg-orange-50 text-accent'
    },
    {
      icon: faPencilRuler,
      title: 'UX Design',
      description: 'From user flow to low and high-fidelity mockups & prototypes we cover everything you need.',
      color: 'bg-green-50 text-green-500'
    },
    {
      icon: faMobileAlt,
      title: 'SaaS App design',
      description: 'As a leading UI design agency, our team specializes in B2B software-as-a-service design. We have experience in a variety of industries.',
      color: 'bg-purple-50 text-purple-500'
    },
    {
      icon: faDesktop,
      title: 'Website Design',
      description: 'Make a stunning first impression with our B2B web design services. Let our team help propel your business to the next level.',
      color: 'bg-cyan-50 text-cyan-500'
    },
    {
      icon: faPalette,
      title: 'Mobile Design',
      description: 'We design beautiful and intuitive iOS, Android & cross-platform apps, with native, React Native, Flutter & Swift frameworks.',
      color: 'bg-pink-50 text-pink-500'
    }
  ]

  const capabilities = [
    'UX/UI Redesign',
    'Interaction Design',
    'Brand Strategy',
    'Usability Testing',
    'UX Audit Process Analysis',
    'Information Architecture',
    'Persona Design'
  ]

  const adobeTools = [
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Adobe XD', icon: '📐' },
    { name: 'Adobe Premiere Pro', icon: '🎬' },
    { name: 'Adobe InDesign', icon: '📄' }
  ]

  const otherTools = [
    { name: 'Sketch', icon: '💎' },
    { name: 'Figma', icon: '🖌️' },
    { name: 'Marvel', icon: '🦸' },
    { name: 'InVision', icon: '👁️' }
  ]

  const deliverables = [
    {
      number: '01',
      title: 'Discovery',
      items: [
        'Key Personas Profiles',
        'Customer Journey Map',
        'Competitors Overview'
      ]
    },
    {
      number: '02',
      title: 'Define & Ideate',
      items: [
        'User Scenarios',
        'Use cases & User Stories',
        'Feature set and MVP'
      ]
    },
    {
      number: '03',
      title: 'Design & Prototype',
      items: [
        'Wireframes',
        'Med/High-Fidelity Mockups',
        'Prototypes with Interactions'
      ]
    },
    {
      number: '04',
      title: 'Validate & Test',
      items: [
        'Design Validated with user',
        'Test Results',
        'Deployment & Maintenance Document'
      ]
    }
  ]

  // Process steps data for interactive diagram
  const processSteps = [
    {
      id: 1,
      name: 'Discovery',
      number: '01',
      icon: faSearch,
      items: [
        'Understand the requirements',
        'Create User personas',
        'Define the Use cases'
      ]
    },
    {
      id: 2,
      name: 'Research',
      number: '02',
      icon: faUsers,
      items: [
        'Analyze the requirements',
        'Analyze Painpoints and scenarios',
        'Research the users'
      ]
    },
    {
      id: 3,
      name: 'Sketch',
      number: '03',
      icon: faEdit,
      items: [
        'Gather the ideas',
        'Draw sketches and wireframes',
        'Evaluate and re-draw'
      ]
    },
    {
      id: 4,
      name: 'Design',
      number: '04',
      icon: faPalette,
      items: [
        'Gather the ideas',
        'Draw sketches and wireframes',
        'Evaluate and re-draw'
      ]
    },
    {
      id: 5,
      name: 'Implement',
      number: '05',
      icon: faCogs,
      items: [
        'Implement the functionality',
        'Build the Experience',
        'Build the User journey'
      ]
    },
    {
      id: 6,
      name: 'Evaluate',
      number: '06',
      icon: faChartLine,
      items: [
        'Perform the Usability Testing',
        'Create audit reports',
        'Identify Improvements'
      ]
    }
  ]

  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/60 to-neutral-900/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              UI/UX Services
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              With a consistent build-to-test process, we never lose track and deliver a product that is right
              on target.
            </p>
          </motion.div>
        </div>
      </section>

      {/* User-Centered Design Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                User-centered design for interactive experiences
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                Take your idea from concept to reality
              </h2>
              <div className="prose prose-lg text-neutral-600 max-w-none">
                <p>
                  Whether it is a complex enterprise or a micro-driven, API-based microsite, we can
                  strategize, conceptualize and design to achieve a sleek UX/UI design that not only
                  stands out, our unique combination of strategy, craft and technology delivers clarity
                  and impact to your brand story.
                </p>
                <ul className="space-y-3 mt-6 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Create brand consistency with a distinct look and feel across channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Put users front and center with data-driven design decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Optimize your UX architecture to support structure and scalability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent mt-1 flex-shrink-0" />
                    <span>Enhance guide rails and resources for seamless efficient team collaboration</span>
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
                  src={wireframeImg}
                  alt="UX Design Process"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary-400/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our UI/UX Services Grid */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our UI/UX Services
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive design services to create exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-hard transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-90">
          <img
            src={impactImg}
            alt="Count on us"
            className="w-full h-auto"
          />
          {/* <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" /> */}
          {/* <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" /> */}
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-full mx-auto"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-6 leading-tight">
              You can count on us to guide you through the complex
              process of improving your user experience. We offer a
              complete line of user experience services to help you
              design the perfect UX strategy.
            </h2>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-300 mt-6"
            >
              Get Started
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* UI/UX Capabilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img
                src={designerImg}
                alt="UX Designer at work"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                UI/UX <span className="text-accent">Capabilities</span>
              </h2>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                    </div>
                    <span className="text-neutral-700 font-medium">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Platforms & Frameworks */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Design <span className="text-accent">Platforms & Frameworks</span> Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Adobe Creative Suite */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
                Adobe Creative Suite
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {adobeTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-sm font-medium text-neutral-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Other Design Tools */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
                Other Design Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {otherTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-sm font-medium text-neutral-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
              src={entrepreneurImg}
              alt="Success Story"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/60" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-xl text-white">
                  <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    CASE STUDY
                  </span>
                  <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                    User Experience Redesign for E-commerce Platform
                  </h3>
                  <p className="text-white mb-6">
                    In this UX design case study, we explore the redesign of a major e-commerce platform,
                    focusing on improving user experience and increasing conversion rates by 40%.
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

      {/* UI/UX Process Steps */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our UI/UX <span className="text-accent">Process Steps</span>
            </h2>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-soft">
              {/* Active Step Details - Top */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-accent/30">
                    {processSteps.find(s => s.id === activeStep)?.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-accent">
                        {processSteps.find(s => s.id === activeStep)?.name}
                      </h3>
                      <div className="w-8 h-8 bg-primary-100 rounded flex items-center justify-center">
                        <FontAwesomeIcon 
                          icon={processSteps.find(s => s.id === activeStep)?.icon} 
                          className="text-primary-500 text-sm" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      {processSteps.find(s => s.id === activeStep)?.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                          </div>
                          <span className="text-neutral-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Flow Diagram */}
              <div className="relative px-4">
                {/* Top Row - Steps 1, 2, 3 */}
                <div className="grid grid-cols-3 gap-4">
                  {processSteps.slice(0, 3).map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`relative py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                        activeStep === step.id
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {step.name}
                    </button>
                  ))}
                </div>

                {/* Top Row Numbers */}
                <div className="grid grid-cols-3 gap-4 mt-1">
                  <span className="text-center text-2xl font-bold text-accent/30">01</span>
                  <span className="text-center text-2xl font-bold text-accent/30">02</span>
                  <span className="text-center text-2xl font-bold text-accent/30">03</span>
                </div>

                {/* Connector Lines with Dots */}
                <div className="relative h-20 my-2">
                  {/* Horizontal line at top */}
                  <div className="absolute top-0 left-[16.67%] right-[16.67%] h-0.5 bg-neutral-300"></div>
                  
                  {/* Top connection dots */}
                  <div className={`absolute left-[16.67%] -translate-x-1/2 top-0 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${activeStep === 1 ? 'bg-accent border-accent' : 'bg-white border-neutral-300'}`}></div>
                  <div className={`absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${activeStep === 2 ? 'bg-accent border-accent' : 'bg-white border-neutral-300'}`}></div>
                  <div className={`absolute right-[16.67%] translate-x-1/2 top-0 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${activeStep === 3 ? 'bg-accent border-accent' : 'bg-white border-neutral-300'}`}></div>
                  
                  {/* Right vertical line */}
                  <div className="absolute right-[16.67%] translate-x-1/2 top-0 w-0.5 h-full bg-neutral-300"></div>
                  
                  {/* Left vertical line */}
                  <div className="absolute left-[16.67%] -translate-x-1/2 top-0 w-0.5 h-full bg-neutral-300"></div>
                  
                  {/* Horizontal line at bottom */}
                  <div className="absolute bottom-0 left-[16.67%] right-[16.67%] h-0.5 bg-neutral-300"></div>
                  
                  {/* Bottom connection dots */}
                  <div className={`absolute left-[16.67%] -translate-x-1/2 bottom-0 translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${activeStep === 6 ? 'bg-accent border-accent' : 'bg-white border-neutral-300'}`}></div>
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${activeStep === 5 ? 'bg-accent border-accent' : 'bg-white border-neutral-300'}`}></div>
                  <div className={`absolute right-[16.67%] translate-x-1/2 bottom-0 translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${activeStep === 4 ? 'bg-accent border-accent' : 'bg-white border-neutral-300'}`}></div>
                </div>

                {/* Bottom Row Numbers */}
                <div className="grid grid-cols-3 gap-4 mb-1">
                  <span className="text-center text-2xl font-bold text-accent/30">06</span>
                  <span className="text-center text-2xl font-bold text-accent/30">05</span>
                  <span className="text-center text-2xl font-bold text-accent/30">04</span>
                </div>

                {/* Bottom Row - Steps 6, 5, 4 (reversed order) */}
                <div className="grid grid-cols-3 gap-4">
                  {[processSteps[5], processSteps[4], processSteps[3]].map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`relative py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                        activeStep === step.id
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {step.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Deliver Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Deliverables with staggered layout */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                We <span className="text-accent">Deliver</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-12"></div>

              <div className="space-y-8">
                {deliverables.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-6"
                    style={{ marginLeft: `${index * 2}rem` }}
                  >
                    {/* Checklist Items */}
                    <div className="flex flex-col gap-2">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0">
                            <FontAwesomeIcon icon={faCheck} className="text-accent text-xs" />
                          </div>
                          <span className="text-neutral-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Phase Title with Number */}
                    <div className="flex items-center gap-3 ml-4">
                      <div className="h-px w-8 bg-neutral-300"></div>
                      <span className="text-primary-500 font-semibold whitespace-nowrap">
                        {phase.title}
                      </span>
                      <span className="text-6xl font-bold text-accent/20">{phase.number}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Mobile Mockup Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-100/50 rounded-lg transform rotate-6 -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-lg transform -rotate-6 -z-10"></div>
                
                {/* Main mobile mockup */}
                <img
                  src={mobileMockupImg}
                  alt="Mobile App UI Design"
                  className="relative z-10 max-w-md w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your user experience?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
              Let's work together to create exceptional digital experiences that delight your users
              and drive business results.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              Start Your Project
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UiUxServices
