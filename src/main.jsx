import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

// Initialize AOS
AOS.init({
  duration: 1200, // Duration of animations
  easing: 'ease-in-out', // Easing function for animations
  once: true, // Whether animation should happen only once
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
