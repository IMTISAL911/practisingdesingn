"use client";



import React from "react";



const Home = () =>{
  return(
    <div className="flex  flex-col justify-center items-center mt-20 border border-gray-400 p-5 mx-auto w-1/2 mb-20 ">
     
     {Array.from({length:20}).map((_,index)=>(
<h1 key={index} className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
     ))
       
       
     }



{/* 
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>

<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1>
<h1 className="font-bold text-red-500 text-xl">HELLO WORLD</h1> */}

    </div>

  )
}


export default Home;