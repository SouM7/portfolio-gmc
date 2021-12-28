import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {contact} from './assets/data/contact'
import Header from './Components/Header'
import Main from './Components/Main'
import img from "./assets/data/avatar.jpg"
import Footer from './Components/Footer'



function App() {
  
  return (
    <div>

       <Header name={contact.name} job={contact.job}/>
       <Main image={img} alt={contact.avatar.alt}/>
       <Footer/>

   </div>
  )
}

export default App
