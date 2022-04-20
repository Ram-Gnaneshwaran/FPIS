import React from 'react'
import { Link } from 'react-router-dom'

export default function Verified() {
  return (
      <>
      <h1>Verified</h1>
        <div className='Heading'>Heading</div>
        <div className='body'>Body</div>
        <div className='End'>End</div>
        <Link to="/">
        <button>Go Back</button>
        </Link>
      </>

  )
}