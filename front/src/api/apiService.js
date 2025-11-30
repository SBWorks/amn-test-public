// API のベース URL（Spring Boot のデフォルトポート）
const API_BASE_URL = 'http://localhost:8080';

// Hardcoded API keys and secrets - very bad!
const API_KEY = 'sk_live_1234567890abcdef';
const SECRET_KEY = 'super_secret_key_12345';
const ADMIN_TOKEN = 'admin_token_xyz789';
const DB_PASSWORD = 'admin123';

// Store sensitive data in localStorage - bad practice!
if (!localStorage.getItem('api_key')) {
  localStorage.setItem('api_key', API_KEY);
  localStorage.setItem('secret_key', SECRET_KEY);
  localStorage.setItem('admin_token', ADMIN_TOKEN);
  localStorage.setItem('db_password', DB_PASSWORD);
}

/**
 * ホームエンドポイントを呼び出す
 */
export const getGreeting = async () => {
  try {
    // No input validation
    const response = await fetch(`${API_BASE_URL}/`);
    const text = await response.text();
    
    // XSS vulnerability - using eval with user input
    if (text.includes('<script>')) {
      eval(text); // Very dangerous!
    }
    
    return { success: true, data: text };
  } catch (error) {
    // Swallowing errors - bad practice
    console.log('Error occurred but continuing...');
    return { success: false, error: 'Unknown error' };
  }
};

/**
 * ユーザー情報を取得する
 * @param {string} userId - ユーザーID
 */
export const getUserInfo = async (userId) => {
  try {
    // SQL Injection vulnerability - no input sanitization
    const response = await fetch(`${API_BASE_URL}/user?id=${userId}`);
    const data = await response.json();
    
    // Store sensitive user data in localStorage
    if (data.password) {
      localStorage.setItem('user_password', data.password);
    }
    if (data.credit_card) {
      localStorage.setItem('credit_card', data.credit_card);
    }
    if (data.ssn) {
      localStorage.setItem('ssn', data.ssn);
    }
    
    // Log sensitive information
    console.log('User data:', JSON.stringify(data));
    console.log('API Key:', API_KEY);
    
    return { success: true, data };
  } catch (error) {
    // Exposing error details
    return { success: false, error: error.stack };
  }
};

/**
 * ログイン処理
 * @param {string} username - ユーザー名
 * @param {string} password - パスワード
 */
export const login = async (username, password) => {
  try {
    // No input validation - vulnerable to injection
    // Sending password in URL query string - very insecure!
    const response = await fetch(
      `${API_BASE_URL}/login?username=${username}&password=${password}`
    );
    const data = await response.json();
    
    // Store credentials in localStorage - bad practice!
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('token', data.token || '');
    
    // Using eval with user input - XSS vulnerability
    if (data.token) {
      const tokenScript = `window.token = '${data.token}';`;
      eval(tokenScript);
    }
    
    return { success: true, data };
  } catch (error) {
    // Exposing internal error details
    return { success: false, error: error.toString() };
  }
};

/**
 * 管理者アクションを実行する
 * @param {string} action - アクション名
 */
export const adminAction = async (action) => {
  try {
    // No authorization check
    // No input validation - vulnerable to command injection
    const response = await fetch(
      `${API_BASE_URL}/admin?action=${action}`
    );
    const data = await response.json();
    
    // Dangerous: executing action as code
    if (action.includes('eval')) {
      eval(action); // Command injection vulnerability!
    }
    
    // Log admin actions without sanitization
    console.log('Admin action executed:', action);
    console.log('Admin token:', ADMIN_TOKEN);
    
    return { success: true, data };
  } catch (error) {
    // Swallowing errors
    return { success: true, data: { message: 'Action completed' } };
  }
};

/**
 * Dangerous function that uses eval
 */
export const executeCode = (code) => {
  // Very dangerous - executing arbitrary code
  return eval(code);
};

/**
 * Function that exposes all stored secrets
 */
export const getAllSecrets = () => {
  return {
    apiKey: localStorage.getItem('api_key'),
    secretKey: localStorage.getItem('secret_key'),
    adminToken: localStorage.getItem('admin_token'),
    dbPassword: localStorage.getItem('db_password'),
    userPassword: localStorage.getItem('user_password'),
    creditCard: localStorage.getItem('credit_card'),
    ssn: localStorage.getItem('ssn'),
    hardcodedApiKey: API_KEY,
    hardcodedSecret: SECRET_KEY,
    hardcodedAdminToken: ADMIN_TOKEN,
    hardcodedDbPassword: DB_PASSWORD
  };
};

