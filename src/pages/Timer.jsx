import { useEffect, useState, useRef } from "react"

export default function Timer(){
    const [time, setTime] = useState(0); 
    const timerRef = useRef(null); 
  
    // Start the timer
    const startTimer = () => {
      if (!timerRef.current) { 
        timerRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
    };
  
    // Pause the timer
    const pauseTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  
    // Reset the timer
    const resetTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = null; 
      setTime(0);
    };
  
    return (
      <div className="text-center">
        <h1 className="text-2xl">Simple Timer</h1>
        <h2 className="text-2xl m-2">{time}s</h2>
  
        <button onClick={startTimer}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        >Start</button>
        <button onClick={pauseTimer} 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        >Pause</button>
        <button onClick={resetTimer} 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        >Reset</button>
      </div>
    );
}