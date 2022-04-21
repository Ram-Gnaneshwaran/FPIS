import React from 'react'

export default function Normal_Button(props) {
  return (
    <button className="px-10 py-5 my-5 text-black bg-white font-bold shadow-lg border-2 hover:rounded-3xl hover:bg-blue-700 hover:text-white transition-all duration-500">{props.title}</button>
  )
}
