import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductDetails() {
  return (
      <>
      <h1 className="text-center text-5xl font-bold mt-10 ">Enter Product Details</h1>
      
        <form className="flex flex-col p-10 m-10 border-4">
        <div className="">
          Product Name
        <input className="" type="text" /> 
        </div>
         <div>
          Description
        <input type="text" /> 
        </div>
        <div>
        Code
        <input type="text" /> 
        </div>
        </form>
       
       <div className="flex justify-center">
       <Link to="/">
        <button className="text-black bg-white font-bold px-10 py-5 m-10 shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500">Home</button>
        </Link>
        <Link to="/">
        <button className="text-black bg-white font-bold px-10 py-5 m-10 shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500">Submit</button>
        </Link>
      
       </div>
      
      </>
    
  )
}