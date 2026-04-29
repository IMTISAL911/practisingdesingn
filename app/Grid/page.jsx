"use client";
import React from "react";




const Grid =() =>{
    return(
        <div className="flex flex-col justify-center items-center mt-20 w-1/2 border-1 border-gray-400 p-5 mx-auto mb-20">
        <div className="flex space-x-4 flex-wrap">

             {Array.from({length:9}).map((_,index)=>( 
                 <h1 key={index} className="bg-green-400">
                     box {index+1}
                 </h1>
             ))}    
            
        </div>

          <div className="flex space-x-4 flex-wrap mt-4">

             {Array.from({length:9}).map((_,index)=>( 
                 <h1 key={index} className="bg-green-400">
                     box {index+1}
                 </h1>
             ))}    
            
        </div>
         <div className="flex space-x-4 flex-wrap mt-4 ">

             {Array.from({length:9}).map((_,index)=>( 
                 <h1 key={index} className="bg-green-400">
                     box {index+1}
                 </h1>
             ))}    
            
        </div>
        </div>
    )
}

export default Grid;