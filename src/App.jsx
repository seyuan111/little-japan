import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import About from './pages/About/About'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />}/>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    
    </>
  )
}

export default App
