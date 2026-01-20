import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'))

// Services pages
const MobileDevelopment = lazy(() => import('./pages/services/MobileDevelopment'))
const CloudServices = lazy(() => import('./pages/services/CloudServices'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const UiUxServices = lazy(() => import('./pages/services/UiUxServices'))
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'))
const QaTesting = lazy(() => import('./pages/services/QaTesting'))
const CampaignManagement = lazy(() => import('./pages/services/CampaignManagement'))
const WorkflowAutomation = lazy(() => import('./pages/services/WorkflowAutomation'))
const LearningManagement = lazy(() => import('./pages/services/LearningManagement'))
const PortalCollaboration = lazy(() => import('./pages/services/PortalCollaboration'))

// Project pages
const Xtime = lazy(() => import('./pages/projects/Xtime'))
const Emasters = lazy(() => import('./pages/projects/Emasters'))
const AdobeProject = lazy(() => import('./pages/projects/AdobeProject'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Main pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* Service pages */}
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/ui-ux-services" element={<UiUxServices />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/qatesting" element={<QaTesting />} />
          <Route path="/campaign-management" element={<CampaignManagement />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/learning-management-system" element={<LearningManagement />} />
          <Route path="/portal-collaboration" element={<PortalCollaboration />} />
          
          {/* Project pages */}
          <Route path="/xtime" element={<Xtime />} />
          <Route path="/emasters" element={<Emasters />} />
          <Route path="/adobe" element={<AdobeProject />} />
          
          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
