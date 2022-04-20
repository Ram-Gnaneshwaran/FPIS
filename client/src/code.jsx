import React from 'react'
import { Link } from 'react-router-dom'

export default function CodePage() {
  return (
      <>
        <div className='CodeHeading'>
            <h1>Enter the code</h1> 
        </div>
        <div className='barcode'>
        <input type="text" />
        <Link to="/verified">
        <button>Enter</button>
        </Link>
        </div>
      </>
  )
}