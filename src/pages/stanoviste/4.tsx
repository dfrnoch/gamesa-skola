import { FLIGHT_SERVER_CSS_MANIFEST } from "next/dist/shared/lib/constants";
import React, { useState } from "react";




function check(){

}


export default function Fourth() {
    const [message, setMessage] = useState('');
    const [update, setUpdate] = useState(message);
    
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
        setMessage(event.target.value);
    }

    const handleClick = () =>{
        if(message === "ahoj"){
            setUpdate("Ano");
        }else{
            setUpdate("ne")
        }
    }

    return (
    <>
    <main className="w-screen h-screen  bg-gray-700">
        <div className="flex justify-center">
            <img src="" alt="logo" className="pl-[1rem] w-[10rem] h-[10rem] border-light-200 border-[5px]"/>
        </div>



        <div className="mt-[5rem]">
            <p className="text-[25px] text-center">
                Tady bude 
                 <input type={"text"} onChange={handleChange}/>
                 tady pokračuje.</p>
            <p className="text-[25px] text-center">
                Text 
                 <input type={"text"} onChange={handleChange}/>
                 je zde.</p>
        </div>
        <div className="flex justify-center">
            <button onClick={handleClick} className="w-[8rem] h-[3rem] text-[1.5rem] bg-gray-200">Button</button>
            <h2>sfa: {update}</h2>
        </div>
    </main>
    
    </>
    );
  }