// "use client"
// import React from "react";


// const Practise =() =>{
//     return(
//         <div className="flex justify-center items-center mt-30 w-60 border-1 border-gray-400 p-5 mx-auto mb-20">

//             <div className="flex  h-70 border-1 border gray-400">
//                <div className="">
//                 <h1>Related searches</h1>
//                </div>
//             </div>
        
//         </div>
//     )
// }
//     export default Practise;
"use client";
import React from "react";

const Practise = () => {
  return (
    <div className="w-60 border border-gray-400 mx-auto mt-20 mb-20 rounded-lg overflow-hidden">

      {/* Heading */}
      <div className="p-4 border-b border-gray-300">
        <h1 className="font-semibold">
          Related Searches
        </h1>
      </div>

      {/* Portion 1 */}
      <div className="p-4 border-b border-gray-300">
        <p>React JS Tutorial</p>
      </div>

      {/* Portion 2 */}
      <div className="p-4 border-b border-gray-300">
        <p>Next JS Projects</p>
      </div>

      {/* Portion 3 */}
      <div className="p-4 border-b border-gray-300">
        <p>Tailwind CSS Guide</p>
      </div>

      {/* Portion 4 */}
      <div className="p-4">
        <p>Frontend Developer Roadmap</p>
      </div>

    </div>
  );
};

export default Practise;