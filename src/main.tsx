
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced logging for debugging GitHub Pages issues
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Current path:', window.location.pathname);
console.log('Current URL:', window.location.href);
console.log('Document base URL:', document.baseURI);

// Add error handling for the initial render
try {
  // Check if the root element exists
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
    console.log('React app successfully mounted');
  } else {
    console.error("Root element not found! Check your HTML structure.");
  }
} catch (error) {
  console.error("Failed to render React application:", error);
}
