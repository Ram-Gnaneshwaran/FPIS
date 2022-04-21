import React from 'react'
import { Link } from 'react-router-dom'

export default function CodePage() {
  return (
      <>
        {/* Page Contatiner */}
        <div className="flex flex-col mt-20 border-8 mx-10">

          {/* Heading Contatiner */}
          <div className=" flex justify-center text-white font-bold ">
              <h1 className=" p-10 m-10 bg-blue-700 shadow-lg border-2 text-7xl text-center">Enter the code</h1> 
          </div>

          {/* Input  Contatiner */}
          <div className="flex justify-center mt-10 ">
            <div>
              <input class=" py-5 pl-10 mx-10 shadow-xl focus:ring-2 focus:ring-blue-700 focus:outline-none w-min leading-6 text-slate-900 placeholder-slate-400 rounded-md text-4xl border-2" type="text" placeholder="Product Code"/>
            </div>
          </div>

          {/* Button  Contatiner */}
          <div className="flex justify-center ">
              <Link to="/verified">
                <button className="px-10 py-5 my-5 text-black bg-white font-bold shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500">Check</button>
              </Link>
            </div>

        </div>

      </>
  )
}