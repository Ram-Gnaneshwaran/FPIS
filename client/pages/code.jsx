import React from 'react'
import { Link } from 'react-router-dom'

export default function CodePage() {
  return (
      <>
        <div className="text-white font-bold text-white bg-blue-700 p-10 m-10 shadow-lg border-2">
            <h1 className="text-7xl text-center">Enter the code</h1> 
        </div>
        <div className="flex justify-center">
        <input class="focus:ring-2 focus:ring-blue-700 focus:outline-none w-min text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 shadow-xl mx-10 text-4xl border-2" type="text" placeholder="Product Code"/>
        <Link to="/verified">
        <button className="text-black bg-white font-bold px-10 py-5 m-10 shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500">Check</button>
        </Link>
        </div>
      </>
  )
}