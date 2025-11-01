# Quick Setup Instructions

## 🎯 Next Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Portfolio

#### Update Personal Information:

1. **Hero Section** (`components/Hero.tsx`)
   - Change "Your Name" to your actual name
   - Update the title/role
   - Add your GitHub, LinkedIn, and Twitter URLs

2. **About Section** (`components/About.tsx`)
   - Update the bio text
   - Change the statistics (years, projects, clients)
   - Consider replacing the emoji with your photo

3. **Projects Section** (`components/Projects.tsx`)
   - Replace with your actual projects
   - Update titles, descriptions, and tech stacks
   - Add real GitHub and demo links

4. **Skills Section** (`components/Skills.tsx`)
   - Add/remove skills based on your expertise
   - Customize the skill categories

5. **Contact Section** (`components/Contact.tsx`)
   - Update email, phone, and location
   - Connect the form to a backend or service like Formspree

6. **Metadata** (`app/layout.tsx`)
   - Update the page title and description
   - Add your name to the title

7. **Footer** (`components/Footer.tsx`)
   - Update copyright name
   - Add your social media links

### 4. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#3b82f6",  // Your brand color
  secondary: "#8b5cf6",
}
```

### 5. Add a Favicon

Place your `favicon.ico` file in the `app/` directory, or add other icon formats as needed.

### 6. Deploy

Deploy to Vercel:
```bash
npm run build
```

Then push to GitHub and connect to Vercel for automatic deployments.

## 📚 Useful Commands

- `npm run dev` - Development mode with hot reload
- `npm run build` - Production build
- `npm start` - Run production build locally
- `npm run lint` - Check for code issues

## 🎨 Features Included

✅ Responsive design for all screen sizes  
✅ Smooth scroll animations  
✅ Dark theme with gradient accents  
✅ Mobile-friendly navigation  
✅ Intersection observer animations  
✅ SEO-friendly metadata  
✅ TypeScript for type safety  
✅ Modern tech stack (Next.js 14)  

## 🚀 Ready to Customize!

Your portfolio is ready to be personalized. Start by updating the content in the components folder, then run `npm run dev` to see your changes in real-time.

Enjoy building your portfolio! 🎉

