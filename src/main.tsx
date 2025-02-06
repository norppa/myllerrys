import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Contact from './Contact'
import Info from './Info'

import './main.css'
import Teachers from './Teachers'
import Details from './Details'
import Banner from './Banner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='App'>

      <Navbar />

      <Banner />
      
      <Info />

      <Teachers />
      <Details />

      <Contact />
    </div>
  </React.StrictMode>,
)
