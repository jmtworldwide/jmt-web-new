import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

const Emasters = () => (
  <>
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container-custom">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8"><IoArrowBack /> Back to Portfolio</Link>
        <h1 className="text-display-md font-display font-bold text-neutral-900 mb-6">eMasters</h1>
        <p className="text-xl text-neutral-600 max-w-3xl">A mobile commerce platform for sneaker enthusiasts.</p>
      </div>
    </section>
    <section className="section bg-white">
      <div className="container-custom"><p className="text-neutral-600">Project details coming soon.</p></div>
    </section>
  </>
)

export default Emasters
