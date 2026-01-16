import React from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './Component/Footer.jsx'
import LoginPopup from './Component/LoginPopup.jsx'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
    <div className='w-4/5 m-auto font-poppins'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
