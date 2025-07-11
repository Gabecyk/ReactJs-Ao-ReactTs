import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react';

import Catalogo from './components/Catalogo';
import Cart from './components/Cart';
import ThankYouPage from './components/ThankYouPage';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [cartItems, setCartItems] = useState([]);
  // Fazer localstorage depois

  const handleAddCart = (product, quantity) => {

    setCartItems((prevItems) => {

      // se não existir => adiciona o item
      // se existir => incremento a quantidade

      const itemExists = prevItems.find((item) => item.id === product.id)

      if (itemExists) {
        toast.info(`Quantidade do item ${product.name} atualizado.`)
        return prevItems.map((item) => item.id === product.id ? { ...item, quantity: parseInt(item.quantity) + parseInt(quantity) } : item)

      } else {
        toast.success(`${product.name} adicionado com sucesso!`)
        return [...prevItems, { ...product, quantity }]
      }

    })

  }

  const handleUpdateCart = (product, quantity) => {
    toast.info(`Quantidade do item ${product.name} atualizado.`)
    setCartItems((prevItems) => {
      return prevItems.map((item) => item.id === product.id ? { ...item, quantity: +quantity } : item)
    })
  }

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} foi removido com sucesso!`)
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id))
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Catálogo</Link>
        <Link to='/cart'>Carrinho</Link>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Catalogo onAddToCart={handleAddCart} />} />
          <Route path='/cart' element={
            <Cart
              cartItems={cartItems}
              onUpdateCart={handleUpdateCart}
              onRemoveFromCart={handleRemoveFromCart}
              setCartItems={setCartItems}
            />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
        </Routes>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
