# NZXTGEN Website - Project Documentation

## Overview

This document provides a comprehensive overview of all SEO, performance, and feature enhancements implemented for the NZXTGEN website. The project is a React-based single-page application (SPA) that has been optimized for search engine visibility, mobile performance, and user experience.

## Table of Contents

1. [Project Structure](#project-structure)
2. [SEO Implementation](#seo-implementation)
3. [Static Site Generation (SSG)](#static-site-generation-ssg)
4. [Internal Linking & Directory Pages](#internal-linking--directory-pages)
5. [Schema Markup](#schema-markup)
6. [Page Speed & Mobile Optimization](#page-speed--mobile-optimization)
7. [Sitemap & Indexing](#sitemap--indexing)
8. [Analytics & Tracking](#analytics--tracking)
9. [Service Pages](#service-pages)
10. [Content Integration](#content-integration)
11. [Build & Deployment](#build--deployment)

---

## Project Structure

```
nextgen/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── SEO.js          # SEO meta tags component
│   │   ├── LocalBusinessSchema.js  # JSON-LD schema markup
│   │   ├── MobileCallButton.js     # Mobile click-to-call
│   │   └── ...              # Other components
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── ServicesDirectory.js
│   │   ├── SuburbsDirectory.js
│   │   ├── ElectricService.js
│   │   ├── SecurityService.js
│   │   ├── EntertainmentService.js
│   │   ├── DataNetworking.js
│   │   └── SwitchBoard.js
│   ├── utils/
│   │   └── analytics.js    # GA4 tracking utilities
│   └── App.js              # Main routing configuration
├── scripts/
│   ├── prerender.js        # Puppeteer SSG script
│   └── generate-sitemap.js # XML sitemap generator
├── public/
│   ├── robots.txt          # Search engine crawler rules
│   └── sitemap.xml         # Generated sitemap
└── build/                  # Production build output
```

---

## SEO Implementation

### On-Page SEO

All pages have been optimized with proper SEO elements:

#### 1. **Meta Tags Component** (`src/components/SEO.js`)
- Dynamic title tags for each page
- Meta descriptions (150-160 characters)
- Canonical URLs to prevent duplicate content
- Open Graph tags for social sharing
- Optional `noindex` support for admin pages

**Usage Example:**
```jsx
<SEO 
  title="Electrical Services | NZXTGEN"
  description="Professional electrical services..."
  canonical={window.location.origin + '/electrical-services'}
/>
```

#### 2. **Crawlable HTML Content**
- All pages include proper H1, H2, H3 heading hierarchy
- Paragraphs and lists in the DOM (not just images)
- Semantic HTML structure
- Descriptive alt text for images

#### 3. **Page-Specific SEO**
Each page has unique, optimized meta titles and descriptions:
- Home: "Licensed Electricians & Smart Home Experts | NZXTGEN"
- Services Directory: "Electrical, Smart Home & Security Services | NZXTGEN"
- Individual service pages with location-specific titles (e.g., "Data & Networking Services in Condell Park | NZXTGEN")

---

## Static Site Generation (SSG)

### Implementation

To ensure search engines can crawl and index the React SPA, we implemented Static Site Generation using Puppeteer.

#### **Prerender Script** (`scripts/prerender.js`)

**How it works:**
1. Builds the React app using `react-scripts build`
2. Starts a local HTTP server serving the built files
3. Uses Puppeteer to visit each route and wait for JavaScript to render
4. Saves the fully-rendered HTML to static files
5. Each route gets its own `index.html` file in the build directory

**Routes Pre-rendered:**
- `/` (Home)
- `/about-us`
- `/contact-us`
- `/our-services`
- `/smart-home`
- `/electrical-services`
- `/security-systems`
- `/entertainment-technology`
- `/data-networking`
- `/areas-we-service`
- `/switchboard-upgrade`
- `/free-quote`
- `/privacy-policy`
- `/terms-and-conditions`
- `/services` (Services Directory)
- `/suburbs` (Suburbs Directory)

**Key Features:**
- Custom delay function (replaces deprecated `waitForTimeout`)
- 60-second navigation timeout
- `domcontentloaded` wait strategy for faster rendering
- Server readiness check before starting Puppeteer
- `--disable-dev-shm-usage` flag for stability

**Usage:**
```bash
npm run build:prerender    # Build + prerender
npm run prerender          # Prerender only (after build)
npm run build:full         # Build + sitemap + prerender
```

**Important Notes:**
- Admin routes (`/admin`, `/admin/dashboard`, `/forgot-password`) are excluded from prerendering
- The script creates route-specific directories in the build folder
- Each route's HTML is fully rendered with all React components

---

## Internal Linking & Directory Pages

### Directory Structure

#### 1. **Services Directory** (`/services`)
- Lists all main services offered
- Links to individual service pages
- Includes service descriptions and CTAs
- FAQs section
- Located at: `src/pages/ServicesDirectory.js`

**Services Listed:**
- Electrical Services → `/electrical-services`
- Smart Home Solutions → `/smart-home`
- Security Systems → `/security-systems`
- Data & Networking → `/data-networking`
- Entertainment Technology → `/entertainment-technology`

#### 2. **Suburbs Directory** (`/suburbs`)
- Lists key service areas
- "Get Quote" buttons for each suburb
- No individual suburb pages (removed per requirements)
- Located at: `src/pages/SuburbsDirectory.js`

**Suburbs Listed:**
- Condell Park
- Bankstown
- Bass Hill
- And other south-west Sydney suburbs

### Internal Linking Strategy

**Homepage Links:**
- Links to service pages in intro text
- Links to suburbs directory
- Links to services directory

**Service Pages:**
- Cross-links between related services
- Links back to services directory
- Links to suburbs directory

**Navigation:**
- Main navigation menu includes all key pages
- Footer includes service and area links
- Breadcrumb navigation (where applicable)

---

## Schema Markup

### LocalBusiness Schema

Implemented JSON-LD structured data for rich search results.

#### **Component** (`src/components/LocalBusinessSchema.js`)

**Schema Includes:**
- Business name: "NZXTGEN"
- Alternate name: "NextGen Electrical"
- Description
- URL: https://nzxtgen.com.au
- Logo and images
- Phone number
- Address (Condell Park, NSW, Australia)
- Geographic coordinates
- Service area (south-west Sydney suburbs)
- Opening hours
- Service catalog (all services offered)
- Social media profiles
- Aggregate rating (placeholder)

**Usage:**
```jsx
import LocalBusinessSchema from '../components/LocalBusinessSchema';

// In page component:
<LocalBusinessSchema />
```

**Pages with Schema:**
- Homepage
- All service pages
- Contact page
- About page

**Benefits:**
- Enhanced search result appearance (rich snippets)
- Google Business Profile integration
- Better local search visibility
- Map pack eligibility

---

## Page Speed & Mobile Optimization

### Image Optimization

**Guidelines Provided:**
- Image compression guide (`IMAGE_COMPRESSION_GUIDE.md`)
- Recommended formats: WebP, optimized JPEG
- Lazy loading for below-the-fold images
- Responsive image sizes

### Mobile Optimization

#### 1. **Click-to-Call**
- **Component:** `src/components/MobileCallButton.js`
- Fixed position button (mobile only)
- Visible on screens < 768px
- Direct `tel:` link: `tel:+61412345678`
- GA4 event tracking integrated

#### 2. **Performance Optimizations**
- Lazy loading images
- Code splitting (React Router)
- Minified CSS and JavaScript
- Optimized font loading
- Reduced initial bundle size

#### 3. **Mobile-First Design**
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Touch-friendly buttons (min 44x44px)
- Readable font sizes (min 16px)

### Performance Targets
- Fast loading on 4G networks
- No "bad" performance scores
- Good (not necessarily perfect) Lighthouse scores
- Optimized for Core Web Vitals

---

## Sitemap & Indexing

### XML Sitemap Generation

#### **Script** (`scripts/generate-sitemap.js`)

**Features:**
- Automatically generates `sitemap.xml`
- Includes all public routes
- Sets appropriate `changefreq` and `priority`
- Updates `lastmod` date
- Excludes admin and 404 pages

**Sitemap Location:**
- `public/sitemap.xml` (source)
- `build/sitemap.xml` (generated)

**Usage:**
```bash
npm run sitemap
```

**Sitemap Configuration:**
- Homepage: priority 1.0, weekly
- Service pages: priority 0.9, monthly
- Directory pages: priority 0.8, monthly
- Legal pages: priority 0.5, yearly

### Robots.txt

**Location:** `public/robots.txt`

**Configuration:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /admin/dashboard
Disallow: /forgot-password

Sitemap: https://nzxtgen.com.au/sitemap.xml
```

**Notes:**
- Allows all public pages
- Blocks admin pages from indexing
- References sitemap location

### Indexing Verification

**No `noindex` Tags:**
- All public pages are indexable
- Admin pages excluded via `robots.txt` (not `noindex` meta tags)
- SEO component supports optional `noindex` prop (not used on public pages)

---

## Analytics & Tracking

### Google Analytics 4 (GA4)

#### **Implementation** (`src/utils/analytics.js`)

**Centralized Tracking Functions:**
- `initGA4()` - Initializes GA4
- `trackEvent()` - Custom event tracking
- `trackFormSubmission()` - Form submissions
- `trackQuoteRequest()` - Quote requests
- `trackWhatsAppClick()` - WhatsApp button clicks

**Initialization:**
```javascript
// src/index.js
import { initGA4 } from './utils/analytics';
initGA4();
```

**GA4 Measurement ID:**
- Stored in environment variable: `REACT_APP_GA4_MEASUREMENT_ID`
- Or hardcoded in `analytics.js` (check file for current setup)

### Tracked Events

#### 1. **Phone Call Clicks**
- Location: `MobileCallButton` component
- Event: `phone_call_click`
- Parameters: `{ location: 'MobileCallButton' }`

#### 2. **Form Submissions**
- Contact Form: `form_submission` with `{ formName: 'Contact Form' }`
- Enquiry Form: `form_submission` with `{ formName: 'Enquiry Form' }`
- Free Quote Form: `form_submission` + `quote_request`

#### 3. **WhatsApp Clicks**
- Event: `whatsapp_click`
- Tracks when users click WhatsApp chat button

**Components with Tracking:**
- `MobileCallButton.js`
- `ContactForm.js`
- `EnquiryForm.js`
- `GetAQuote.js`
- `WhatsappChat.js`

### Tracking Philosophy
- **Focus on meaningful actions:** Phone calls, form submissions, quote requests
- **Ignore vanity metrics:** Page views handled by GA4 automatically
- **Business-focused:** Tracks conversions, not just traffic

---

## Service Pages

### Individual Service Pages Created

All service pages follow a consistent structure and design:

#### 1. **Electrical Services** (`/electrical-services`)
- Component: `src/pages/ElectricService.js`
- Content: Client-provided detailed service descriptions
- Sections: Intro, Services, When You Need, Why Choose, FAQs

#### 2. **Security Systems** (`/security-systems`)
- Component: `src/pages/SecurityService.js`
- Content: Security system installation and services
- Sections: Intro, Services, When You Need, Why Choose, FAQs

#### 3. **Entertainment Technology** (`/entertainment-technology`)
- Component: `src/pages/EntertainmentService.js`
- Content: TV mounting, home theatre, audio systems
- Sections: Intro, Services, When You Need, Why Choose, FAQs

#### 4. **Data & Networking** (`/data-networking`)
- Component: `src/pages/DataNetworking.js`
- Content: Structured cabling, data points, network infrastructure
- Sections: Intro, Services, When You Need, Why Choose, FAQs

#### 5. **Switchboard Upgrades** (`/switchboard-upgrade`)
- Component: `src/pages/SwitchBoard.js`
- Content: Electrical switchboard upgrades and safety
- Sections: Intro, What It Involves, When You Need, Why Choose, FAQs

### Page Structure

Each service page includes:
1. **SEO Component** - Meta tags and canonical URL
2. **LocalBusinessSchema** - JSON-LD structured data
3. **Description Component** - Hero section with title and intro
4. **Content Component** - Main content with:
   - Top CTA section
   - "What This Service Is" section
   - Services grid/list
   - "When You Need" section
   - "Why Choose NZXTGEN" section
   - Final CTA
   - FAQs section
5. **MobileCallButton** - Mobile-only click-to-call
6. **WhatsappChat** - WhatsApp chat button
7. **Footer** - Site footer

### Design System

**Color Theme:**
- Primary: `#667eea` (Purple/Blue)
- Secondary: `#764ba2` (Darker Purple)
- Text: `#1e3c72` (Dark Blue)
- Accents: Purple gradient backgrounds

**Typography:**
- Headings: Bold, 700-800 weight
- Body: 400 weight, 1.9 line height
- Responsive font sizes

**Components:**
- Consistent card designs
- Gradient backgrounds for CTAs
- Icon integration (React Icons)
- Smooth animations (Framer Motion)

---

## Content Integration

### Client-Provided Content

All service pages have been updated with client-provided content:

1. **Services Directory** - Complete service descriptions and FAQs
2. **Entertainment Technology** - Full service details and FAQs
3. **Data & Networking** - Comprehensive service information
4. **Switchboard Upgrades** - Complete upgrade information
5. **Electrical Services** - Detailed service descriptions

### Content Structure

Each service page follows this content structure:
- **Meta Title & Description** - SEO-optimized
- **Hero Section** - Title and brief description
- **What This Service Is** - Overview and explanation
- **Services List** - Detailed service offerings
- **When You Need** - Signs and scenarios
- **Why Choose NZXTGEN** - Process and benefits
- **FAQs** - Common questions and answers
- **CTAs** - Multiple call-to-action sections

### Content Updates

- All content is client-approved
- Location-specific mentions (Condell Park, south-west Sydney)
- Australian Standards compliance mentioned
- Professional tone and clear explanations

---

## Build & Deployment

### Available Scripts

```bash
# Development
npm start              # Start development server

# Building
npm run build          # Standard React build
npm run build:prerender # Build + prerender pages
npm run build:full     # Build + sitemap + prerender
npm run build:production # Full production build

# Individual tasks
npm run sitemap        # Generate sitemap only
npm run prerender      # Prerender only (requires build first)
```

### Build Process

**Recommended Production Build:**
```bash
npm run build:full
```

This command:
1. Generates the XML sitemap
2. Builds the React app
3. Prerenders all routes with Puppeteer

**Build Output:**
- `build/` directory contains:
  - Static HTML files (prerendered)
  - JavaScript bundles
  - CSS files
  - Images and assets
  - `sitemap.xml`
  - `robots.txt`

### Deployment Checklist

1. **Run Full Build:**
   ```bash
   npm run build:full
   ```

2. **Verify Build:**
   - Check `build/sitemap.xml` exists
   - Verify route directories exist (e.g., `build/about-us/index.html`)
   - Confirm all static assets are present

3. **Deploy Build Folder:**
   - Upload entire `build/` folder to hosting
   - Ensure server is configured for SPA routing
   - Verify `sitemap.xml` is accessible at `/sitemap.xml`

4. **Post-Deployment:**
   - Submit sitemap to Google Search Console
   - Verify robots.txt is accessible
   - Test mobile click-to-call functionality
   - Check GA4 tracking is working

### Server Configuration

**Required Server Setup:**
- SPA routing: All routes should serve `index.html`
- Static file serving for assets
- Gzip compression enabled
- HTTPS enabled (for production)

**Example Nginx Configuration:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Key Files Reference

### Core Components
- `src/components/SEO.js` - SEO meta tags
- `src/components/LocalBusinessSchema.js` - Schema markup
- `src/components/MobileCallButton.js` - Mobile CTA
- `src/utils/analytics.js` - GA4 tracking

### Scripts
- `scripts/prerender.js` - SSG implementation
- `scripts/generate-sitemap.js` - Sitemap generator

### Configuration
- `public/robots.txt` - Crawler rules
- `src/App.js` - Route configuration

### Service Pages
- `src/pages/ServicesDirectory.js`
- `src/pages/SuburbsDirectory.js`
- `src/pages/ElectricService.js`
- `src/pages/SecurityService.js`
- `src/pages/EntertainmentService.js`
- `src/pages/DataNetworking.js`
- `src/pages/SwitchBoard.js`

---

## Environment Variables

**Required (if using):**
- `REACT_APP_GA4_MEASUREMENT_ID` - Google Analytics 4 ID
- `REACT_APP_SITE_URL` - Base URL for sitemap (defaults to https://nzxtgen.com.au)

**Setup:**
Create `.env` file in project root:
```
REACT_APP_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_SITE_URL=https://nzxtgen.com.au
```

---

## Troubleshooting

### Prerender Issues

**Problem:** Prerender script fails or times out
**Solution:**
- Increase timeout in `prerender.js`
- Check Puppeteer installation: `npm install puppeteer`
- Verify build directory exists before running

**Problem:** Routes not rendering correctly
**Solution:**
- Ensure React Router is properly configured
- Check that all route components exist
- Verify server is running before Puppeteer starts

### Sitemap Issues

**Problem:** Sitemap not updating
**Solution:**
- Run `npm run sitemap` before build
- Check `BASE_URL` in `generate-sitemap.js`
- Verify sitemap is copied to build directory

### Tracking Issues

**Problem:** GA4 events not firing
**Solution:**
- Verify GA4 ID is correct
- Check browser console for errors
- Ensure `initGA4()` is called in `index.js`
- Test in incognito mode (ad blockers may interfere)

---

## Future Enhancements

### Potential Improvements
1. **Dynamic Sitemap:** Generate from route configuration
2. **Image Optimization:** Automated compression pipeline
3. **Performance Monitoring:** Real User Monitoring (RUM)
4. **A/B Testing:** Conversion optimization
5. **Blog/News Section:** Content marketing pages
6. **Customer Reviews:** Review schema markup
7. **Service Area Pages:** Individual suburb pages (if needed)

---

## Support & Maintenance

### Regular Tasks
1. **Update Sitemap:** Run `npm run sitemap` when adding new pages
2. **Update Prerender Routes:** Add new routes to `prerender.js` routes array
3. **Monitor GA4:** Check conversion tracking regularly
4. **Update Content:** Keep service descriptions current
5. **Test Mobile:** Verify click-to-call on real devices

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route to `src/App.js`
3. Add route to `scripts/prerender.js` routes array
4. Add route to `scripts/generate-sitemap.js` publicRoutes array
5. Include SEO component with meta tags
6. Include LocalBusinessSchema (if applicable)
7. Run `npm run build:full` to test

---

## Contact & Documentation

For questions or issues:
- Check existing documentation files:
  - `PRERENDERING_SETUP.md`
  - `TRACKING_SETUP_GUIDE.md`
  - `SITEMAP_GUIDE.md`
  - `IMAGE_COMPRESSION_GUIDE.md`

---

**Last Updated:** December 2024
**Project:** NZXTGEN Website
**Framework:** React 19.0.0
**Build Tool:** Create React App
