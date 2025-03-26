
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Log environment for debugging
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

createRoot(document.getElementById("root")!).render(<App />);
