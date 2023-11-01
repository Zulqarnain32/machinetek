import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Gallary from './Components/Gallary'
import Contact from './Components/Contact'
import Calientle from './Components/Calientle'
import("./App.css")
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/about" element = {<About/>} />
         <Route path = "/services" element = {<Services/>} />
         <Route path = "/gallary" element = {<Gallary/>} />
         <Route path = "/calientle" element = {<Calientle/>} />
         <Route path = "/contact" element = {<Contact/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
