import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.scss'

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCheckSquare, 
  faMugHot, 
  faChevronRight, 
  faChevronLeft,
  faChevronDown, 
  faChevronUp, 
  faTimes,
  faTimesCircle,
  faAngleDoubleRight,
  faBars,
  faSearch,
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCheckSquare, 
  faMugHot, 
  faChevronRight, 
  faChevronLeft,
  faChevronDown, 
  faChevronUp, 
  faTimes,
  faTimesCircle,
  faAngleDoubleRight,
  faBars,
  faSearch,
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCheck
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
