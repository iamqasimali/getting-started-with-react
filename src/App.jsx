// import { useState } from 'react'
import Index from './components/layout/Index'

function App() {
//  const [login, setLogin] = useState(true)

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
