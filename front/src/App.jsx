import React, { useState, useEffect } from 'react'
import { getGreeting, getUserInfo, login, adminAction, executeCode, getAllSecrets } from './api/apiService'
import './App.css'

// Hardcoded credentials - very bad!
const DEFAULT_USERNAME = 'admin'
const DEFAULT_PASSWORD = 'admin123'
const API_SECRET = 'sk_live_abcdef123456789'
const JWT_SECRET = 'my_secret_jwt_key_12345'

function App() {
  const [greeting, setGreeting] = useState('')
  const [userData, setUserData] = useState(null)
  const [loginResult, setLoginResult] = useState(null)
  const [adminResult, setAdminResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [secrets, setSecrets] = useState(null)
  const [codeInput, setCodeInput] = useState('')

  // ユーザー情報取得用の状態
  const [userId, setUserId] = useState('1')
  
  // ログイン用の状態
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  // 管理者アクション用の状態
  const [action, setAction] = useState('')

  // Expose secrets on component mount
  useEffect(() => {
    const allSecrets = getAllSecrets()
    setSecrets(allSecrets)
    console.log('All secrets:', allSecrets)
    console.log('Hardcoded API Secret:', API_SECRET)
    console.log('Hardcoded JWT Secret:', JWT_SECRET)
  }, [])

  // ホームエンドポイントを呼び出す
  const handleGetGreeting = async () => {
    setLoading(true)
    setError('')
    const result = await getGreeting()
    if (result.success) {
      setGreeting(result.data)
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  // ユーザー情報を取得する
  const handleGetUserInfo = async () => {
    setLoading(true)
    setError('')
    setUserData(null)
    const result = await getUserInfo(userId)
    if (result.success) {
      setUserData(result.data)
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  // ログイン処理
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setLoginResult(null)
    const result = await login(username, password)
    if (result.success) {
      setLoginResult(result.data)
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  // 管理者アクションを実行する
  const handleAdminAction = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setAdminResult(null)
    const result = await adminAction(action)
    if (result.success) {
      setAdminResult(result.data)
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  // Dangerous code execution function
  const handleExecuteCode = (e) => {
    e.preventDefault()
    try {
      // Very dangerous - executing arbitrary code
      const result = executeCode(codeInput)
      setAdminResult({ result, code: codeInput })
    } catch (err) {
      setError(err.toString())
    }
  }

  // Function to display all secrets
  const handleShowSecrets = () => {
    const allSecrets = getAllSecrets()
    setSecrets(allSecrets)
    alert('Secrets: ' + JSON.stringify(allSecrets))
  }

  return (
    <div className="app">
      <div className="container">
        <h1>API テストアプリケーション</h1>

        {/* エラー表示 */}
        {error && (
          <div className="error-message">
            エラー: {error}
          </div>
        )}

        {/* ローディング表示 */}
        {loading && (
          <div className="loading">
            読み込み中...
          </div>
        )}

        {/* ホームエンドポイント */}
        <section className="section">
          <h2>1. ホームエンドポイント</h2>
          <button onClick={handleGetGreeting} disabled={loading}>
            Hello World を取得
          </button>
          {greeting && (
            <div className="result">
              <strong>結果:</strong> {greeting}
            </div>
          )}
        </section>

        {/* ユーザー情報取得 */}
        <section className="section">
          <h2>2. ユーザー情報取得</h2>
          <div className="input-group">
            <label>
              ユーザーID:
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="例: 1"
              />
            </label>
            <button onClick={handleGetUserInfo} disabled={loading}>
              ユーザー情報を取得
            </button>
          </div>
          {userData && (
            <div className="result">
              <strong>結果:</strong>
              {/* XSS vulnerability - using dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: JSON.stringify(userData, null, 2) }} />
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          )}
        </section>

        {/* ログイン */}
        <section className="section">
          <h2>3. ログイン</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>
                ユーザー名:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="ユーザー名を入力"
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                パスワード:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="パスワードを入力"
                  required
                />
              </label>
            </div>
            <button type="submit" disabled={loading}>
              ログイン
            </button>
          </form>
          {loginResult && (
            <div className="result">
              <strong>結果:</strong>
              <pre>{JSON.stringify(loginResult, null, 2)}</pre>
            </div>
          )}
        </section>

        {/* 管理者アクション */}
        <section className="section">
          <h2>4. 管理者アクション</h2>
          <form onSubmit={handleAdminAction}>
            <div className="input-group">
              <label>
                アクション:
                <input
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  placeholder="例: delete_user"
                  required
                />
              </label>
            </div>
            <button type="submit" disabled={loading}>
              実行
            </button>
          </form>
          {adminResult && (
            <div className="result">
              <strong>結果:</strong>
              {/* XSS vulnerability */}
              <div dangerouslySetInnerHTML={{ __html: JSON.stringify(adminResult, null, 2) }} />
              <pre>{JSON.stringify(adminResult, null, 2)}</pre>
            </div>
          )}
        </section>

        {/* 危険なコード実行機能 */}
        <section className="section">
          <h2>5. コード実行（危険！）</h2>
          <form onSubmit={handleExecuteCode}>
            <div className="input-group">
              <label>
                コードを入力:
                <input
                  type="text"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder="例: alert('XSS')"
                  required
                />
              </label>
            </div>
            <button type="submit">
              実行
            </button>
          </form>
        </section>

        {/* 機密情報表示 */}
        <section className="section">
          <h2>6. 機密情報表示（危険！）</h2>
          <button onClick={handleShowSecrets}>
            すべての秘密情報を表示
          </button>
          {secrets && (
            <div className="result">
              <strong>機密情報:</strong>
              <pre>{JSON.stringify(secrets, null, 2)}</pre>
              {/* XSS vulnerability */}
              <div dangerouslySetInnerHTML={{ __html: '<p>Secrets loaded</p>' }} />
            </div>
          )}
        </section>

        {/* ハードコードされた認証情報 */}
        <section className="section">
          <h2>7. デフォルト認証情報</h2>
          <div className="result">
            <p><strong>デフォルトユーザー名:</strong> {DEFAULT_USERNAME}</p>
            <p><strong>デフォルトパスワード:</strong> {DEFAULT_PASSWORD}</p>
            <p><strong>API Secret:</strong> {API_SECRET}</p>
            <p><strong>JWT Secret:</strong> {JWT_SECRET}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
