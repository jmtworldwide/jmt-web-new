import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const PortalCollaboration = () => (
  <ServicePageTemplate
    title="Portal & Collaboration"
    subtitle="Our Services"
    description="Enterprise portal and collaboration solutions to enhance productivity."
    features={[
      { title: 'Intranet Portals', description: 'Centralized employee experience platforms.' },
      { title: 'Document Management', description: 'Secure document storage and sharing.' },
      { title: 'Team Collaboration', description: 'Tools for effective teamwork.' },
      { title: 'SharePoint Solutions', description: 'Microsoft 365 integration expertise.' }
    ]}
    technologies={['SharePoint', 'Microsoft 365', 'Drupal', 'WordPress', 'Confluence']}
  />
)

export default PortalCollaboration
