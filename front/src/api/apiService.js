// API のベース URL（Spring Boot のデフォルトポート）
const API_BASE_URL = 'http://localhost:8080';

// Hardcoded API keys and secrets - very bad!
const API_KEY = 'sk_live_1234567890abcdef';
const SECRET_KEY = 'super_secret_key_12345';
const ADMIN_TOKEN = 'admin_token_xyz789';
const DB_PASSWORD = 'admin123';

// 重複した定数定義（同じ値）
const API_BASE_URL_COPY = 'http://localhost:8080';
const API_KEY_DUPLICATE = 'sk_live_1234567890abcdef';
const SECRET_KEY_DUPLICATE = 'super_secret_key_12345';
const ADMIN_TOKEN_DUPLICATE = 'admin_token_xyz789';
const DB_PASSWORD_DUPLICATE = 'admin123';
const API_KEY_BACKUP = 'sk_live_1234567890abcdef';
const SECRET_KEY_BACKUP = 'super_secret_key_12345';
const ADMIN_TOKEN_BACKUP = 'admin_token_xyz789';
const DB_PASSWORD_BACKUP = 'admin123';

// 使われない変数
const UNUSED_VAR1 = 'unused1';
const UNUSED_VAR2 = 'unused2';
const UNUSED_VAR3 = 'unused3';
const UNUSED_NUMBER = 999;
const UNUSED_FLAG = false;
const UNUSED_OBJECT = { key: 'value' };
const UNUSED_ARRAY = [1, 2, 3];

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
    
    // 重複したfetch（使われない）
    const response_copy = await fetch(`${API_BASE_URL_COPY}/`);
    const response_backup = await fetch(`${API_BASE_URL}/`);
    
    const text = await response.text();
    
    // 重複したテキスト取得（使われない）
    const text_copy = await response_copy.text();
    const text_backup = await response_backup.text();
    
    // 無駄な変換処理
    const text_str = text.toString();
    const text_str2 = new String(text_str);
    const text_final = text_str2.substring(0);
    
    // XSS vulnerability - using eval with user input
    if (text.includes('<script>')) {
      eval(text); // Very dangerous!
    }
    
    // 重複したeval（使われない）
    if (text_copy.includes('<script>')) {
      eval(text_copy);
    }
    if (text_final.includes('<script>')) {
      eval(text_final);
    }
    
    // 無駄なループ処理
    for (let i = 0; i < 3; i++) {
      const temp = text;
      if (temp) {
        // 何もしない
      }
    }
    
    const result = { success: true, data: text };
    
    // 無駄な結果コピー
    const result_copy = JSON.parse(JSON.stringify(result));
    const result_backup = { ...result };
    const result_final = Object.assign({}, result_copy);
    
    return result;
    // 重複したreturn（到達しない）
    return result_copy;
  } catch (error) {
    // Swallowing errors - bad practice
    console.log('Error occurred but continuing...');
    console.log('Error occurred but continuing... (duplicate)'); // 重複
    return { success: false, error: 'Unknown error' };
  }
};

// 重複した関数（同じ処理）
export const getGreetingDuplicate = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    const text = await response.text();
    if (text.includes('<script>')) {
      eval(text);
    }
    return { success: true, data: text };
  } catch (error) {
    console.log('Error occurred but continuing...');
    return { success: false, error: 'Unknown error' };
  }
};

