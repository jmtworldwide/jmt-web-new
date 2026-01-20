import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const CampaignManagement = () => (
  <ServicePageTemplate
    title="Campaign Management"
    subtitle="Our Services"
    description="Strategic campaign management solutions to maximize your marketing ROI."
    features={[
      { title: 'Email Marketing', description: 'Targeted email campaigns that convert.' },
      { title: 'Marketing Automation', description: 'Automated workflows for efficiency.' },
      { title: 'Analytics & Reporting', description: 'Data-driven insights for optimization.' },
      { title: 'A/B Testing', description: 'Continuous optimization through testing.' }
    ]}
    technologies={['Adobe Campaign', 'Salesforce', 'HubSpot', 'Marketo', 'Mailchimp']}
  />
)

export default CampaignManagement
