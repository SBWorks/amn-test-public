import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 環境変数から設定を読み込む
const CONFIG = {
  apiKey: import.meta.env.VITE_API_KEY || '',
  secretKey: import.meta.env.VITE_SECRET_KEY || '',
  dbUrl: import.meta.env.VITE_DB_URL || '',
  jwtSecret: import.meta.env.VITE_JWT_SECRET || ''
};

// 使われない変数
const UNUSED_VAR1 = 'unused1';
const UNUSED_VAR2 = 'unused2';
const UNUSED_NUMBER = 999;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

