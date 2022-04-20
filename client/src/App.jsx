import { Link } from "react-router-dom"


function App() {
  
  return (
    <>
    <div className="logo">
      <h1 className="text-3xl font-bold underline">
      Hello gnani!
      </h1>
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