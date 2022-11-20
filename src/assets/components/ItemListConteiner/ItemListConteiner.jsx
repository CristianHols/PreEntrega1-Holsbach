import { Titulo } from '../Titulo/Titulo'
import './ItemListContainer.css'

const ItemListConteiner = ({ saludo }) => {
    return (
        
        <section className="section">
            <Titulo titulo= '' subTitulo='ItemListContainer'/>
            <br />
            <Titulo titulo= '' subTitulo='Saludos!'/>
            </section>
    )
}
export default ItemListConteiner
