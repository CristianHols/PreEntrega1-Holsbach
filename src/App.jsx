import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ItemListConteiner from './assets/components/ItemListConteiner/ItemListConteiner'
import NavBar from './assets/components/NavBar/NavBar';
import Logo from './assets/components/Logo/Logo'
import { Titulo } from './assets/components/Titulo/Titulo';


function App() {
let tituloApp = 'Evaristo'

  return (
    <>
    <Titulo titulo={tituloApp} subTitulo={'Almacen de Comidas'} />
    <NavBar />
    <ItemListConteiner saludo={'Helou!'} />
    
    </>
  )
}

export default App

