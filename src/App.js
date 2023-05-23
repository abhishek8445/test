import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from './Header'
import Navv from './Navbar'

import Home from "./Home"
import Contact from "./Contact"
import About from './About'
import Services from './Services';


function App() {
  return (
   

    <>
<BrowserRouter>
<Header />
<Navv />

<Routes>
  <Route path='/home' element={ <Home/>}/>
  <Route path='/about' element={  <About/>}/>
  <Route path='/contact' element={ <Contact/>}/>
  <Route path='/services' element={ <Services/>}/>
</Routes>
</BrowserRouter>



    
     
      
    
  
     



    </>
  )
}

export default App


