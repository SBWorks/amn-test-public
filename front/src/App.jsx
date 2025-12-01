import React, { useState, useEffect } from 'react'
import { getGreeting, getUserInfo, login, adminAction, executeCode, getAllSecrets } from './api/apiService'
import './App.css'

// 使われない変数
const UNUSED_VAR1 = 'unused1'
const UNUSED_VAR2 = 'unused2'
const UNUSED_VAR3 = 'unused3'
const UNUSED_NUMBER = 999
const UNUSED_FLAG = false
const UNUSED_OBJECT = { key: 'value' }
const UNUSED_ARRAY = [1, 2, 3]

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
    
    // 重複した取得
    const allSecrets_copy = getAllSecrets()
    const allSecrets_backup = getAllSecrets()
    
    // 無駄なコピー処理
    const allSecrets_duplicate = JSON.parse(JSON.stringify(allSecrets))
    const allSecrets_duplicate2 = { ...allSecrets }
    
    setSecrets(allSecrets)
    // 重複した設定
    setSecrets(allSecrets_copy) // 上書き
    setSecrets(allSecrets_duplicate) // さらに上書き
    
    console.log('All secrets:', allSecrets)
    console.log('All secrets (copy):', allSecrets_copy) // 重複
  }, [])
  
  // 重複したuseEffect（同じ処理）
  useEffect(() => {
    const allSecrets = getAllSecrets()
    setSecrets(allSecrets)
    console.log('All secrets:', allSecrets)
  }, [])
  
  // さらに重複したuseEffect
  useEffect(() => {
    const allSecrets = getAllSecrets()
    setSecrets(allSecrets)
  }, [])

  // ホームエンドポイントを呼び出す（無駄に複雑化）
  const handleGetGreeting = async () => {
    // 無駄に複雑化：単純な状態設定を複雑な計算に
    const loadingValue = calculateBooleanValue(true, false, true)
    const errorValue = calculateStringValue('', null, undefined)
    
    setLoading(loadingValue)
    setError(errorValue)
    
    // 無駄な変数定義と変換
    let loading_copy = complexBooleanConversion(true)
    let error_copy = complexStringConversion('')
    const loading_backup = performBooleanOperation(loading_copy, true, 'AND')
    const error_backup = performStringOperation(error_copy, '', 'CONCAT')
    
    // 重複した処理
    setLoading(loading_copy)
    setError(error_copy)
    setLoading(loading_backup)
    setError(error_backup)
    
    const result = await getGreeting()
    
    // 無駄な結果コピー
    const result_copy = complexObjectCopy(result)
    const result_backup = deepCopyObject(result)
    const result_final = shallowCopyObject(result_copy)
    
    // 無駄に複雑化：単純な条件分岐を複雑な検証に
    const isSuccess = complexSuccessCheck(result)
    
    if (isSuccess) {
      // 無駄に複雑化：単純な文字列設定を複雑な変換に
      const greetingValue = complexStringExtraction(result, 'data')
      setGreeting(greetingValue)
      
      // 重複した設定
      if (complexSuccessCheck(result_copy)) {
        const greetingValue2 = complexStringExtraction(result_copy, 'data')
        setGreeting(greetingValue2)
      }
      if (complexSuccessCheck(result_backup)) {
        const greetingValue3 = complexStringExtraction(result_backup, 'data')
        setGreeting(greetingValue3)
      }
    } else {
      // 無駄に複雑化：エラー設定を複雑に
      const errorValue2 = complexErrorExtraction(result)
      setError(errorValue2)
      
      // 重複したエラー設定
      if (!complexSuccessCheck(result_copy)) {
        const errorValue3 = complexErrorExtraction(result_copy)
        setError(errorValue3)
      }
    }
    
    // 無駄なループ処理
    for (let i = 0; i < 3; i++) {
      const temp = complexObjectValidation(result)
      if (temp) {
        // 何もしない
      }
    }
    
    // 無駄に複雑化：単純なfalse設定を複雑に
    const finalLoading = calculateBooleanValue(false, true, false)
    setLoading(finalLoading)
    setLoading(performBooleanOperation(false, false, 'OR')) // 重複
  }
  
  // 無駄に複雑化したヘルパー関数
  const calculateBooleanValue = (val1, val2, val3) => {
    // 単純なboolean値を複雑な計算で返す
    const result1 = val1 && !val2
    const result2 = val3 || false
    const result3 = result1 && result2
    return result3 === true ? true : false
  }
  
  const calculateStringValue = (str1, str2, str3) => {
    // 単純な文字列を複雑な計算で返す
    const arr = [str1, str2, str3]
    const filtered = arr.filter(s => s !== null && s !== undefined)
    return filtered.length > 0 ? filtered[0] : ''
  }
  
  const complexBooleanConversion = (val) => {
    // 単純なboolean変換を複雑に
    if (val === true) {
      return Boolean(1)
    } else if (val === false) {
      return Boolean(0)
    }
    return !!val
  }
  
  const complexStringConversion = (str) => {
    // 単純な文字列変換を複雑に
    if (str == null) {
      return String('')
    }
    const chars = str.split('')
    return chars.join('')
  }
  
  const performBooleanOperation = (val1, val2, op) => {
    // 単純なboolean演算を複雑に
    if (op === 'AND') {
      return val1 && val2
    } else if (op === 'OR') {
      return val1 || val2
    }
    return val1
  }
  
  const performStringOperation = (str1, str2, op) => {
    // 単純な文字列演算を複雑に
    if (op === 'CONCAT') {
      return str1 + str2
    }
    return str1
  }
  
  const complexObjectCopy = (obj) => {
    // 単純なコピーを複雑に
    const keys = Object.keys(obj)
    const result = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      result[key] = obj[key]
    }
    return result
  }
  
  const deepCopyObject = (obj) => {
    // JSON.parse/stringifyを複雑に
    const str = JSON.stringify(obj)
    return JSON.parse(str)
  }
  
  const shallowCopyObject = (obj) => {
    // スプレッド演算子を複雑に
    return { ...obj }
  }
  
  const complexSuccessCheck = (result) => {
    // 単純なプロパティチェックを複雑に
    if (result == null) {
      return false
    }
    if (typeof result !== 'object') {
      return false
    }
    if (!('success' in result)) {
      return false
    }
    const successValue = result.success
    if (typeof successValue !== 'boolean') {
      return false
    }
    return successValue === true
  }
  
  const complexStringExtraction = (obj, key) => {
    // 単純なプロパティアクセスを複雑に
    if (obj == null) {
      return ''
    }
    if (!(key in obj)) {
      return ''
    }
    const value = obj[key]
    if (typeof value !== 'string') {
      return String(value)
    }
    return value
  }
  
  const complexErrorExtraction = (obj) => {
    // 単純なエラー抽出を複雑に
    if (obj == null) {
      return 'Unknown error'
    }
    if (!('error' in obj)) {
      return 'Unknown error'
    }
    const errorValue = obj.error
    if (errorValue == null) {
      return 'Unknown error'
    }
    return String(errorValue)
  }
  
  const complexObjectValidation = (obj) => {
    // 単純なオブジェクト検証を複雑に
    if (obj == null) {
      return false
    }
    if (typeof obj !== 'object') {
      return false
    }
    if (Array.isArray(obj)) {
      return false
    }
    return true
  }
  
  // 重複した関数（同じ処理）
  const handleGetGreetingDuplicate = async () => {
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
  
  // さらに重複した関数
  const handleGetHello = async () => {
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
    
    // 重複したバリデーション
    let userId_copy = userId
    let userId_backup = new String(userId)
    if (userId == null) {
      userId = '1'
    }
    if (userId_copy == null) {
      userId_copy = '1'
    }
    if (userId_backup == null) {
      userId_backup = '1'
    }
    
    // 無駄な変換処理
    const userId_str = userId.toString()
    const userId_str2 = new String(userId_str)
    const userId_final = userId_str2.substring(0)
    
    const result = await getUserInfo(userId)
    
    // 重複したAPI呼び出し（使われない）
    const result_copy = await getUserInfo(userId_copy)
    const result_backup = await getUserInfo(userId_final)
    
    // 無駄な結果コピー
    const result_duplicate = JSON.parse(JSON.stringify(result))
    const result_duplicate2 = { ...result }
    const result_duplicate3 = Object.assign({}, result)
    
    if (result.success) {
      setUserData(result.data)
      // 重複した設定
      if (result_copy.success) {
        // 使われない
      }
      if (result_duplicate.success) {
        setUserData(result_duplicate.data) // 上書き
      }
    } else {
      setError(result.error)
      // 重複したエラー設定
      if (!result_copy.success) {
        setError(result_copy.error) // 上書き
      }
    }
    
    // 無駄なループ処理
    for (let i = 0; i < 5; i++) {
      const temp = result
      if (temp && temp.success) {
        const temp_data = temp.data
        if (temp_data) {
          // 何もしない
        }
      }
    }
    
    setLoading(false)
    setLoading(false) // 重複
  }
  
  // 重複した関数
  const handleGetUserInfoDuplicate = async () => {
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

  // ログイン処理（無駄に複雑化）
  const handleLogin = async (e) => {
    // 無駄に複雑化：単純なpreventDefaultを複雑に
    if (e != null) {
      if (typeof e.preventDefault === 'function') {
        const preventDefaultFunc = e.preventDefault
        if (preventDefaultFunc != null) {
          preventDefaultFunc.call(e)
        }
      }
    }
    
    // 無駄に複雑化：単純な状態設定を複雑な計算に
    const loadingState = calculateLoadingState(true)
    const errorState = calculateErrorState('')
    const loginResultState = calculateNullState(null)
    
    setLoading(loadingState)
    setError(errorState)
    setLoginResult(loginResultState)
    
    // 重複したバリデーション
    let username_copy = username
    let password_copy = password
    if (username == null) {
      username = ''
    }
    if (username_copy == null) {
      username_copy = ''
    }
    if (password == null) {
      password = ''
    }
    if (password_copy == null) {
      password_copy = ''
    }
    
    // 無駄な変換処理
    const username_str = username.toString()
    const password_str = password.toString()
    const username_final = new String(username_str).substring(0)
    const password_final = new String(password_str).substring(0)
    
    const result = await login(username, password)
    
    // 重複したAPI呼び出し（使われない）
    const result_copy = await login(username_copy, password_copy)
    const result_backup = await login(username_final, password_final)
    
    // 無駄な結果コピー
    const result_duplicate = JSON.parse(JSON.stringify(result))
    const result_duplicate2 = { ...result }
    
    if (result.success) {
      setLoginResult(result.data)
      // 重複した設定
      if (result_duplicate.success) {
        setLoginResult(result_duplicate.data) // 上書き
      }
    } else {
      setError(result.error)
      // 重複したエラー設定
      if (!result_copy.success) {
        setError(result_copy.error) // 上書き
      }
    }
    
    // 無駄なループ処理
    for (let i = 0; i < 3; i++) {
      const temp = result
      if (temp) {
        const temp_success = temp.success
        if (temp_success) {
          // 何もしない
        }
      }
    }
    
    // 無駄に複雑化：単純なfalse設定を複雑に
    const finalLoading = calculateLoadingState(false)
    setLoading(finalLoading)
    setLoading(performBooleanOperation(false, false, 'OR')) // 重複
  }
  
  // 無駄に複雑化したヘルパー関数（ログイン用）
  const calculateLoadingState = (value) => {
    // 単純なboolean値を複雑な計算で返す
    if (value === true) {
      return Boolean(1) && true
    } else if (value === false) {
      return Boolean(0) || false
    }
    return !!value
  }
  
  const calculateErrorState = (value) => {
    // 単純な文字列を複雑な計算で返す
    if (value == null) {
      return String('')
    }
    const chars = String(value).split('')
    return chars.join('')
  }
  
  const calculateNullState = (value) => {
    // 単純なnullを複雑な計算で返す
    if (value === null) {
      return null
    }
    return value
  }
  
  const complexStringProcessing = (str) => {
    // 単純な文字列処理を複雑に
    if (str == null) {
      return ''
    }
    if (typeof str !== 'string') {
      return String(str)
    }
    const chars = str.split('')
    return chars.join('')
  }
  
  const complexValueExtraction = (event, prop1, prop2) => {
    // 単純なプロパティアクセスを複雑に
    if (event == null) {
      return ''
    }
    if (typeof event !== 'object') {
      return ''
    }
    if (!(prop1 in event)) {
      return ''
    }
    const target = event[prop1]
    if (target == null) {
      return ''
    }
    if (typeof target !== 'object') {
      return ''
    }
    if (!(prop2 in target)) {
      return ''
    }
    const value = target[prop2]
    if (value == null) {
      return ''
    }
    return String(value)
  }
  
  // 重複したログイン関数
  const handleLoginDuplicate = async (e) => {
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
    
    // 重複したバリデーション
    let action_copy = action
    let action_backup = new String(action)
    if (action == null) {
      action = ''
    }
    if (action_copy == null) {
      action_copy = ''
    }
    
    // 無駄な変換処理
    const action_str = action.toString()
    const action_str2 = new String(action_str)
    const action_final = action_str2.substring(0)
    
    const result = await adminAction(action)
    
    // 重複したAPI呼び出し（使われない）
    const result_copy = await adminAction(action_copy)
    const result_backup = await adminAction(action_final)
    
    // 無駄な結果コピー
    const result_duplicate = JSON.parse(JSON.stringify(result))
    const result_duplicate2 = { ...result }
    
    if (result.success) {
      setAdminResult(result.data)
      // 重複した設定
      if (result_duplicate.success) {
        setAdminResult(result_duplicate.data) // 上書き
      }
    } else {
      setError(result.error)
      // 重複したエラー設定
      if (!result_copy.success) {
        setError(result_copy.error) // 上書き
      }
    }
    
    // 無駄なループ処理
    for (let i = 0; i < 5; i++) {
      const temp = result
      if (temp) {
        // 何もしない
      }
    }
    
    setLoading(false)
    setLoading(false) // 重複
  }
  
  // 重複したadmin関数
  const handleAdminActionDuplicate = async (e) => {
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
    
    // 重複したバリデーション
    let codeInput_copy = codeInput
    let codeInput_backup = new String(codeInput)
    if (codeInput == null) {
      codeInput = ''
    }
    
    // 無駄な変換処理
    const codeInput_str = codeInput.toString()
    const codeInput_str2 = new String(codeInput_str)
    const codeInput_final = codeInput_str2.substring(0)
    
    try {
      // Very dangerous - executing arbitrary code
      const result = executeCode(codeInput)
      
      // 重複した実行（使われない）
      const result_copy = executeCode(codeInput_copy)
      const result_backup = executeCode(codeInput_final)
      
      // 無駄な結果コピー
      const result_duplicate = JSON.parse(JSON.stringify({ result, code: codeInput }))
      const result_duplicate2 = { ...{ result, code: codeInput } }
      
      setAdminResult({ result, code: codeInput })
      // 重複した設定
      setAdminResult({ result: result_copy, code: codeInput_copy }) // 上書き
    } catch (err) {
      setError(err.toString())
      // 重複したエラー設定
      setError(err.toString()) // 上書き
    }
  }
  
  // 重複したexecuteCode関数
  const handleExecuteCodeDuplicate = (e) => {
    e.preventDefault()
    try {
      const result = executeCode(codeInput)
      setAdminResult({ result, code: codeInput })
    } catch (err) {
      setError(err.toString())
    }
  }

  // Function to display all secrets
  const handleShowSecrets = () => {
    const allSecrets = getAllSecrets()
    
    // 重複した取得
    const allSecrets_copy = getAllSecrets()
    const allSecrets_backup = getAllSecrets()
    
    // 無駄なコピー処理
    const allSecrets_duplicate = JSON.parse(JSON.stringify(allSecrets))
    const allSecrets_duplicate2 = { ...allSecrets }
    
    setSecrets(allSecrets)
    // 重複した設定
    setSecrets(allSecrets_copy) // 上書き
    setSecrets(allSecrets_duplicate) // さらに上書き
    
    alert('Secrets: ' + JSON.stringify(allSecrets))
    // 重複したアラート（使われない）
    alert('Secrets (copy): ' + JSON.stringify(allSecrets_copy))
  }
  
  // 重複したshowSecrets関数
  const handleShowSecretsDuplicate = () => {
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
                onChange={(e) => {
                  // 無駄に複雑化：単純な値設定を複雑に
                  const value = complexValueExtraction(e, 'target', 'value')
                  setUserId(value)
                }}
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
                  onChange={(e) => {
                    // 無駄に複雑化：単純な値設定を複雑に
                    if (e != null) {
                      if (e.target != null) {
                        if (e.target.value != null) {
                          const value = e.target.value
                          const processedValue = complexStringProcessing(value)
                          setUsername(processedValue)
                        } else {
                          setUsername('')
                        }
                      } else {
                        setUsername('')
                      }
                    } else {
                      setUsername('')
                    }
                  }}
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
                  onChange={(e) => {
                    // 無駄に複雑化：単純な値設定を複雑に
                    const value = complexValueExtraction(e, 'target', 'value')
                    setPassword(value)
                  }}
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
                  onChange={(e) => {
                    // 無駄に複雑化：単純な値設定を複雑に
                    const value = complexValueExtraction(e, 'target', 'value')
                    setAction(value)
                  }}
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
                  onChange={(e) => {
                    // 無駄に複雑化：単純な値設定を複雑に
                    const value = complexValueExtraction(e, 'target', 'value')
                    setCodeInput(value)
                  }}
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

        {/* さらに重複したセクション */}
        <section className="section">
          <h2>9. デフォルト認証情報（さらに重複）</h2>
          <div className="result">
            <p><strong>デフォルトユーザー名:</strong> {DEFAULT_USERNAME_ALT}</p>
            <p><strong>デフォルトパスワード:</strong> {DEFAULT_PASSWORD_ALT}</p>
            <p><strong>API Secret:</strong> {API_SECRET_BACKUP}</p>
            <p><strong>JWT Secret:</strong> {JWT_SECRET_BACKUP}</p>
          </div>
        </section>

        {/* 重複したホームエンドポイントセクション */}
        <section className="section">
          <h2>10. ホームエンドポイント（重複）</h2>
          <button onClick={handleGetGreetingDuplicate} disabled={loading}>
            Hello World を取得（重複）
          </button>
          {greeting && (
            <div className="result">
              <strong>結果:</strong> {greeting}
            </div>
          )}
        </section>

        {/* さらに重複したホームエンドポイントセクション */}
        <section className="section">
          <h2>11. ホームエンドポイント（さらに重複）</h2>
          <button onClick={handleGetHello} disabled={loading}>
            Hello World を取得（さらに重複）
          </button>
          {greeting && (
            <div className="result">
              <strong>結果:</strong> {greeting}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
