import React from 'react'
import { Link } from 'react-router-dom'
import Input_Bar from '../src/components/Input_Bar'
import Normal_Button from '../src/components/Normal_Button'

export default function CodePage() {
  return (
      <>
        {/* Page Contatiner */}
        <div className="flex flex-col mt-20 border-8 mx-10">

          {/* Heading Contatiner */}
          <div className=" flex justify-center text-white font-bold ">
              <h1 className=" p-10 m-10 bg-blue-700 shadow-lg border-2 text-7xl text-center">Enter the code</h1> 
          </div>

          {/* Input  Contatiner */}
          <div className="flex justify-center mt-10 ">
            <div>
              <Input_Bar></Input_Bar>
            </div>
          </div>

          {/* Button  Contatiner */}
          <div className="flex justify-center ">
              <Link to="/verified">
                <Normal_Button title={"Check"}></Normal_Button>
              </Link>
            </div>

        </div>

      </>
  )
}