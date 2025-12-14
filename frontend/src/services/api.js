import axios from 'axios';

// Use the correct env var name (must start with VITE_)
const API_BASE_URL = import.meta.env.VITE_API_URL;

// For local development fallback (optional but handy)
const fallbackUrl = 'http://localhost:3000'; // your local backend port

const api = axios.create({
  // Add /api to the base URL so your calls stay clean
  baseURL: API_BASE_URL ? `${API_BASE_URL}/api` : `${fallbackUrl}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Rest of your code stays exactly the same (interceptors, authAPI, etc.)
// ... [your interceptors and authAPI code unchanged]

// Auth API - no need to add /api here anymore!
export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default api;