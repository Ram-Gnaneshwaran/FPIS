import React from 'react'
import { Link } from 'react-router-dom'
import Normal_Button from '../src/components/Normal_Button'
import Products_Bar from '../src/components/Products_Bar'



export default function ProductDetails() {
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
            <Products_Bar title="Product Name"></Products_Bar>
          </div>
          
          {/* Product Description */}
          <div className="flex justify-center">
          <Products_Bar title="Product Description"></Products_Bar>
          </div>

          {/* Product Code */}
          <div className="flex justify-center">
          <Products_Bar title="Product Code"></Products_Bar>
          </div>
        </div>

      </form>
       
       {/* Bottom Buttons */}
       <div className="flex justify-evenly">

        <Link to="/">
          <Normal_Button title="Home"></Normal_Button>
        </Link>

        <Link to="/">
          <Normal_Button title="Submit"></Normal_Button>
        </Link>
       </div>
      
      </>
    
  )
}