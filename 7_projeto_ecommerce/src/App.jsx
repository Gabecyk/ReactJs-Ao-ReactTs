import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react';

import Catalogo from './components/Catalogo';
import Cart from './components/Cart';
import ThankYouPage from './components/ThankYouPage';

function App() {

  const [cartItems, setCartItems] = useState([]);
  // Fazer localstorage depois

  const handleAddCart = (product, quantity) => {

    setCartItems((prevItems) => {

      // se não existir => adiciona o item
      // se existir => incremento a quantidade
      
    })

  }

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Catálogo</Link>
        <Link to='/cart'>Carrinho</Link>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Catalogo onAddToCart={handleAddCart} />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/thank-you' element={<ThankYouPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
