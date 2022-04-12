import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Page2 from './page2'
import Page3 from "./page3"

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path ="/" element = {<App/>} />
          <Route path="/page2" element={<Page2/>} />
          <Route path="/page3" element={<Page3/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
