import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from 'virtual:pwa-register';

// Auto-refresh when a new version of the app is deployed
registerSW({
  onNeedRefresh() {
    // New version available — reload automatically
    window.location.reload();
  },
  onOfflineReady() {
    console.log('KYN is ready to work offline');
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
