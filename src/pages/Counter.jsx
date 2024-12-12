import { useState } from "react"

function inittest(){
    console.log("Rerendered");
    return 0;
}


export default function Counter(){
    /* const [valtest,setvaltest] = useState(()=>{
        console.log("Initial");
        return 0;
    }) */


    //const [valtest,setvaltest] = useState(inittest);
    const [val,setval] = useState(()=>{
        console.log("Initial");
        return 0;
    });

    function incrmentest(){
        setval(val+1);
        setval(val+1);
    }
    function incrment(){
        setval(prev=>prev+1);
        //setval(prev=>prev+1);
    }
    function decrment(){
        setval(prevval=> prevval-1);
    }
    return <div className="flex flex-row justify-center space-x-4 p-[10%] bg-gray-100  rounded-lg shadow-md ">
  <button 
    onClick={incrment} 
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
  >
    +
  </button>

  <p className="text-4xl font-semibold text-gray-700">
    {val}
  </p>

  <button 
    onClick={decrment} 
    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
  >
    -
  </button>
</div>

}