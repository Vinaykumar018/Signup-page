import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup>
    </Signup>
  </>
  )
}

export default App
