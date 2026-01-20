# JMT Worldwide - Modern React Application

A comprehensive modernization of the JMT Worldwide website built with React 18, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Key Upgrades

### Technology Stack

| Before | After |
|--------|-------|
| Create React App 4.0.3 | **Vite 5.2** |
| React 17 | **React 18.2** |
| node-sass 5.0 (deprecated) | **Dart Sass 1.72** |
| react-router-dom 5 | **react-router-dom 6** |
| Bootstrap 4 + custom CSS | **Tailwind CSS 3.4** |
| Class components | **Functional components + Hooks** |
| No animations | **Framer Motion 11** |

### Key Improvements

- ⚡ **10x faster build times** with Vite
- 📦 **Smaller bundle size** with tree-shaking
- 🎨 **Modern design system** with Tailwind CSS
- ✨ **Smooth animations** with Framer Motion
- 📱 **Mobile-first responsive design**
- ♿ **Improved accessibility**
- 🔄 **Code splitting** with React.lazy
- 🎯 **TypeScript ready** (optional)

## 📁 Project Structure

```
jmt-web-modern/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media
│   ├── components/
│   │   ├── common/        # Shared components (Header, Footer, etc.)
│   │   ├── layout/        # Layout components
│   │   └── carousel/      # Carousel components
│   ├── pages/
│   │   ├── home/          # Home page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── portfolio/     # Portfolio page
│   │   ├── services/      # Service pages
│   │   └── projects/      # Project case studies
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles and variables
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation

```bash
# Clone or copy the project
cd jmt-web-modern

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://api.example.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Path Aliases

The project uses path aliases for cleaner imports:

```javascript
import Header from '@/components/common/header/Header'
import { fadeInUp } from '@/utils/animations'
```

## 📝 Migration Notes

### React Router v6 Changes

```javascript
// Before (v5)
<Switch>
  <Route path="/home" component={Home} />
</Switch>

// After (v6)
<Routes>
  <Route path="/home" element={<Home />} />
</Routes>
```

### Styling Changes

```jsx
// Before: Bootstrap + custom CSS
<div className="container-fluid">
  <div className="row">
    <div className="col-md-6">

// After: Tailwind CSS
<div className="container-custom">
  <div className="grid md:grid-cols-2 gap-8">
```

### Component Updates

```jsx
// Before: Class component
class Home extends PureComponent {
  render() {
    return <div>...</div>
  }
}

// After: Functional component with hooks
const Home = () => {
  const [state, setState] = useState()
  return <div>...</div>
}
```

## 🎨 Design System

### Colors

- **Primary**: `#2579d8` (Blue)
- **Accent**: `#ff4805` (Orange)
- **Neutral**: Gray scale from 50-900

### Typography

- **Display**: Plus Jakarta Sans
- **Body**: Nunito Sans

### Spacing

Uses Tailwind's default spacing scale with custom additions for larger gaps.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'build' folder
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📄 License

MIT License - Copyright (c) 2024 JMT Worldwide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ by JMT Worldwide
