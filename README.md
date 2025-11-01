# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Works perfectly on all devices and screen sizes
- **Dark Theme**: Eye-friendly dark theme with gradient accents
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **TypeScript**: Type-safe code for better development experience
- **Optimized Performance**: Built with Next.js 14 for lightning-fast loading

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- `components/Hero.tsx` - Your name, title, and social media links
- `components/About.tsx` - Your bio and statistics
- `components/Projects.tsx` - Your projects with descriptions and links
- `components/Contact.tsx` - Your contact information
- `app/layout.tsx` - Page title and metadata

### Colors & Theme

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#3b82f6",  // Change to your preferred color
  secondary: "#8b5cf6",
}
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills & technologies
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer section
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will detect Next.js and configure everything automatically
4. Your site will be live in minutes!

### Build for Production

To create a production build:

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal introduction and statistics
3. **Projects** - Showcase of featured projects with tech stack
4. **Skills** - Technologies and tools you work with
5. **Contact** - Contact form and information

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ by [Your Name]

