import React from 'react'
import { Link } from 'react-router-dom'
import Normal_Button from '../src/components/Normal_Button'
import Products_Bar from '../src/components/Products_Bar'
import { useState, useRef } from 'react'
import AlertComponent from '../src/components/AlertComponent'



export default function ProductDetails() {
  const product_name = useRef()
  const product_desc = useRef()
  const product_code = useRef()

  const [alert, setAlert] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  function handleClick(e) {

    const rp_name = product_name.current.value
    const rp_desc = product_desc.current.value
    const rp_code = product_code.current.value


    if ( rp_name && rp_desc && rp_code) {
      setAlert(false)
      setShowSuccess(true)
      product_name.current.value = null
      product_desc.current.value = null
      product_code.current.value = null
    }
    else {
      setAlert(true)
      setShowSuccess(false)
    }
  }
  
  return (
      <>
      {/* Box Contatiner */}
      <form className="flex flex-col p-10 m-10 border-8 ">

        {/* Heading Contatiner */}
        <div className="flex justify-center bg-black">
          <h1 className="text-center text-5xl font-bold m-10 text-white ">Enter Product Details</h1>
        </div>

        {/* Input  Container */}
        <div className="flex flex-col">

          {/* Product Name */}
          <div className="flex justify-center">
            <input 
            className=" py-5 pl-10 mx-10 mt-5 shadow-xl focus:ring-2 focus:ring-blue-700 focus:outline-none w-min leading-6 text-slate-900 placeholder-slate-400 rounded-md text-2xl border-2" 
            type="text" 
            placeholder="Product Name"
            ref={product_name}
            />
          </div>
          
          {/* Product Description */}
          <div className="flex justify-center">
          <input 
            className=" py-5 pl-10 mx-10 mt-5 shadow-xl focus:ring-2 focus:ring-blue-700 focus:outline-none w-min leading-6 text-slate-900 placeholder-slate-400 rounded-md text-2xl border-2" 
            type="text" 
            placeholder="Product Description"
            ref={product_desc}
            />
          </div>

          {/* Product Code */}
          <div className="flex justify-center">
          <input 
            className=" py-5 pl-10 mx-10 mt-5 shadow-xl focus:ring-2 focus:ring-blue-700 focus:outline-none w-min leading-6 text-slate-900 placeholder-slate-400 rounded-md text-2xl border-2" 
            type="text" 
            placeholder="Product Code"
            ref={product_code}
            />
          </div>
        </div>

      </form>
       
       {/* Bottom Buttons */}
       <div className="flex justify-evenly">

        <Link to="/">
          <Normal_Button title="Home"></Normal_Button>
        </Link>

        <button 
        className="px-10 py-5 my-5 text-black bg-white font-bold shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500" 
        onClick={handleClick}
        >Submit</button>
       </div>

       {/* Show   Alert */}
       {alert && 
        <div className="flex justify-center mx-10 mt-20">
          <AlertComponent title="Please Fill the Details"></AlertComponent>
        </div> }

      {/* Show   Success */}
      {showSuccess && 
        <div className="flex justify-center mx-10 mt-20">
          <div className=" p-10 px-10 bg-green-700 bg-opacity-90 border-4 border-green-900 text-white text-4xl font-bold ">
            Successfully Added Product!
          </div>
        </div> }

        





       


      
      </>
    
  )
}