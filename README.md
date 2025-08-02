# Viterra Website - Additional Pages

This project extends the Viterra website with additional pages to provide a complete user experience.

## New Pages Created

### 1. Services Page (`/services`)

- Comprehensive overview of all services offered
- Reuses the existing ServicesSection component
- Includes a design process section
- Features the FAQ section for common questions

### 2. Projects Page (`/projects`)

- Portfolio of completed projects
- Filterable by project type (Residential, Commercial, Education, Public Realm)
- Uses SectionCard components for consistent styling
- Includes project descriptions and categories

### 3. Contact Page (`/contact`)

- Contact information for both studios (Alton and London)
- Contact form for user inquiries
- Social media links
- Responsive design for all device sizes

### 4. Privacy Policy Page (`/privacy`)

- Comprehensive privacy policy
- Explains data collection and usage
- Complies with privacy regulations
- Professional legal language

### 5. Terms of Service Page (`/terms`)

- Terms of service for website usage
- User responsibilities and restrictions
- Intellectual property information
- Limitation of liability clauses

### 6. 404 Page (`/not-found`)

- Custom 404 error page
- Links back to home and projects pages
- Consistent styling with the rest of the site

### 7. Sitemap (`/sitemap.xml`)

- Dynamic sitemap generation
- Includes all static pages
- Proper XML formatting for SEO

### 8. Robots.txt (`/robots.txt`)

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

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where appropriate

## File Structure

```
src/
├── app/
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
│   ├── sitemap.xml/
│   │   └── route.ts
│   ├── robots.txt/
│   │   └── route.ts
│   └── not-found.tsx
├── components/
│   └── (existing components)
└── pages/
    └── (existing pages)
```

## Testing

A test page has been created at `/test-pages` to verify all new pages are working correctly.

## Maintenance

All pages are built with maintainability in mind:

- Consistent code structure
- Clear component separation
- Well-documented styling
- Easy to update content
