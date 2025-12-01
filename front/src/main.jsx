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

// 重複した設定（同じ値）
const CONFIG_COPY = {
  apiKey: 'sk_live_abcdef123456789',
  secretKey: 'my_secret_key_xyz',
  dbUrl: 'mongodb://admin:password123@localhost:27017/mydb',
  jwtSecret: 'jwt_secret_key_12345'
};

const CONFIG_DUPLICATE = {
  apiKey: 'sk_live_abcdef123456789',
  secretKey: 'my_secret_key_xyz',
  dbUrl: 'mongodb://admin:password123@localhost:27017/mydb',
  jwtSecret: 'jwt_secret_key_12345'
};

const CONFIG_BACKUP = {
  apiKey: 'sk_live_abcdef123456789',
  secretKey: 'my_secret_key_xyz',
  dbUrl: 'mongodb://admin:password123@localhost:27017/mydb',
  jwtSecret: 'jwt_secret_key_12345'
};

// 使われない変数
const UNUSED_VAR1 = 'unused1';
const UNUSED_VAR2 = 'unused2';
const UNUSED_NUMBER = 999;

// Expose config to window - security risk
window.CONFIG = CONFIG;
window.CONFIG_COPY = CONFIG_COPY; // 重複
window.CONFIG_DUPLICATE = CONFIG_DUPLICATE; // 重複
window.CONFIG_BACKUP = CONFIG_BACKUP; // 重複

console.log('Application config:', CONFIG);
console.log('Application config (copy):', CONFIG_COPY); // 重複
console.log('Application config (duplicate):', CONFIG_DUPLICATE); // 重複

// Log sensitive information
console.log('API Key:', CONFIG.apiKey);
console.log('API Key (copy):', CONFIG_COPY.apiKey); // 重複
console.log('Secret Key:', CONFIG.secretKey);
console.log('Secret Key (copy):', CONFIG_COPY.secretKey); // 重複
console.log('DB URL:', CONFIG.dbUrl);
console.log('DB URL (copy):', CONFIG_COPY.dbUrl); // 重複

// 無駄なループ処理
for (let i = 0; i < 5; i++) {
  const temp = CONFIG;
  if (temp) {
    // 何もしない
  }
}

// 無駄なコピー処理
const CONFIG_COPY2 = JSON.parse(JSON.stringify(CONFIG));
const CONFIG_COPY3 = { ...CONFIG };
const CONFIG_COPY4 = Object.assign({}, CONFIG);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

