import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

const AdobeProject = () => (
  <>
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container-custom">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8"><IoArrowBack /> Back to Portfolio</Link>
        <h1 className="text-display-md font-display font-bold text-neutral-900 mb-6">Adobe Campaign</h1>
        <p className="text-xl text-neutral-600 max-w-3xl">Email marketing campaign management solutions.</p>
      </div>
    </section>
    <section className="section bg-white">
      <div className="container-custom"><p className="text-neutral-600">Project details coming soon.</p></div>
    </section>
  </>
)

export default AdobeProject
