import React from 'react'
import { Link } from 'react-router-dom'
import AlertComponent from '../src/components/AlertComponent'
import Normal_Button from '../src/components/Normal_Button'

export default function Verified() {


  return (
      <>
      {/* Page Contatiner */}
      <div className="flex justify-evenly p-20 mt-20 mx-10 border-8 bg-gradient-to-r from-green-900 to-green-500">

        {/* Left Contatiner */}
        <div className="flex flex-col pr-5 text-white">
          {/* Product Name */}
          <div className="font-bold text-2xl">Name : iPhone</div>

          {/* Product Description */}
          <div className='text-2xl'>Description: Great Smartphone</div>

          {/* Product Code */}
          <div className="text-2xl">Code: 521340</div>
          
        </div>    

        {/* Right Contatiner */}
        <div className="flex">
          <h1 className="font-bold text-5xl text-green-200">Verified</h1>
        </div>
    
      </div>
      
      {/* Home Button Contatiner */}
      <div className="flex justify-center">
        <Link to="/">
          <Normal_Button title="Home"></Normal_Button>
        </Link>
      </div>


      </>

  )
}