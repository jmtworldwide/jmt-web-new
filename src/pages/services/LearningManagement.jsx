import ServicePageTemplate from '@/components/common/ServicePageTemplate'

const LearningManagement = () => (
  <ServicePageTemplate
    title="Learning Management System"
    subtitle="Our Services"
    description="Custom LMS solutions to deliver engaging learning experiences."
    features={[
      { title: 'Custom LMS Development', description: 'Tailored platforms for your needs.' },
      { title: 'Content Management', description: 'Easy course creation and management.' },
      { title: 'Progress Tracking', description: 'Comprehensive learner analytics.' },
      { title: 'Mobile Learning', description: 'Learn anywhere, anytime.' }
    ]}
    technologies={['Moodle', 'Canvas', 'React', 'Node.js', 'AWS', 'Video Streaming']}
  />
)

export default LearningManagement
