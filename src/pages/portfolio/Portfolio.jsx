import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const projects = [
  {
    title: 'Xtime',
    category: 'Automotive Technology',
    description: 'Service scheduling platform for automotive dealerships',
    path: '/xtime',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'eMasters',
    category: 'E-Commerce',
    description: 'Mobile commerce platform for sneaker enthusiasts',
    path: '/emasters',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Adobe Campaign',
    category: 'Marketing Technology',
    description: 'Email marketing campaign management solutions',
    path: '/adobe',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud Services',
    description: 'Enterprise cloud infrastructure transformation',
    path: '/cloud-services',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Mobile Banking',
    category: 'FinTech',
    description: 'Secure mobile banking application development',
    path: '/mobile-development',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Digital Transformation',
    category: 'Enterprise',
    description: 'End-to-end digital modernization for enterprises',
    path: '/digital-transformation',
    color: 'from-orange-500 to-orange-600'
  }
]

const Portfolio = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="text-primary-400 font-medium mb-4 block">Our Work</motion.span>
            <motion.h1 variants={fadeInUp} className="text-display-md font-display font-bold text-neutral-900 mb-6">
              Portfolio
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 leading-relaxed">
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={project.path}>
                  <motion.div whileHover={{ y: -8 }} className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-hard transition-all duration-300">
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <span className="text-4xl font-display font-bold text-white/30">{project.title[0]}</span>
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                      <h3 className="text-xl font-display font-bold text-neutral-900 mt-2 mb-3">{project.title}</h3>
                      <p className="text-neutral-600 mb-4">{project.description}</p>
                      <div className="flex items-center text-primary-400 font-medium text-sm group-hover:gap-2 transition-all">
                        View Project <IoArrowForward className="ml-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
