# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components
- `src/lib/` - Utility functions and API helpers
- `src/app/api/` - API routes (Next.js API routes)
- `public/` - Static assets

### Styling

- **Tailwind CSS** - Primary styling framework
- **Bootstrap** - Additional component styles
- **Custom CSS** - Global styles with vw units in `globals.css`

### API Integration

- Contact form API: `/api/contact`
- API utilities: `src/lib/api.js`
- Ready for Salesforce integration in Phase 2

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Building for Production

```bash
npm run build
npm start
```

## Git Workflow

```bash
# Initial commit
git add .
git commit -m "Initial commit: Next.js SSA website"

# Create branch for features
git checkout -b feature/your-feature-name

# Push to remote
git remote add origin <your-repo-url>
git push -u origin main
```

## Testing API Integration

The contact form is ready to test. It will submit to `/api/contact` which currently logs the data. In Phase 2, this will be connected to Salesforce.

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```
