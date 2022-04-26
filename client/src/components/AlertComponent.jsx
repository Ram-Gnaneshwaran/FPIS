import React from 'react'

export default function AlertComponent(props) {
  return (
    <div className=" p-10 px-10 bg-red-700 bg-opacity-90 border-4 border-red-900 text-white text-4xl font-bold ">
        {props.title}
    </div>
  )
}
