import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import Product from './components/Product.jsx'
import SingleProduct from './components/SingleProduct.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Product />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/:key' element={<SingleProduct />}></Route>
      <Route path='*' element={<h1>404! Page Not Found</h1>}></Route>
    </Routes>
    
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App