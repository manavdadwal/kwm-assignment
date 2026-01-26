# SSA - Social Security Administration Website

A modern, responsive Next.js application built from a Figma design, featuring mobile-first responsive design with viewport width (vw) units, API integration capabilities, and optimized performance.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **Responsive Design** - Mobile-first approach with vw units
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **Bootstrap** - Additional styling components
- ✅ **API Integration** - Ready for Phase 2 Salesforce integration
- ✅ **SEO Optimized** - Meta tags, structured data, and semantic HTML
- ✅ **Performance Optimized** - Image optimization, lazy loading, SSR/SSG
- ✅ **Accessibility** - ARIA labels, keyboard navigation, focus management

## Project Structure

```
kwm-assignment/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js          # API route for contact form
│   │   ├── layout.jsx                # Root layout with metadata
│   │   ├── page.jsx                   # Home page
│   │   └── globals.css                # Global styles with vw units
│   ├── components/
│   │   ├── Header.jsx                 # Navigation header
│   │   ├── Hero.jsx                   # Hero section
│   │   ├── Features.jsx               # Features section
│   │   ├── Services.jsx               # Services section
│   │   ├── ContactForm.jsx            # Contact form with API integration
│   │   └── Footer.jsx                 # Footer component
│   └── lib/
│       └── api.js                     # API utility functions
├── public/                             # Static assets
├── next.config.js                      # Next.js configuration
├── tailwind.config.js                  # Tailwind CSS configuration
└── package.json                        # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## API Integration

The project includes API integration structure ready for Phase 2:

- **Contact Form API** (`/api/contact`) - Handles form submissions
- **API Utilities** (`src/lib/api.js`) - Reusable API functions
- **Salesforce Integration** - Prepared structure for SFDC API integration

### Example API Usage

```javascript
import { submitContactForm } from '@/lib/api'

const handleSubmit = async (formData) => {
  try {
    const response = await submitContactForm(formData)
    console.log('Success:', response)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## Styling Approach

- **Mobile-First**: All styles start from mobile and scale up
- **Viewport Width (vw) Units**: CSS uses vw units for responsive sizing
- **Tailwind CSS**: Utility classes for rapid development
- **Bootstrap**: Additional component styling
- **Custom CSS**: Global styles with vw-based responsive typography

## Responsive Breakpoints

- **Mobile**: < 768px (base styles)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+ (fixed pixel values)

## Performance Optimizations

- ✅ Next.js Image component for optimized images
- ✅ Lazy loading for images
- ✅ Static generation (SSG) for better performance
- ✅ Code splitting and tree shaking
- ✅ Optimized font loading

## SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ Proper heading hierarchy
- ✅ Alt text for images

## Version Control

This project is ready for Git version control:

```bash
git init
git add .
git commit -m "Initial commit: Next.js SSA website"
git remote add origin <your-repo-url>
git push -u origin main
```

## Phase 2 - API Integration

For Phase 2, the following will be implemented:

1. **Salesforce API Integration**
   - OAuth authentication
   - Contact creation in SFDC
   - Data synchronization

2. **Enhanced Error Handling**
   - Comprehensive error messages
   - Retry logic
   - Loading states

3. **Form Validation**
   - Client-side validation
   - Server-side validation
   - Real-time feedback

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client
- **Next/Image** - Optimized images

## License

This project is created for assignment purposes.
