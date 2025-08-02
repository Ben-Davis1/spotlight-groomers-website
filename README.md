# The Spotlight Groomers - Landing Page

A modern, friendly, and professional website for The Spotlight Groomers dog grooming business in London, built with React and Tailwind CSS.

## Features

- **Hero Section**: Welcoming headline with booking CTA and key statistics
- **About Us**: Team information and business highlights
- **Services**: Comprehensive grooming service listings with pricing
- **Gallery**: Interactive photo gallery with filtering
- **Testimonials**: Customer reviews with carousel functionality
- **Booking**: Contact form and business information
- **Footer**: Social links and contact details

## Design Highlights

- Clean, modern layout with warm color palette
- Fully responsive design optimized for all devices
- Playful but professional dog-themed elements
- Smooth animations and hover effects
- Accessible navigation and form elements

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd spotlight-groomers-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
spotlight-groomers-landing-page/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Booking.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Colors
The color scheme can be adjusted in `tailwind.config.js`:
- **Primary**: Orange tones for main branding
- **Secondary**: Blue tones for accents
- **Warm**: Earthy tones for backgrounds

### Content
All content can be easily modified in the respective component files:
- Team member information in `About.jsx`
- Service details and pricing in `Services.jsx`
- Testimonials in `Testimonials.jsx`
- Contact information in `Booking.jsx` and `Footer.jsx`

### Images
Currently using emoji placeholders for images. Replace with actual photos:
- Update the Gallery component with real before/after photos
- Add team photos to the About section
- Replace emoji icons with actual images or SVG icons

## Contact Information

The website includes placeholder contact details that should be updated:
- **Address**: 123 Grooming Lane, Camden, London NW1 8QT
- **Phone**: +44 123 456 7890
- **Email**: hello@spotlightgroomers.co.uk

## Social Media

Social media links are included for:
- Instagram: @thespotlightgroomers
- Facebook
- TikTok
- Google Reviews

## License

This project is created for The Spotlight Groomers and is proprietary.