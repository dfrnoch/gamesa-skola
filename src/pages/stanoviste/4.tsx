import { FLIGHT_SERVER_CSS_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";




function check(){

}


export default function Fourth() {

    return (
    <>
    <main className="w-screen h-screen  bg-gray-700">
        <div className="flex justify-center">
            <img src="" alt="logo" className="pl-[1rem] w-[10rem] h-[10rem] border-light-200 border-[5px]"/>
        </div>



        <div className="mt-[5rem] flex justify-center">
            <p className="text-[25px]">Tady bude <input type={"text"}/> tady pokračuje.</p>
        </div>
        <div>
            <button onClick={() => check()}>Button</button>
        </div>
    </main>
    
    </>
    );
  }