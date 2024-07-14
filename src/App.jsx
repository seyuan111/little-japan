import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />}/>
      </Routes>
      <Footer />
    </div>
    
    </>
  )
}

export default App
