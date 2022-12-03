import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({ componente }) => {
  // console.log(children)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="green" variant="dark">
    <Container className='navegador'>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='nav_link' href="#features">Hamburguesas</Nav.Link>
                    <Nav.Link href="#pricing">Pizzas</Nav.Link>
                    <Nav.Link href="#pricing">Empanadas</Nav.Link>
                    <Nav.Link href="#pricing">Tostados</Nav.Link>
                    <Nav.Link href="#pricing">Tartas</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
            </Nav>
    </Navbar.Collapse>
    <li>
                    <a className='nav_link' href=""><CartWidget /></a>
    </li>
        </Container>
    </Navbar>
      {/* {componente({})} */}
    </>
  )
}

export default NavBar
// import './NavBar.css'
// import '../CartWidget/CartWidget'
// import CartWidget from '../CartWidget/CartWidget'

// const NavBar = () => {
//     return (
//     <div className='navBar'>
//         <ul className='navegador'>
//             <li>
//                 <a href=""><img className='logo' src="/src/assets/components/img/logo evaristo con contraste.webp" alt="logo" />
//             </a>
//             </li>
//             <li>
//                 <a className='nav_link' href="">Hamburguesas</a>
//             </li>
//             <li>
//                 <a className='nav_link' href="">Pizzas</a>
//                 </li>
//             <li>
//                 <a className='nav_link' href="">Empanadas</a>
//                 </li>
//             <li>
//                 <a className='nav_link' href="">Tostados-Triples</a>
//                 </li>
//             <li>
//                 <a className='nav_link' href="">Tartas</a>
//                 </li>
//             <li>
//                 <a className='nav_link' href=""><CartWidget /></a>
//             </li>
//         </ul>
//     </div>
//     )
// }
// export default NavBar