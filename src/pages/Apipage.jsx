import { useEffect, useState } from "react"

export default function HandleApi(){
    const [type,settype] = useState('photos');
    const [items,setitams] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setitams(json))
    },[type]);

    
    return <div className=" rounded-md p-4 w-1/2 h-full overflow-scroll relative">
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 sticky top-0" role="alert">
        <p class="font-bold">{type}</p>
        
        </div>
        <div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={
                ()=>settype("photos")
            }
            >photos</button>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={
                ()=>settype("comments")
            }
            >comments</button>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={
                ()=>settype("posts")
            }
            >post</button>
        </div>
        <div>
            {items.map(x=>{
                console.log(x);
                return <p className="p-2 my-4 rounded-sm bg-gray-200">
                    {JSON.stringify(x)}
                </p>
            })}
        </div>
    </div>
}