import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import Cart from './Section/addToCart/Cart'
import Product from './Section/product/Product'
import SearchedProduct from './Section/product/SearchedProduct'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/searchedProduct' element={<SearchedProduct />} />
      </Routes>
     
    </>
  )
}

export default App