// さらに重複した関数
export const getHello = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    const text = await response.text();
    if (text.includes('<script>')) {
      eval(text);
    }
    return { success: true, data: text };
  } catch (error) {
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
    // 重複したバリデーション
    let userId_copy = userId;
    let userId_backup = new String(userId);
    if (userId == null) {
      userId = '0';
    }
    if (userId_copy == null) {
      userId_copy = '0';
    }
    
    // 無駄な変換処理
    const userId_str = userId.toString();
    const userId_str2 = new String(userId_str);
    const userId_final = userId_str2.substring(0);
    
    // SQL Injection vulnerability - no input sanitization
    const response = await fetch(`${API_BASE_URL}/user?id=${userId}`);
    
    // 重複したfetch（使われない）
    const response_copy = await fetch(`${API_BASE_URL_COPY}/user?id=${userId_copy}`);
    const response_backup = await fetch(`${API_BASE_URL}/user?id=${userId_final}`);
    
    const data = await response.json();
    
    // 重複したJSON取得（使われない）
    const data_copy = await response_copy.json();
    const data_backup = await response_backup.json();
    
    // 無駄なデータコピー
    const data_duplicate = JSON.parse(JSON.stringify(data));
    const data_duplicate2 = { ...data };
    
    // Store sensitive user data in localStorage
    if (data.password) {
      localStorage.setItem('user_password', data.password);
    }
    // 重複した保存
    if (data_copy.password) {
      localStorage.setItem('user_password_copy', data_copy.password);
    }
    if (data.credit_card) {
      localStorage.setItem('credit_card', data.credit_card);
    }
    // 重複した保存
    if (data_copy.credit_card) {
      localStorage.setItem('credit_card_copy', data_copy.credit_card);
    }
    if (data.ssn) {
      localStorage.setItem('ssn', data.ssn);
    }
    // 重複した保存
    if (data_copy.ssn) {
      localStorage.setItem('ssn_copy', data_copy.ssn);
    }
    
    // Log sensitive information
    console.log('User data:', JSON.stringify(data));
    console.log('User data (copy):', JSON.stringify(data_copy)); // 重複
    console.log('API Key:', API_KEY);
    console.log('API Key (duplicate):', API_KEY_DUPLICATE); // 重複
    console.log('API Key (backup):', API_KEY_BACKUP); // 重複
    
    // 無駄なループ処理
    for (let i = 0; i < 5; i++) {
      const temp = data;
      if (temp) {
        // 何もしない
      }
    }
    
    const result = { success: true, data };
    
    // 無駄な結果コピー
    const result_copy = JSON.parse(JSON.stringify(result));
    const result_backup = { ...result };
    
    return result;
  } catch (error) {
    // Exposing error details
    console.log('Error:', error.stack);
    console.log('Error (duplicate):', error.stack); // 重複
    return { success: false, error: error.stack };
  }
};

// 重複した関数
export const getUserInfoDuplicate = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user?id=${userId}`);
    const data = await response.json();
    if (data.password) {
      localStorage.setItem('user_password', data.password);
    }
    if (data.credit_card) {
      localStorage.setItem('credit_card', data.credit_card);
    }
    if (data.ssn) {
      localStorage.setItem('ssn', data.ssn);
    }
    console.log('User data:', JSON.stringify(data));
    console.log('API Key:', API_KEY);
    return { success: true, data };
  } catch (error) {
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
    // 重複したバリデーション
    let username_copy = username;
    let password_copy = password;
    if (username == null) {
      username = '';
    }
    if (username_copy == null) {
      username_copy = '';
    }
    if (password == null) {
      password = '';
    }
    if (password_copy == null) {
      password_copy = '';
    }
    
    // 無駄な変換処理
    const username_str = username.toString();
    const password_str = password.toString();
    const username_final = new String(username_str).substring(0);
    const password_final = new String(password_str).substring(0);
    
    // No input validation - vulnerable to injection
    // Sending password in URL query string - very insecure!
    const response = await fetch(
      `${API_BASE_URL}/login?username=${username}&password=${password}`
    );
    
    // 重複したfetch（使われない）
    const response_copy = await fetch(
      `${API_BASE_URL_COPY}/login?username=${username_copy}&password=${password_copy}`
    );
    const response_backup = await fetch(
      `${API_BASE_URL}/login?username=${username_final}&password=${password_final}`
    );
    
    const data = await response.json();
    
    // 重複したJSON取得（使われない）
    const data_copy = await response_copy.json();
    const data_backup = await response_backup.json();
    
    // 無駄なデータコピー
    const data_duplicate = JSON.parse(JSON.stringify(data));
    const data_duplicate2 = { ...data };
    
    // Store credentials in localStorage - bad practice!
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('token', data.token || '');
    
    // 重複した保存
    localStorage.setItem('username_copy', username_copy);
    localStorage.setItem('password_copy', password_copy);
    localStorage.setItem('token_copy', data_copy.token || '');
    
    // Using eval with user input - XSS vulnerability
    if (data.token) {
      const tokenScript = `window.token = '${data.token}';`;
      eval(tokenScript);
    }
    
    // 重複したeval（使われない）
    if (data_copy.token) {
      const tokenScript_copy = `window.token = '${data_copy.token}';`;
      eval(tokenScript_copy);
    }
    
    // 無駄なループ処理
    for (let i = 0; i < 3; i++) {
      const temp = data;
      if (temp && temp.token) {
        // 何もしない
      }
    }
    
    const result = { success: true, data };
    
    // 無駄な結果コピー
    const result_copy = JSON.parse(JSON.stringify(result));
    const result_backup = { ...result };
    
    return result;
  } catch (error) {
    // Exposing internal error details
    console.log('Error:', error.toString());
    console.log('Error (duplicate):', error.toString()); // 重複
    return { success: false, error: error.toString() };
  }
};

// 重複した関数
export const loginDuplicate = async (username, password) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/login?username=${username}&password=${password}`
    );
    const data = await response.json();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('token', data.token || '');
    if (data.token) {
      const tokenScript = `window.token = '${data.token}';`;
      eval(tokenScript);
    }
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
};

