import React from 'react'
import { Link } from 'react-router-dom'

export default function Verified() {
  return (
      <>
      <div className="flex flex-col justify-center p-20 m-20 border-8">
        <h1 className="font-bold text-5xl text-center ">Verified</h1>
        <div className="font-bold text-2xl">Product Name</div>
        <div className='text-xl'>Body</div>
        <div className="text-center">Product Code</div>
      </div>

      <Link to="/">
        <button className="text-black bg-white font-bold px-10 py-5 m-10 shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500">Home</button>
        </Link>

      </>

  )
}