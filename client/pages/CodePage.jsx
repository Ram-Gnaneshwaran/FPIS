import React from 'react'
import { Link } from 'react-router-dom'
import AlertComponent from '../src/components/AlertComponent'
import Input_Bar from '../src/components/Input_Bar'
import Normal_Button from '../src/components/Normal_Button'
import { useState, useRef } from 'react'
import ProudctComponent from '../src/components/ProudctComponent'

export default function CodePage() {

  const [alert, setAlert] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const prodCode = useRef()

  function handleClick(e) {

    const p_code = prodCode.current.value

    if (p_code == '521340') {
      setAlert(false)
      setShowProduct(true)
    }
    else {
      setAlert(true)
      setShowProduct(false)
    }
  }



  return (
      <>
        {/* Page Contatiner */}
        <div className="flex flex-col mt-20 border-8 mx-10">

          {/* Heading Contatiner */}
          <div className=" flex justify-center text-white font-bold ">
              <h1 className=" p-10 m-10 bg-blue-700 shadow-lg border-2 text-7xl text-center">Enter the code|</h1> 
          </div>

          {/* Input  Contatiner */}
          <div className="flex justify-center mt-10 ">
            <div>
              <input className=" py-5 pl-10 mx-10 shadow-xl focus:ring-2 focus:ring-blue-700 focus:outline-none w-min leading-6 text-slate-900 placeholder-slate-400 rounded-md text-4xl border-2" type="text" placeholder="Product Code" ref={prodCode}/>
            </div>
          </div>

          {/* Button  Contatiner */}
          <div className="flex justify-evenly ">

            {/* Back Button */}
            <div>
              <Link to="/">
                <Normal_Button title={"Back"}></Normal_Button>
              </Link>
            </div>

            {/* Check   Button */}
            <div>
              <button 
              className="px-10 py-5 my-5 text-black bg-white font-bold shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500" 
              onClick={handleClick}
              >Check</button>
            </div>
              
              
            </div>
        </div>


        {/* Show   Alert */}
        {alert && 
        <div className="flex justify-center mx-10 mt-20">
          <AlertComponent title="No Product Found"></AlertComponent>
        </div> }

        {/* Show   Product */}
        {showProduct && 
        <div className="flex justify-center mx-10 mt-20">
          <Link to='/verified'>
              <ProudctComponent title="Product Found"></ProudctComponent>
          </Link>        
        </div> }


      </>
  )
}