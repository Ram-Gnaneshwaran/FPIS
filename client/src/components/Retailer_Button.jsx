import React from 'react'

export default function RetailerButton(props) {
  return (
    <div className="text-white bg-black m-10 py-10 px-5 shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 transition-all duration-500 text-center">
        <button className="font-bold text-3xl "> {props.title}</button>
    </div>
  )
}