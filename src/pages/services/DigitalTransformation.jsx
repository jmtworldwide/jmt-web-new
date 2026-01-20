import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const DigitalTransformation = () => (
  <ServicePageTemplate
    title="Digital Transformation"
    subtitle="Our Services"
    description="End-to-end digital transformation solutions to modernize your business operations."
    features={[
      { title: 'Strategy & Consulting', description: 'Comprehensive digital strategy development.' },
      { title: 'Process Automation', description: 'Streamline operations with intelligent automation.' },
      { title: 'Legacy Modernization', description: 'Transform legacy systems for the modern era.' },
      { title: 'Data Analytics', description: 'Turn data into actionable business insights.' }
    ]}
    technologies={['AI/ML', 'RPA', 'Big Data', 'IoT', 'Blockchain', 'Cloud']}
  />
)

export default DigitalTransformation
