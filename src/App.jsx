import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListConteiner from './assets/components/ItemListConteiner/ItemListConteiner'
import NavBar from './assets/components/NavBar/NavBar';


function App() {
  

  return (
    <>
    <NavBar />
    <ItemListConteiner saludo={'Helou!'} />
    
    </>
  )
}

export default App

