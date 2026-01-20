import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoCall, IoMail, IoLocationSharp, IoSend } from 'react-icons/io5'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const contactInfo = [
  {
    icon: <IoCall size={24} />,
    title: 'Phone',
    content: '+1 (234) 567-890',
    href: 'tel:+1234567890'
  },
  {
    icon: <IoMail size={24} />,
    title: 'Email',
    content: 'info@jmtworldwide.com',
    href: 'mailto:info@jmtworldwide.com'
  },
  {
    icon: <IoLocationSharp size={24} />,
    title: 'Location',
    content: 'San Francisco, CA, USA',
    href: '#'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="text-primary-400 font-medium mb-4 block">Contact Us</motion.span>
            <motion.h1 variants={fadeInUp} className="text-display-md font-display font-bold text-neutral-900 mb-6">
              Let's Start a Conversation
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 leading-relaxed">
              Have a project in mind? We'd love to hear about it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-2xl font-display font-bold mb-8">Send us a message</motion.h2>
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Company (Optional)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none" placeholder="Tell us about your project..." />
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className="btn btn-primary">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <IoSend className="ml-2" />
                </motion.button>
              </motion.form>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-2xl font-display font-bold mb-8">Get in touch</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-400 group-hover:bg-primary-400 group-hover:text-white transition-colors">{info.icon}</div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">{info.title}</div>
                      <div className="font-medium text-neutral-900">{info.content}</div>
                    </div>
                  </a>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400">
                Map Integration
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
