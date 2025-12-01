// API のベース URL（環境変数から読み込む）
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

// 環境変数から認証情報を読み込む
const API_KEY = import.meta.env.VITE_API_KEY || '';
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || '';
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN || '';
const DB_PASSWORD = import.meta.env.VITE_DB_PASSWORD || '';

// 使われない変数
const UNUSED_VAR1 = 'unused1';
const UNUSED_VAR2 = 'unused2';
const UNUSED_VAR3 = 'unused3';
const UNUSED_NUMBER = 999;
const UNUSED_FLAG = false;
const UNUSED_OBJECT = { key: 'value' };
const UNUSED_ARRAY = [1, 2, 3];

// 環境変数から読み込んだ認証情報を設定（必要に応じて）
// 注意: 機密情報をlocalStorageに保存するのは推奨されません

/**
 * ホームエンドポイントを呼び出す
 */
export const getGreeting = async () => {
  try {
    // No input validation
    const response = await fetch(`${API_BASE_URL}/`);
    
    
    const text = await response.text();
    
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
    
    
    const data = await response.json();
    
    // 重複したJSON取得（使われない）
    const data_copy = await response_copy.json();
    const data_backup = await response_backup.json();
    
    // 無駄なデータコピー
    const data_duplicate = JSON.parse(JSON.stringify(data));
    const data_duplicate2 = { ...data };
    
    // 機密情報をlocalStorageに保存しない（セキュリティ上の問題）
    // 機密情報をログに出力しない
    // 機密情報をログに出力しない
    
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
    // バリデーション
    if (username == null) {
      username = '';
    }
    if (password == null) {
      password = '';
    }
    
    // No input validation - vulnerable to injection
    // Sending password in URL query string - very insecure!
    const response = await fetch(
      `${API_BASE_URL}/login?username=${username}&password=${password}`
    );
    
    const data = await response.json();
    
    // 機密情報をlocalStorageに保存しない（セキュリティ上の問題）
    // evalの使用は避ける（XSS脆弱性）
    
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
    // 機密情報をログに出力しない
    
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
    // ハードコードされた認証情報は削除（環境変数から読み込む）
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
    // ハードコードされた認証情報は削除（環境変数から読み込む）
  };
};

