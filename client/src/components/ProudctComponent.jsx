import React from 'react'

export default function       ProudctComponent(props) {
  return (
    <div className=" p-10 px-10 bg-green-700 bg-opacity-90 border-4 border-green-900 text-white text-4xl font-bold hover:rounded-3xl hover:bg-blue-700 hover:border-yellow-400 transition-all duration-500">
        {props.title}
    </div>
  )
}
