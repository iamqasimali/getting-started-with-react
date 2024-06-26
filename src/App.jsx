import { useState } from 'react'

import Login from "./components/Login"
import './App.css'
import Signup from './components/Sign-up'

function App() {
 const [login, setLogin] = useState(true)

  return (
    <> 
      { login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} /> } 
    </>
  )
}

export default App
