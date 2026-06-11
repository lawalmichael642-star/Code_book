import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/Index"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import ProductDetails from "../Pages/Product/ProductDetails"
import ProductList from "../Pages/Product/Productlist"


 export const Allroutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Homepage />}/>
      
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/products" element={<ProductList />}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
   </Routes>
  )
}

export default Allroutes
