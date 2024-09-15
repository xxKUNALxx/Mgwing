import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Wishlist from './Pages/Whishlist'
import Aboutus from './Pages/Aboutus'
import Admin from './Pages/Admin'


const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/whishlist' element={<Wishlist/>} />
        <Route path='/aboutus' element={<Aboutus/>}  />
        <Route path='/admin' element={<Admin/>} />

    </Routes>
  )
}

export default Allroutes
