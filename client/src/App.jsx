import { Link } from "react-router-dom"
import CustomerButton from "./components/Customer_Button"
import RetailerButton from "./components/Retailer_Button"


function App() {
  
  return (
    <>
    {/* Page Contatiner */}
    <div className="flex-auto flex-col mt-20 ">

      {/* Logo Container */}
      <div className="flex justify-center">
        <h1 className="text-white font-bold bg-blue-700 p-10 m-10 shadow-lg border-2 text-8xl">
        Certify
        </h1>
      </div>

      {/* Buttons Container*/}
      <div className= "flex mt-20 ">

        {/* Left Contatiner */}
        <div className="flex-auto justify-center border-black border-r-2 ">
          <Link to="/customer">
            <CustomerButton title={"Customer"}></CustomerButton>
          </Link>
        </div>

        {/* Right Contatiner */}
        <div className="flex-auto border-black border-l-2">
          <Link to="/retailer">
            <RetailerButton title={"Retailer"}></RetailerButton>
          </Link>
        </div>
      </div>      
    </div>

    </>
  )
}

export default App