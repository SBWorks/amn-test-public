import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Hardcoded configuration - bad practice
const CONFIG = {
  apiKey: 'sk_live_abcdef123456789',
  secretKey: 'my_secret_key_xyz',
  dbUrl: 'mongodb://admin:password123@localhost:27017/mydb',
  jwtSecret: 'jwt_secret_key_12345'
};

// Expose config to window - security risk
window.CONFIG = CONFIG;
console.log('Application config:', CONFIG);

// Log sensitive information
console.log('API Key:', CONFIG.apiKey);
console.log('Secret Key:', CONFIG.secretKey);
console.log('DB URL:', CONFIG.dbUrl);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

