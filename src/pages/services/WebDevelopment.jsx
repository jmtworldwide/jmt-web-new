import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const features = [
  { title: 'Custom Web Apps', description: 'Tailored web applications built for your specific needs.' },
  { title: 'E-Commerce', description: 'Scalable online stores with seamless checkout experiences.' },
  { title: 'Progressive Web Apps', description: 'Fast, reliable apps that work offline.' },
  { title: 'API Development', description: 'RESTful and GraphQL APIs for seamless integrations.' },
  { title: 'CMS Solutions', description: 'Content management systems for easy content updates.' },
  { title: 'Performance Optimization', description: 'Lightning-fast load times and smooth interactions.' }
]

const technologies = ['React', 'Vue.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'GraphQL']

const WebDevelopment = () => (
  <ServicePageTemplate
    title="Web Development"
    subtitle="Our Services"
    description="We create modern, responsive web applications that deliver exceptional user experiences and drive business growth."
    features={features}
    technologies={technologies}
  />
)

export default WebDevelopment
