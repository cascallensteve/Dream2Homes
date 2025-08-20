# Dreams 2 Home - Agent Instructions

## Build/Test Commands
- `npm install` - Install dependencies
- `npm start` - Start development server (runs on port 3000)
- `npm run build` - Build for production
- `npm run build:css` - Build Tailwind CSS (for development)

## Architecture
- **Frontend**: React with functional components and hooks
- **Styling**: Tailwind CSS with custom color scheme (primary: blue, accent: orange)
- **Routing**: React Router DOM for SPA navigation
- **Build**: Webpack with Babel for ES6/JSX compilation
- **Deployment**: Ready for Vercel/Netlify deployment

## Code Style
- Use functional components with hooks (useState, useEffect)
- Import React Router components: `import { Link, useLocation } from 'react-router-dom'`
- Tailwind utility classes for styling (no custom CSS files)
- Form validation with local state management
- Responsive design with Tailwind breakpoints (sm:, md:, lg:)
- File naming: PascalCase for components (Navigation.jsx, Home.jsx)
- Modern ES6+ syntax with destructuring and arrow functions

## Project Structure
```
src/
├── components/        # Reusable components (Navigation, Footer)
├── pages/            # Page components (Home, About, Contact)
├── App.jsx           # Main app component with routing
└── index.js          # App entry point
```

## Colors & Design
- Primary: Blue gradient (#0ea5e9 to #0c4a6e)
- Accent: Orange (#ef6820 to #772a16)
- Background: Light gray (#f8fafc)
- Modern gradients, rounded corners, shadows, and hover effects
