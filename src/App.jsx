import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './assets/components/NavBar/NavBar';
import ItemListConteiner from './assets/components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './assets/components/ItemDetailConteiner/ItemDetailConteiner';
import CartContainer from './assets/components/CartContainer/CartContainer';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (
        <BrowserRouter>

        <NavBar />

        <Routes >
                <Route path='/' element={ <ItemListConteiner /> } />
                <Route path='/detalle' element={<ItemDetailConteiner /> } />
                <Route path='/cart' element={ <CartContainer /> } />
                {/*
              <CartContainer />                                     */}
        </Routes>
    </BrowserRouter>
)
}

export default App

// function App() {


//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <ComponenteContainer />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

