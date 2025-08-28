# Customization Guide - Portfolio Website

This guide will help you customize the portfolio website for your own use or adapt it for other professionals.

## 🎨 Visual Customization

### Color Scheme

The website uses a professional color palette defined in `src/App.css`. To change colors:

1. **Primary Colors**
   ```css
   :root {
     --primary: oklch(0.205 0 0);      /* Dark blue/black */
     --primary-foreground: oklch(0.985 0 0); /* White */
     --secondary: oklch(0.97 0 0);     /* Light gray */
     --accent: oklch(0.97 0 0);        /* Light gray */
   }
   ```

2. **Custom Color Variables**
   Add your brand colors:
   ```css
   :root {
     --brand-blue: #2B6CB0;
     --brand-green: #48BB78;
     --brand-orange: #ED8936;
   }
   ```

3. **Update Component Colors**
   Search and replace color classes in components:
   - `bg-blue-600` → `bg-[#your-color]`
   - `text-blue-600` → `text-[#your-color]`
   - `border-blue-600` → `border-[#your-color]`

### Typography

1. **Font Family**
   Update in `src/App.css`:
   ```css
   body {
     font-family: 'Your Font', 'Inter', sans-serif;
   }
   ```

2. **Font Sizes**
   Modify Tailwind classes:
   - `text-4xl` → `text-5xl` (larger headings)
   - `text-lg` → `text-xl` (larger body text)

### Layout and Spacing

1. **Container Width**
   Change `max-w-7xl` to `max-w-6xl` or `max-w-full` in components

2. **Section Padding**
   Modify `py-20` classes to adjust section spacing

## 📝 Content Customization

### Personal Information

1. **Hero Section** (`src/components/sections/Hero.jsx`)
   ```javascript
   // Update these values
   const personalInfo = {
     name: "Your Name",
     title: "Your Professional Title",
     description: "Your professional summary...",
     email: "your.email@example.com",
     phone: "+1234567890",
     github: "https://github.com/yourusername",
     linkedin: "https://linkedin.com/in/yourprofile"
   };
   ```

2. **About Section** (`src/components/sections/About.jsx`)
   - Update personal information
   - Modify stats (years of experience, projects, etc.)
   - Change key qualities list
   - Update language proficiency

3. **Contact Information** (`src/components/sections/Contact.jsx`)
   ```javascript
   const contactInfo = [
     {
       icon: Mail,
       label: 'Email',
       value: 'your.email@example.com',
       href: 'mailto:your.email@example.com'
     },
     // ... update other contact details
   ];
   ```

### Education Section

Update `src/components/sections/Education.jsx`:

```javascript
const educationData = [
  {
    degree: "Your Degree",
    institution: "Your Institution",
    location: "City, Country",
    period: "Start Date - End Date",
    description: "Description of your studies...",
    achievements: [
      "Your achievement 1",
      "Your achievement 2"
    ],
    icon: "🎓", // Choose appropriate emoji
    color: "from-blue-500 to-purple-600" // Choose colors
  }
  // Add more education entries
];
```

### Experience Section

Update `src/components/sections/Experience.jsx`:

```javascript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Start Date - End Date",
    type: "Full-time", // or Contract, Part-time, etc.
    description: "Job description...",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2"
    ],
    skills: ["Skill1", "Skill2", "Skill3"],
    icon: Code, // Choose appropriate Lucide icon
    color: "from-blue-500 to-indigo-600"
  }
  // Add more experiences
];
```

### Skills Section

Update `src/components/sections/Skills.jsx`:

```javascript
const skillCategories = [
  {
    title: "Your Skill Category",
    icon: YourIcon, // Import from lucide-react
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Skill Name", level: 85 }, // 0-100
      // Add more skills
    ]
  }
  // Add more categories
];
```

### Projects Section

Update `src/components/sections/Projects.jsx`:

```javascript
const projects = [
  {
    title: "Project Title",
    description: "Short description...",
    longDescription: "Detailed description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    category: "Category Name",
    period: "Project Timeline",
    client: "Client/Company",
    status: "Completed",
    features: [
      "Feature 1",
      "Feature 2"
    ],
    icon: YourIcon,
    color: "from-blue-500 to-purple-600",
    githubUrl: "https://github.com/...", // optional
    liveUrl: "https://project-demo.com", // optional
    image: "/path/to/image.jpg" // optional
  }
  // Add more projects
];
```

### Certificates Section

Update `src/components/sections/Certificates.jsx`:

```javascript
const certificates = [
  {
    title: "Certificate Title",
    issuer: "Issuing Organization",
    year: 2024,
    description: "Certificate description...",
    skills: ["Skill1", "Skill2"],
    category: "Category",
    status: "Completed",
    color: "from-blue-500 to-indigo-600"
  }
  // Add more certificates
];
```

## 🖼️ Image Customization

### Profile Image

