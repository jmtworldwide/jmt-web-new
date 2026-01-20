import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const QaTesting = () => (
  <ServicePageTemplate
    title="QA Testing"
    subtitle="Our Services"
    description="Comprehensive quality assurance services to ensure your software performs flawlessly."
    features={[
      { title: 'Manual Testing', description: 'Thorough manual testing by experienced QA engineers.' },
      { title: 'Automated Testing', description: 'Scalable test automation frameworks.' },
      { title: 'Performance Testing', description: 'Load and stress testing for optimal performance.' },
      { title: 'Security Testing', description: 'Identify vulnerabilities before they become issues.' }
    ]}
    technologies={['Selenium', 'Cypress', 'Jest', 'JMeter', 'Appium', 'Postman']}
  />
)

export default QaTesting
