# Deployment Guide - Mahmoud Guebsi Portfolio

This guide provides detailed instructions for deploying the Mahmoud Guebsi portfolio website to various hosting platforms.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the recommended platform for deploying this React application due to its excellent performance, automatic deployments, and built-in optimizations.

#### Prerequisites
- GitHub account
- Vercel account (free tier available)

#### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure build settings:
     - Framework Preset: `Vite`
     - Build Command: `pnpm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to your project dashboard
   - Navigate to "Settings" > "Domains"
   - Add your custom domain
   - Configure DNS records as instructed

#### Environment Variables
If you add backend functionality later, set environment variables in Vercel:
- Go to "Settings" > "Environment Variables"
- Add your variables (e.g., `VITE_API_URL`, `VITE_EMAIL_SERVICE_ID`)

### 2. Netlify

Netlify is another excellent option for static site hosting with great features for React applications.

#### Steps

1. **Build the Project**
   ```bash
   pnpm run build
   ```

2. **Deploy via Drag & Drop**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag the `dist` folder to the deploy area

3. **Deploy via Git (Recommended)**
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `pnpm run build`
     - Publish directory: `dist`
   - Deploy

4. **Configure Redirects**
   Create `public/_redirects` file:
   ```
   /*    /index.html   200
   ```

#### Custom Domain
- Go to "Domain settings"
- Add custom domain
- Configure DNS records

### 3. GitHub Pages

Free hosting option directly from your GitHub repository.

#### Steps

1. **Install gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/mahmoud-portfolio",
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   pnpm run deploy
   ```

4. **Configure Repository**
   - Go to repository settings
   - Navigate to "Pages"
   - Select "gh-pages" branch as source

### 4. Firebase Hosting

Google's hosting platform with excellent performance and CDN.

#### Steps

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Build and Deploy**
   ```bash
   pnpm run build
   firebase deploy
   ```

### 5. AWS S3 + CloudFront

Enterprise-level hosting with AWS services.

#### Prerequisites
- AWS account
- AWS CLI configured

#### Steps

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://mahmoud-portfolio-bucket
   ```

2. **Configure Bucket for Static Hosting**
   ```bash
   aws s3 website s3://mahmoud-portfolio-bucket --index-document index.html --error-document index.html
   ```

3. **Build and Upload**
   ```bash
   pnpm run build
   aws s3 sync dist/ s3://mahmoud-portfolio-bucket --delete
   ```

4. **Set Up CloudFront (Optional)**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain

## 🔧 Build Optimization

### Performance Optimization

1. **Image Optimization**
   - Compress images before adding to `src/assets/`
   - Use WebP format when possible
   - Implement lazy loading for images

2. **Bundle Analysis**
   ```bash
   pnpm add -D rollup-plugin-visualizer
   ```
   
   Add to `vite.config.js`:
   ```javascript
   import { visualizer } from 'rollup-plugin-visualizer';
   
   export default {
     plugins: [
       // ... other plugins
       visualizer({
         filename: 'dist/stats.html',
         open: true
       })
     ]
   }
   ```

3. **Code Splitting**
   ```javascript
   // Lazy load components
   const LazyComponent = lazy(() => import('./components/LazyComponent'));
   ```

### SEO Optimization

1. **Meta Tags**
   Update `index.html` with proper meta tags:
   ```html
   <meta name="description" content="Mahmoud Guebsi - Computer Science Lecturer & Web Developer Portfolio">
   <meta name="keywords" content="Mahmoud Guebsi, web developer, computer science, portfolio">
   <meta property="og:title" content="Mahmoud Guebsi - Portfolio">
   <meta property="og:description" content="Professional portfolio showcasing web development and teaching expertise">
   <meta property="og:image" content="/og-image.jpg">
   <meta property="og:url" content="https://your-domain.com">
   ```

2. **Sitemap Generation**
   Create `public/sitemap.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://your-domain.com</loc>
       <lastmod>2025-01-01</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

## 🔒 Security Configuration

### HTTPS Setup
- Most platforms (Vercel, Netlify) provide HTTPS automatically
- For custom setups, use Let's Encrypt certificates

### Security Headers
Configure security headers in your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

## 📊 Monitoring and Analytics

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking with Sentry (optional)

## 🔄 Continuous Deployment

### GitHub Actions (Example)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: pnpm install
    - name: Build
      run: pnpm run build
    - name: Deploy to Vercel
      uses: vercel/action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Routing Issues**
   - Ensure proper redirects are configured
   - Check that all routes point to index.html

3. **Assets Not Loading**
   - Verify asset paths are correct
   - Check build output in dist folder
   - Ensure assets are included in build

4. **Performance Issues**
   - Optimize images
   - Enable compression
   - Use CDN for assets

### Support
For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Test locally first with `pnpm run preview`

---

Choose the deployment method that best fits your needs. Vercel is recommended for its simplicity and performance, while AWS provides more control for enterprise applications.

