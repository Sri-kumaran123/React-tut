import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import Counter from './pages/Counter';
import HandleApi from './pages/Apipage';
import Timer from './pages/Timer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div 
        className='flex p-6 justify-center items-center w-full h-[100vh]'
      >
      <Routes>
      <Route path="/" element={<Counter/>} />
      <Route path="/useeffect" element={<HandleApi/>} />
      <Route path="/useref" element={<Timer/>} />
      
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
