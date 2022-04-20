import { Link } from "react-router-dom"
import CustomerButton from "./components/Button1"
import RetailerButton from "./components/Button2"


function App() {
  
  return (
    <>
    <div className="flex justify-center">
      <h1 className="text-white font-bold text-white bg-blue-700 p-10 m-10 shadow-lg border-2 ">
      Certify
      </h1>
    </div>

    <div className= "flex justify-center">
      <Link to="/customer">
        <CustomerButton></CustomerButton>
      </Link>
      <Link to="/retailer">
        <RetailerButton></RetailerButton>
      </Link>
     </div>
    </>
  )
}

export default App