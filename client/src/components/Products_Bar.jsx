import React from 'react'

export default function Products_Bar(props) {
  return (
    <input class=" py-5 pl-10 mx-10 mt-5 shadow-xl focus:ring-2 focus:ring-blue-700 focus:outline-none w-min leading-6 text-slate-900 placeholder-slate-400 rounded-md text-2xl border-2" type="text" placeholder={props.title}/>
  )
}
