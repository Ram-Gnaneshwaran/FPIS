import { Link } from "react-router-dom"
import CustomerButton from "./components/Customer_Button"
import RetailerButton from "./components/Retailer_Button"
// import Web3 from 'web3'
import { useEffect } from "react"

function App() {

  // const providerUrl = 'http://localhost:7545';


  // useEffect(() => {

  //   window.process = {
  //     ...window.process,
  //   };

  //   const web3 = new Web3(providerUrl)
  //   let provider = window.ethereum;

  //   if (typeof provider !== 'undefined') {
  //     //MetaMask is installed

  //     provider.request({method: 'eth_requestAccounts'}).then( accounts=> {
  //       console.log(accounts);
  //     } ).catch(err=>{
  //       console.log(err);
  //     });


  //   }

  // }, [])
  
  return (
    <>
    {/* Page Contatiner */}
    <div className="flex flex-col mt-20 ">

      {/* Logo Container */}
      <div className="flex justify-center">
        <h1 className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 p-10 m-10 shadow-lg border-2 text-8xl">
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