1. **Add Your Photo**
   - Place your photo in `src/assets/`
   - Update `src/components/sections/Hero.jsx`:
   ```javascript
   // Replace the placeholder with your image
   <img 
     src="/src/assets/your-photo.jpg" 
     alt="Your Name"
     className="w-full h-full object-cover rounded-full"
   />
   ```

### Project Images

1. **Add Project Screenshots**
   - Place images in `src/assets/projects/`
   - Update project objects with image paths

### Favicon and Meta Images

1. **Update Favicon**
   - Replace `public/favicon.ico`
   - Update `index.html` if needed

2. **Open Graph Image**
   - Add `public/og-image.jpg` (1200x630px recommended)
   - Update meta tags in `index.html`

## 🌐 Internationalization Setup

### Adding Languages

1. **Install i18next**
   ```bash
   pnpm add react-i18next i18next i18next-browser-languagedetector
   ```

2. **Create Translation Files**
   ```
   public/
   └── locales/
       ├── en/
       │   └── translation.json
       ├── fr/
       │   └── translation.json
       └── ar/
           └── translation.json
   ```

3. **Setup i18n Configuration**
   Create `src/i18n.js`:
   ```javascript
   import i18n from 'i18next';
   import { initReactI18next } from 'react-i18next';
   import LanguageDetector from 'i18next-browser-languagedetector';

   i18n
     .use(LanguageDetector)
     .use(initReactI18next)
     .init({
       fallbackLng: 'en',
       debug: true,
       resources: {
         en: { translation: require('../public/locales/en/translation.json') },
         fr: { translation: require('../public/locales/fr/translation.json') },
         ar: { translation: require('../public/locales/ar/translation.json') }
       }
     });

   export default i18n;
   ```

4. **Use Translations in Components**
   ```javascript
   import { useTranslation } from 'react-i18next';

   const MyComponent = () => {
     const { t } = useTranslation();
     
     return <h1>{t('hero.title')}</h1>;
   };
   ```

### RTL Support

1. **Add RTL Styles**
   ```css
   [dir="rtl"] {
     text-align: right;
   }
   
   [dir="rtl"] .flex {
     flex-direction: row-reverse;
   }
   ```

2. **Update HTML Direction**
   ```javascript
   useEffect(() => {
     document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
   }, [i18n.language]);
   ```

## 🔧 Advanced Customization

### Adding New Sections

1. **Create Component**
   ```javascript
   // src/components/sections/NewSection.jsx
   const NewSection = () => {
     return (
       <section id="new-section" className="py-20 bg-white">
         {/* Your content */}
       </section>
     );
   };
   export default NewSection;
   ```

2. **Add to App**
   ```javascript
   // src/App.jsx
   import NewSection from './components/sections/NewSection';
   
   // Add to JSX
   <NewSection />
   ```

3. **Update Navigation**
   ```javascript
   // src/components/layout/Header.jsx
   const navigation = [
     // ... existing items
     { name: 'New Section', href: '#new-section' }
   ];
   ```

### Custom Animations

1. **Add Custom Framer Motion Variants**
   ```javascript
   const customVariants = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: { 
       opacity: 1, 
       scale: 1,
       transition: { duration: 0.6 }
     }
   };
   ```

2. **Create Reusable Animation Components**
   ```javascript
   const AnimatedSection = ({ children, ...props }) => (
     <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
       variants={customVariants}
       {...props}
     >
       {children}
     </motion.div>
   );
   ```

### Theme Switching

1. **Add Dark Mode Support**
   ```javascript
   // Install: pnpm add next-themes
   import { ThemeProvider } from 'next-themes';
   
   // Wrap app with ThemeProvider
   <ThemeProvider attribute="class">
     <App />
   </ThemeProvider>
   ```

2. **Update CSS for Dark Mode**
   ```css
   .dark {
     --background: oklch(0.145 0 0);
     --foreground: oklch(0.985 0 0);
   }
   ```

## 📱 Mobile Optimization

### Responsive Breakpoints

Customize Tailwind breakpoints in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

### Touch Interactions

Add touch-friendly interactions:

```javascript
// Add touch feedback
<button className="active:scale-95 transition-transform">
  Button
</button>
```

## 🔍 SEO Customization

### Meta Tags

Update `index.html`:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your professional description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/your-og-image.jpg">
```

### Structured Data

Add JSON-LD structured data:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Job Title",
  "url": "https://your-website.com",
  "sameAs": [
    "https://linkedin.com/in/yourprofile",
    "https://github.com/yourusername"
  ]
}
</script>
```

## 🎯 Performance Optimization

### Image Optimization

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Lazy Loading**
   ```javascript
   <img 
     src="image.jpg" 
     loading="lazy"
     alt="Description"
   />
   ```

### Code Splitting

```javascript
// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

---

This guide covers the main customization options. For specific questions or advanced customizations, refer to the component files and documentation of the libraries used.

