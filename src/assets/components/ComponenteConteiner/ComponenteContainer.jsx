import ItemListConteiner from "../ItemListConteiner/ItemListConteiner"
import NavBar from "../NavBar/NavBar"
import { Titulo } from "../Titulo/Titulo"

function ComponenteContainer () {
    let tituloApp = 'Evaristo'
    
        return (

        <>
        <Titulo titulo={tituloApp} subTitulo={'Almacen de Comidas'} />
        <NavBar />
        <ItemListConteiner saludo={'Saludos'} />
        </>
        )
    }
    

export default ComponenteContainer

