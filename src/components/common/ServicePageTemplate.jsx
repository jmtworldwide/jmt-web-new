import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoArrowForward, IoCheckmarkCircle } from 'react-icons/io5'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const ServicePageTemplate = ({ 
  title, 
  subtitle, 
  description, 
  features = [], 
  technologies = [],
  processSteps = [],
  icon
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="text-primary-400 font-medium mb-4 block">{subtitle}</motion.span>
            <motion.h1 variants={fadeInUp} className="text-display-md font-display font-bold text-neutral-900 mb-6">
              {title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 leading-relaxed mb-8">
              {description}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact-us">
                <button className="btn btn-primary group">
                  Get Started <IoArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="section bg-white">
          <div className="container-custom">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold text-neutral-900 mb-4">
                What We Offer
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="card">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-400 mb-4">
                    {feature.icon || <IoCheckmarkCircle size={24} />}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {processSteps.length > 0 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold text-neutral-900 mb-4">
                Our Process
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-400 text-white flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {technologies.length > 0 && (
        <section className="section bg-white">
          <div className="container-custom">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold text-neutral-900 mb-4">
                Technologies We Use
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <motion.div key={index} variants={fadeInUp} className="px-6 py-3 bg-neutral-100 rounded-full text-neutral-700 font-medium hover:bg-primary-50 hover:text-primary-500 transition-colors">
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our {title.toLowerCase()} solutions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact-us">
                <button className="btn bg-white text-primary-500 hover:bg-primary-50">
                  Contact Us Today
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ServicePageTemplate
