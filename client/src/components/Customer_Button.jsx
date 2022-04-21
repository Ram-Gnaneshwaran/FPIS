import React from 'react'

export default function CustomerButton(props) {
  return (
    <div className="text-black bg-white m-10 py-10 px-5 shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500 text-center">
        <button className="font-bold text-3xl"> {props.title} </button>
    </div>
  )
}
