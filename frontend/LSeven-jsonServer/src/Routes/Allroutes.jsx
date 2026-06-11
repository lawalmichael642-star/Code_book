import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import ProductDetails from "../Pages/Home/Product/ProductDetails"
import ProductList from "../Pages/Home/Product/Productlist"
import CartPage from "../Pages/Cart/CartPage"
import AdminProtectedRoute from "./AdminProtectedRoute"
import AdminPage from "../Pages/Admin/AdminPage"


 export const Allroutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/products" element={<ProductList />}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route 
      path="/admin" element={
         <AdminProtectedRoute>
            <AdminPage/>
         </AdminProtectedRoute>
      }/>
   </Routes>
  )
}

export default Allroutes
