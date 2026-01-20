import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const WorkflowAutomation = () => (
  <ServicePageTemplate
    title="Workflow Automation"
    subtitle="Our Services"
    description="Streamline your business processes with intelligent workflow automation."
    features={[
      { title: 'Process Analysis', description: 'Identify automation opportunities.' },
      { title: 'RPA Implementation', description: 'Robotic process automation solutions.' },
      { title: 'Integration Services', description: 'Connect your systems seamlessly.' },
      { title: 'Continuous Optimization', description: 'Ongoing improvement and support.' }
    ]}
    technologies={['UiPath', 'Blue Prism', 'Automation Anywhere', 'Zapier', 'Power Automate']}
  />
)

export default WorkflowAutomation
