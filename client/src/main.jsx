import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CodePage from '../pages/code'
import Verified from '../pages/verified'
import ProductDetails from '../pages/product'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path ="/" element = {<App/>} />
          <Route path="/customer" element={<CodePage/>} />
          <Route path="/verified" element={<Verified/>} />
          <Route path="/retailer" element={<ProductDetails/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
