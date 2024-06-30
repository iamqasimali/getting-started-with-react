import { useState } from 'react'

import Login from "./components/Login"
import './App.css'
import Signup from './components/Sign-up'
import Header from './components/layout/Header'
import Dashboard from './components/Dashboard'
import Index from './components/layout/Index'

function App() {
 const [login, setLogin] = useState(true)

  return (
    <> 
      {/* { login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} /> }  */}
      <div className='bg-white w-screen '>
        <Index />
      </div>
    </>
  )
}

export default App
