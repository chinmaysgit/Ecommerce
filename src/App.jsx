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
import { ProductContextApi } from './context/productContext.jsx'
import Product from './components/Product.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductContextApi>
      <Product />
    </ProductContextApi>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='*' element={<h1>404! Page Not Found</h1>}></Route>
    </Routes>
    
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App