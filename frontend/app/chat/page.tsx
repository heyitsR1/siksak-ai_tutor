'use client'
import { useState } from "react";
import SendReqComponent from "./components/SendReqComponent";

const url = "http://localhost:8000/query"


export default function ChatPage (){ 
    const [res,setRes] = useState(null);
    async function submitHandler (e: React.FormEvent)   { 
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form); 
    const query = formData.get("query") || "hi"
    console.log (query);
    // <SendReqComponent query={query}/>


    const response = await fetch (url,{ 
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({query})
    })
    const data = await response.json()
    setRes(data.answer || data)    
}
    return ( 
        <div> 
            Chat Interace here. 
            <form onSubmit={submitHandler}> 
                <div className="flex gap-4 m-5 bg rounded-xl"> 
                    <input name = "query" placeholder="Text here" className=" border border-blue-400"/>
                    <button type='submit' className="text-blue-300"> Ask </button>
                </div>
            </form>
            <div id="Response_section" className="w-500 h-500 text-gray bg-white-200">
                {res}
            </div>
        </div>
    )
}