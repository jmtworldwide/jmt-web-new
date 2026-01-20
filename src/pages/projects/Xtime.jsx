import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoArrowBack, IoCarOutline, IoTimeOutline, IoAnalyticsOutline } from 'react-icons/io5'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const Xtime = () => (
  <>
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="container-custom relative z-10">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"><IoArrowBack /> Back to Portfolio</Link>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.span variants={fadeInUp} className="text-blue-600 font-medium mb-4 block">Case Study</motion.span>
          <motion.h1 variants={fadeInUp} className="text-display-md font-display font-bold text-neutral-900 mb-6">Xtime - Automotive Service Platform</motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-neutral-600 leading-relaxed max-w-3xl">A comprehensive service scheduling platform that revolutionized how automotive dealerships manage operations.</motion.p>
        </motion.div>
      </div>
    </section>
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[{ icon: <IoCarOutline size={32} />, label: 'Industry', value: 'Automotive' }, { icon: <IoTimeOutline size={32} />, label: 'Duration', value: '18 Months' }, { icon: <IoAnalyticsOutline size={32} />, label: 'Impact', value: '40% Efficiency Gain' }].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">{item.icon}</div>
              <div className="text-sm text-neutral-500 mb-1">{item.label}</div>
              <div className="text-xl font-display font-bold">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Xtime
