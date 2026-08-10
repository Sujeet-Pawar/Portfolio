// API Configuration
//
// The backend URL is resolved in this order:
//   1. VITE_API_URL env var (set in Netlify build settings for production)
//   2. PROD_API_URL below — replace with your deployed Render backend URL
//   3. http://localhost:5000 for local development
const PROD_API_URL = 'https://YOUR-SERVICE.onrender.com';

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? PROD_API_URL : 'http://localhost:5000');

if (import.meta.env.PROD && API_BASE_URL.includes('YOUR-SERVICE')) {
  console.error(
    '[api] VITE_API_URL is still the placeholder. The contact form will fail until you replace ' +
      `'https://YOUR-SERVICE.onrender.com' in .env.production (or set VITE_API_URL in Netlify) ` +
      'with your deployed Render backend URL.\nCurrently using: ' + API_BASE_URL
  );
}

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  HEALTH: `${API_BASE_URL}/api/health`
};

export { API_BASE_URL };
