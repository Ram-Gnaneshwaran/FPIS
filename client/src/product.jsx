import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductDetails() {
  return (
      <>
      <h1>Enter Product Details</h1>
      <div className='Box'>
        <div>
          Product Name
        <input type="text" /> 
        </div>
         <div>
        Description
        <input type="text" /> 
        </div>
        <div>
        Code
        <input type="text" /> 
        </div>
       
      </div>
      <Link to="/">
        <button>Go Back</button>
        </Link>
        <Link to="/">
        <button>Submit</button>
        </Link>
      
      </>
    
  )
}