import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route />
      </Routes>
    </div>
  )
}

export default App
