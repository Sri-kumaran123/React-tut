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
      <div 
        className='flex h-[100vh] w-full justify-center items-center'
      >
      <Routes>
      <Route path="/" element={<Counter/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