/**
 * 管理者アクションを実行する
 * @param {string} action - アクション名
 */
export const adminAction = async (action) => {
  try {
    // 重複したバリデーション
    let action_copy = action;
    let action_backup = new String(action);
    if (action == null) {
      action = '';
    }
    if (action_copy == null) {
      action_copy = '';
    }
    
    // 無駄な変換処理
    const action_str = action.toString();
    const action_str2 = new String(action_str);
    const action_final = action_str2.substring(0);
    
    // No authorization check
    // No input validation - vulnerable to command injection
    const response = await fetch(
      `${API_BASE_URL}/admin?action=${action}`
    );
    
    // 重複したfetch（使われない）
    const response_copy = await fetch(
      `${API_BASE_URL_COPY}/admin?action=${action_copy}`
    );
    const response_backup = await fetch(
      `${API_BASE_URL}/admin?action=${action_final}`
    );
    
    const data = await response.json();
    
    // 重複したJSON取得（使われない）
    const data_copy = await response_copy.json();
    const data_backup = await response_backup.json();
    
    // 無駄なデータコピー
    const data_duplicate = JSON.parse(JSON.stringify(data));
    const data_duplicate2 = { ...data };
    
    // Dangerous: executing action as code
    if (action.includes('eval')) {
      eval(action); // Command injection vulnerability!
    }
    
    // 重複したeval（使われない）
    if (action_copy.includes('eval')) {
      eval(action_copy);
    }
    if (action_final.includes('eval')) {
      eval(action_final);
    }
    
    // Log admin actions without sanitization
    console.log('Admin action executed:', action);
    console.log('Admin action executed (copy):', action_copy); // 重複
    console.log('Admin token:', ADMIN_TOKEN);
    console.log('Admin token (duplicate):', ADMIN_TOKEN_DUPLICATE); // 重複
    console.log('Admin token (backup):', ADMIN_TOKEN_BACKUP); // 重複
    
    // 無駄なループ処理
    for (let i = 0; i < 5; i++) {
      const temp = data;
      if (temp) {
        // 何もしない
      }
    }
    
    const result = { success: true, data };
    
    // 無駄な結果コピー
    const result_copy = JSON.parse(JSON.stringify(result));
    const result_backup = { ...result };
    
    return result;
  } catch (error) {
    // Swallowing errors
    console.log('Error occurred but continuing...');
    console.log('Error occurred but continuing... (duplicate)'); // 重複
    return { success: true, data: { message: 'Action completed' } };
  }
};

// 重複した関数
export const adminActionDuplicate = async (action) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/admin?action=${action}`
    );
    const data = await response.json();
    if (action.includes('eval')) {
      eval(action);
    }
    console.log('Admin action executed:', action);
    console.log('Admin token:', ADMIN_TOKEN);
    return { success: true, data };
  } catch (error) {
    return { success: true, data: { message: 'Action completed' } };
  }
};

/**
 * Dangerous function that uses eval
 */
export const executeCode = (code) => {
  // 重複したバリデーション
  let code_copy = code;
  let code_backup = new String(code);
  if (code == null) {
    code = '';
  }
  
  // 無駄な変換処理
  const code_str = code.toString();
  const code_str2 = new String(code_str);
  const code_final = code_str2.substring(0);
  
  // Very dangerous - executing arbitrary code
  const result = eval(code);
  
  // 重複した実行（使われない）
  const result_copy = eval(code_copy);
  const result_backup = eval(code_final);
  
  // 無駄な結果コピー
  const result_duplicate = JSON.parse(JSON.stringify(result));
  const result_duplicate2 = result;
  
  return result;
};

// 重複した関数
export const executeCodeDuplicate = (code) => {
  return eval(code);
};

/**
 * Function that exposes all stored secrets
 */
export const getAllSecrets = () => {
  const secrets = {
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
  
  // 無駄なコピー処理
  const secrets_copy = JSON.parse(JSON.stringify(secrets));
  const secrets_backup = { ...secrets };
  const secrets_duplicate = Object.assign({}, secrets);
  
  // 無駄なループ処理
  for (let i = 0; i < 3; i++) {
    const temp = secrets;
    if (temp) {
      // 何もしない
    }
  }
  
  return secrets;
};

// 重複した関数
export const getAllSecretsDuplicate = () => {
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

