import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  IoArrowForward, 
  IoRocketOutline, 
  IoCodeSlashOutline,
  IoCloudOutline,
  IoPhonePortraitOutline,
  IoLayersOutline,
  IoColorPaletteOutline,
  IoCheckmarkCircle
} from 'react-icons/io5'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-100/30 to-transparent rounded-full" />
    </div>
    
    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232579d8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

    <div className="container-custom relative z-10 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-500 rounded-full text-sm font-medium">
              <IoRocketOutline />
              Transforming Ideas into Reality
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-display-lg font-display font-bold text-neutral-900 mb-6"
          >
            Build Digital
            <span className="text-gradient"> Excellence</span>
            <br />With Innovation
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed"
          >
            We craft cutting-edge technology solutions that drive business growth 
            and create exceptional user experiences.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary group"
              >
                Get Started
                <IoArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-neutral-200"
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '200+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-display font-bold text-primary-400">{stat.number}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Main visual container */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white rounded-2xl shadow-hard p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-500">
                    <IoCheckmarkCircle size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Project Delivered</div>
                    <div className="text-xs text-neutral-500">Just now</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-hard p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-500">
                    <IoCodeSlashOutline size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Clean Code</div>
                    <div className="text-xs text-neutral-500">Best practices</div>
                  </div>
                </div>
              </motion.div>

              {/* Central gradient orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-3xl" />
              </div>
              
              {/* Tech icons floating */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-primary-400"
                        style={{ transform: `rotate(-${rotation}deg)` }}
                      >
                        {[<IoCloudOutline />, <IoPhonePortraitOutline />, <IoCodeSlashOutline />, <IoLayersOutline />, <IoColorPaletteOutline />, <IoRocketOutline />][i]}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

// Services Section
const services = [
  {
    icon: <IoPhonePortraitOutline size={28} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    path: '/mobile-development'
  },
  {
    icon: <IoCloudOutline size={28} />,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services.',
    path: '/cloud-services'
  },
  {
    icon: <IoCodeSlashOutline size={28} />,
    title: 'Web Development',
    description: 'Modern, responsive web applications and platforms.',
    path: '/web-development'
  },
  {
    icon: <IoColorPaletteOutline size={28} />,
    title: 'UI/UX Design',
    description: 'User-centered design that delivers exceptional experiences.',
    path: '/ui-ux-services'
  },
  {
    icon: <IoRocketOutline size={28} />,
    title: 'Digital Transformation',
    description: 'End-to-end digital solutions for business modernization.',
    path: '/digital-transformation'
  },
  {
    icon: <IoLayersOutline size={28} />,
    title: 'Workflow Automation',
    description: 'Streamline operations with intelligent automation.',
    path: '/workflow-automation'
  },
]

const ServicesSection = () => (
  <section className="section bg-white">
    <div className="container-custom">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.span variants={fadeInUp} className="text-primary-400 font-medium mb-4 block">
          Our Services
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold text-neutral-900 mb-4">
          What We Offer
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-neutral-600 max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Link to={service.path}>
              <div className="service-card h-full">
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="mt-4 flex items-center text-primary-400 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <IoArrowForward className="ml-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// Partners Section
const partners = [
  'Apple', 'Google', 'Adobe', 'Cisco', 'Infosys', 'Cox'
]

const PartnersSection = () => (
  <section className="py-16 bg-neutral-50">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-neutral-500 font-medium">Trusted by Industry Leaders</p>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-wrap items-center justify-center gap-12"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="text-2xl font-display font-bold text-neutral-300 hover:text-primary-400 transition-colors cursor-default"
          >
            {partner}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// CTA Section
const CTASection = () => (
  <section className="section bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden relative">
    {/* Background decoration */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl" />
    </div>
    
    <div className="container-custom relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold mb-6">
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-primary-100 mb-8">
          Let's discuss how we can help you achieve your digital goals.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn bg-white text-primary-500 hover:bg-primary-50"
            >
              Start a Project
            </motion.button>
          </Link>
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              View Our Work
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Main Home Component
const Home = () => {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <CTASection />
    </>
  )
}

export default Home
