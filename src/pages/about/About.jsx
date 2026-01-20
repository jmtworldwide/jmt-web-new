import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoArrowForward, IoPeopleOutline, IoRocketOutline, IoHeartOutline } from 'react-icons/io5'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const values = [
  {
    icon: <IoRocketOutline size={32} />,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.'
  },
  {
    icon: <IoPeopleOutline size={32} />,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners to achieve shared success.'
  },
  {
    icon: <IoHeartOutline size={32} />,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do.'
  }
]

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="text-primary-400 font-medium mb-4 block">
              About Us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-display-md font-display font-bold text-neutral-900 mb-6">
              Building Digital Excellence Since 2009
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 leading-relaxed">
              JMT Worldwide is a technology consulting company dedicated to delivering 
              innovative solutions that help businesses thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold text-neutral-900 mb-6">
                Our Story
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-neutral-600 mb-4 leading-relaxed">
                Founded with a vision to bridge the gap between technology and business success, 
                JMT Worldwide has grown into a trusted partner for organizations seeking digital transformation.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-neutral-600 mb-6 leading-relaxed">
                Our team of experienced professionals brings together expertise in mobile development, 
                cloud services, web applications, and enterprise solutions to deliver comprehensive 
                technology solutions.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/contact-us">
                  <button className="btn btn-primary group">
                    Work With Us
                    <IoArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-primary-500 mb-2">15+</div>
                  <div className="text-primary-600 font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-display-sm font-display font-bold text-neutral-900 mb-4">
              Our Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className="card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
