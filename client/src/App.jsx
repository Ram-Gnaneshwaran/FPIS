import { useState , useRef, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom"



const local_key = "todokey"
function App() {
  
  return (
    <>
    <div className="logo">
    <h1>Certify</h1>
    <div className= "customerBut">
      <Link to="/customer">
      <button > Customer </button>
      </Link>
     </div>
     <div className= "retailerBut">
       <Link to="/retailer">
       <button> Retailer </button>
       </Link>
     
     </div>
     </div>
    </>
  )
}

export default App