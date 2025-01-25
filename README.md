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

## Tech Stack

| Component       | Technology              |
|-----------------|-------------------------|
| Framework       | React 18                |
| State Management| Context API             |
| Styling         | Tailwind CSS 3          |
| Backend         | Firebase (Auth/Firestore)|
| Routing         | React Router 6          |
| Build Tool      | Vite 4                  |

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
