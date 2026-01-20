import ServicePageTemplate from '@/components/common/ServicePageTemplate'
import { IoPhonePortraitOutline, IoLogoApple, IoLogoAndroid, IoCodeSlashOutline, IoRocketOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'

const features = [
  { icon: <IoLogoApple size={24} />, title: 'iOS Development', description: 'Native iOS apps built with Swift and SwiftUI for optimal performance.' },
  { icon: <IoLogoAndroid size={24} />, title: 'Android Development', description: 'Kotlin-based Android apps with Material Design principles.' },
  { icon: <IoCodeSlashOutline size={24} />, title: 'Cross-Platform', description: 'React Native and Flutter solutions for multi-platform deployment.' },
  { icon: <IoRocketOutline size={24} />, title: 'App Store Optimization', description: 'Strategic ASO to improve visibility and downloads.' },
  { icon: <IoShieldCheckmarkOutline size={24} />, title: 'Security First', description: 'Enterprise-grade security with data encryption and secure APIs.' },
  { icon: <IoPhonePortraitOutline size={24} />, title: 'UI/UX Design', description: 'Intuitive interfaces that delight users and drive engagement.' }
]

const processSteps = [
  { title: 'Discovery', description: 'Understanding your requirements and goals' },
  { title: 'Design', description: 'Creating wireframes and visual designs' },
  { title: 'Development', description: 'Building your app with best practices' },
  { title: 'Launch', description: 'Testing, deployment, and ongoing support' }
]

const technologies = ['Swift', 'Kotlin', 'React Native', 'Flutter', 'SwiftUI', 'Jetpack Compose', 'Firebase', 'AWS Amplify']

const MobileDevelopment = () => (
  <ServicePageTemplate
    title="Mobile Development"
    subtitle="Our Services"
    description="We build high-performance mobile applications for iOS and Android that deliver exceptional user experiences and drive business results."
    features={features}
    processSteps={processSteps}
    technologies={technologies}
  />
)

export default MobileDevelopment
