import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
    <div className='navBar'>
        <ul className='navegador'>
            <li>
                <a href=""><img className='logo' src="/src/assets/components/img/logo evaristo con contraste.webp" alt="logo" />
            </a>
            </li>
            <li>
                <a className='nav_link' href="">Hamburguesas</a>
            </li>
            <li>
                <a className='nav_link' href="">Pizzas</a>
                </li>
            <li>
                <a className='nav_link' href="">Empanadas</a>
                </li>
            <li>
                <a className='nav_link' href="">Tostados-Triples</a>
                </li>
            <li>
                <a className='nav_link' href="">Tartas</a>
                </li>
            <li>
                <a className='nav_link' href=""><CartWidget /></a>
                
            </li>
        </ul>
    </div>
    )
}
export default NavBar