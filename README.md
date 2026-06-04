# Modern Landing Page

A beautiful, responsive landing page built with React, Tailwind CSS, Framer Motion, and Lucide Icons.

## Features

✨ **Modern Design** - Clean, contemporary UI with gradient backgrounds and smooth transitions
🎨 **Responsive Layout** - Perfectly optimized for desktop, tablet, and mobile devices
⚡ **Smooth Animations** - Engaging Framer Motion animations and transitions throughout
🎯 **Interactive Elements** - Hover effects, smooth scrolling, and dynamic components
📱 **Mobile First** - Built with mobile responsiveness as a priority
🎭 **Accessibility** - Semantic HTML and ARIA labels for better accessibility

## Technology Stack

- **React.js** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide Icons** - Beautiful, consistent SVG icons

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    - Header with responsive navigation
│   ├── Hero.jsx          - Hero section with CTA
│   ├── Features.jsx      - Features showcase
│   ├── Services.jsx      - Services accordion
│   ├── Testimonials.jsx  - Testimonials carousel
│   ├── CTA.jsx           - Call-to-action section
│   └── Footer.jsx        - Footer with links and social media
├── App.jsx               - Main App component
├── index.css             - Global styles with Tailwind
└── index.js              - React entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Customization

### Colors

Edit the `tailwind.config.js` file to customize the color palette:

```js
colors: {
  primary: { ... },
  secondary: { ... },
  dark: { ... }
}
```

### Fonts

Google Fonts are imported in `public/index.html`. You can change the font families in the Tailwind config:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'sans-serif'],
}
```

### Content

Update the content in each component file to match your brand:
- Update company name and description
- Replace placeholder images and icons
- Modify service offerings
- Add real testimonials

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Lazy loading for images
- Code splitting with React.lazy
- Optimized animations for 60fps
- Minified CSS and JavaScript in production

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Contributing

Feel free to fork this project and customize it for your needs!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or issues, please open an issue or contact the development team.

---

**Happy coding! 🚀**
