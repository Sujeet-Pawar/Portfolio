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

if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
  console.error(
    '[api] VITE_API_URL is not set. The contact form will fail until you either:\n' +
      "  - set VITE_API_URL in your Netlify build settings, or\n" +
      `  - replace PROD_API_URL in src/config/api.js with your Render backend URL (e.g. ${PROD_API_URL})\n` +
      'Currently using: ' + PROD_API_URL
  );
}

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  HEALTH: `${API_BASE_URL}/api/health`
};

export { API_BASE_URL };
