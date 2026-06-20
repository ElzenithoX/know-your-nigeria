import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from 'virtual:pwa-register';

// Auto-update: reload the app as soon as a new version is deployed.
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    // A new version is ready — activate and reload right away.
    updateSW(true);
  },
  onRegisteredSW(swUrl, registration) {
    if (!registration) return;
    // Check for a new version every 60 seconds while the app is open,
    // and also whenever the user refocuses the tab/app.
    setInterval(() => registration.update(), 60 * 1000);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') registration.update();
    });
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
