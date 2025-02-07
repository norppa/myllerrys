import React, { useState } from 'react'
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
    <Myllerrys />
  </React.StrictMode>,
)

function Myllerrys() {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null)

  return (
    <div className='App'>
      <Navbar />
      <Banner />

      <Info />
      <Teachers selected={selectedTeacher} setSelected={setSelectedTeacher} />
      <Details />

      <Contact />
    </div>
  )
}
