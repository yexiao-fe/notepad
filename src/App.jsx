import { useState } from 'react'
import Login from './views/login/index'
import Content from './views/content/index.jsx'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  console.log(isLogin)
  return (
    <>
      {!isLogin ? <Login setIsLogin={setIsLogin} /> : <Content />}
    </>
  )
}

export default App
