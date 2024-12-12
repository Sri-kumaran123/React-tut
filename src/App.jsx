import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import Counter from './pages/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Counter/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
