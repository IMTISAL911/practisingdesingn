"use client";
import React from "react";




const Grid =() =>{
    return(
        <div className="flex flex-col justify-center items-center mt-20 w-1/2 border-1 border-gray-400 p-5 mx-auto mb-20">
        <div className="flex space-x-4 flex-wrap">
            <h1 className="bg-green-400">box1</h1>
            <h1>box2</h1>
            <h1>box3</h1>
            <h1>box4</h1>
            <h1>box5</h1>
            <h1>box6</h1>
            <h1>box7</h1>
            <h1>box8</h1>
            <h1>box9</h1>
        </div>

         <div className="flex space-x-4 flex-wrap mt-4">
            <h1 className="bg-green-400">box1</h1>
            <h1>box2</h1>
            <h1>box3</h1>
            <h1>box4</h1>
            <h1>box5</h1>
            <h1>box6</h1>
            <h1>box7</h1>
            <h1>box8</h1>
            <h1>box9</h1>
        </div>
         <div className="flex space-x-4 flex-wrap mt-4 ">
            <h1 className="bg-green-400">box1</h1>
            <h1>box2</h1>
            <h1>box3</h1>
            <h1>box4</h1>
            <h1>box5</h1>
            <h1>box6</h1>
            <h1>box7</h1>
            <h1>box8</h1>
            <h1>box9</h1>
        </div>
        </div>
    )
}

export default Grid;