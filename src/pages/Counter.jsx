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
    const [valtest,setvaltest] = useState(inittest);
    const [val,setval] = useState(()=>{
        console.log("Initial");
        return 0;
    });

    function incrment(){
        setval(prevval=> prevval+1);
    }
    function decrment(){
        setval(prevval=> prevval-1);
    }
    return <>
       <div>
       <button
        onClick={incrment}
       >+</button>
        <p>
            {val}
        </p>
        <button
         onClick={decrment}
        >-</button>
       </div>
    </>
}