# Viterra Website - Additional Pages with Animations

This project extends the Viterra website with additional pages to provide a complete user experience, enhanced with smooth animations using Framer Motion.

## New Pages Created

### 1. Services Page (`/services`)

- Comprehensive overview of all services offered
- Reuses the existing ServicesSection component
- Includes a design process section
- Features the FAQ section for common questions
- Enhanced with staggered animations for content sections

### 2. Projects Page (`/projects`)

- Portfolio of completed projects
- Filterable by project type (Residential, Commercial, Education, Public Realm)
- Uses SectionCard components for consistent styling
- Includes project descriptions and categories
- Enhanced with staggered animations for project cards

### 3. Contact Page (`/contact`)

- Contact information for both studios (Alton and London)
- Contact form for user inquiries
- Social media links
- Responsive design for all device sizes
- Enhanced with staggered animations for form elements

### 4. Privacy Policy Page (`/privacy`)

- Comprehensive privacy policy
- Explains data collection and usage
- Complies with privacy regulations
- Professional legal language
- Enhanced with staggered animations for content sections

### 5. Terms of Service Page (`/terms`)

- Terms of service for website usage
- User responsibilities and restrictions
- Intellectual property information
- Limitation of liability clauses
- Enhanced with staggered animations for content sections

### 6. About Page (`/about`)

- Completely redesigned About page with animations
- Team member profiles with hover effects
- Enhanced with staggered animations for content sections

### 7. Individual Project Pages

- Goodman's Fields (`/place/goodmans-field`)
- Whitehill and Bordon (`/place/whitehill-and-bordon`)
- Edenbrook Village (`/place/edenbrook-village`)
- Enhanced with scroll-triggered animations and hover effects

### 8. 404 Page (`/not-found`)

- Custom 404 error page
- Links back to home and projects pages
- Consistent styling with the rest of the site

### 9. Sitemap (`/sitemap.xml`)

- Dynamic sitemap generation
- Includes all static pages
- Proper XML formatting for SEO

### 10. Robots.txt (`/robots.txt`)

- Standard robots.txt file
- Allows all crawling
- References the sitemap

## SEO Improvements

### Metadata Updates

- Enhanced description in layout metadata
- Consistent page titles across all pages

### Footer Links

- Added links to new pages in footer
- Improved site navigation

## Animation Features

### Framer Motion Implementation

All pages have been enhanced with smooth animations using Framer Motion:

- **Staggered Animations**: Content sections fade in sequentially for a polished effect
- **Hover Effects**: Interactive elements respond to user interaction with subtle movements
- **Page Transitions**: Smooth transitions between pages
- **Scroll-Based Animations**: Content elements animate as they enter the viewport
- **Hover Scale Effects**: Project cards and buttons scale slightly on hover

### Animation Types Used

1. **Initial/Final State Animations**: Elements start with opacity: 0 and animate to opacity: 1
2. **Staggered Children**: Parent containers animate children elements in sequence
3. **Hover Animations**: Elements respond to hover with translateY or scale transformations
4. **Scroll Animations**: Content fades in as users scroll down the page

## Technical Implementation

### Consistent Styling

- All new pages follow the existing design patterns
- Responsive layouts for all screen sizes
- Reuse of existing components where possible
- Consistent typography and color scheme

### Performance

- Server-side rendering with Next.js
- Optimized for fast loading
- Minimal JavaScript usage
- Efficient animation implementation with Framer Motion

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where appropriate
- Animations respect user's reduced motion preferences

## File Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── place/
│   │   ├── goodmans-field/
│   │   │   └── page.tsx
│   │   ├── whitehill-and-bordon/
│   │   │   └── page.tsx
│   │   └── edenbrook-village/
│   │       └── page.tsx
│   ├── sitemap.xml/
│   │   └── route.ts
│   ├── robots.txt/
│   │   └── route.ts
│   ├── test-animations/
│   │   └── page.tsx
│   └── not-found.tsx
├── components/
│   └── (existing components)
└── pages/
    └── (redirect pages to new app router)
```

## Testing

A test page has been created at `/test-animations` to verify all animations are working correctly across all pages.

## Maintenance

All pages are built with maintainability in mind:

- Consistent code structure
- Clear component separation
- Well-documented styling
- Easy to update content
