# E-Commerce Platform - React/Firebase

![React](https://img.shields.io/badge/react-18.2.0-blue)
![Firebase](https://img.shields.io/badge/firebase-10.5.2-orange)
![License](https://img.shields.io/badge/license-MIT-green)

Modern e-commerce solution built with:

- ⚡ React 18 + Vite
- 🔥 Firebase Auth & Firestore
- 🎨 Tailwind CSS 3
- 🧭 React Router 6

## Features

- JWT-based authentication flow
- Product catalog management
- Shopping cart functionality
- Responsive UI components
- Environment configuration (.env)
- Cross-platform line endings setup (.gitattributes)

## 🛠 Technologies

### Frontend
- **React** (v18+) - Component-based UI architecture
- **Tailwind CSS** (v3+) - Utility-first styling with responsive breakpoints:
  ```jsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ```
  - Breakpoints: `md` (768px), `lg` (1024px)
  - Configuration: `tailwind.config.js`
- **Vite** (v4+) - Build toolchain and dev server

### Data Management
- **Firebase** (v9+) - Backend services integration:
  - Auth/Firestore config: `src/utils/firebase.js`
- **JSON** - Product data structure:
  ```json
  {
    "id": "unique-id",
    "name": "Product Name",
    "image": "/images/product-name.webp",
    "category": "carecategory"
  }
  ```
  Location: `src/utils/products.json`

### Assets Optimization
- **WebP Images** - Modern format with lossless compression:
  - Directory: `public/images/`
  - Resolution: 800x600px (4:3 aspect ratio)
  - Naming: `product-name-view.webp` (e.g. `herbal-cream-packaging.webp`)
  - Conversion tool: [Squoosh](https://squoosh.app)
  - Fallback: Include JPEG versions if needed

## Installation

```bash
git clone https://github.com/yourrepo/ecommerce-platform.git
cd ecommerce-platform/frontend
npm install
```

## Configuration

1. Create Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Rename `.env.example` to `.env` and add your credentials:

```ini
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start dev server (port 5173)         |
| `npm run build` | Production build                     |
| `npm run lint`  | Analyze code quality                 |
| `npm run test`  | Run test suite (Coming soon)         |

## Environment Management

File structure for sensitive configuration:
```
.env
├── VITE_FIREBASE_API_KEY
├── VITE_FIREBASE_AUTH_DOMAIN
└── VITE_FIREBASE_PROJECT_ID
```

**Note:** All environment variables are prefixed with `VITE_` for Vite compatibility
