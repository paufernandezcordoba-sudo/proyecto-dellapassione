import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import AboutScreen from './Screens/AboutScreen/AboutScreen.jsx'
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx'
import './global.css'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen.jsx'

function App() {

  return (
    <div>
      <header>
        <h2>
          Della Passione
        </h2>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </header>
      <h1>Arte & Diseño</h1>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route 
        path='/product/:product_id' 
        element={<ProductDetailScreen/>} 
        />
      </Routes>
    </div>
  )
}

export default App