import { Route, Routes } from "react-router-dom"
import { Homepage, Productlist, Order } from "../Pages/Index"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Productdetails from "../Pages/ProductDetails"
import AdminProtectedRoute from "./AdminProtectedRoute"
import Cartpage from "../Pages/Cart/Cartpage"
import AdminPage from "../Pages/admin/AdminPage"
import DashBoard from "../Pages/Dashboard/Dashboard"


export const AllRoutes =() =>{

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productlist />} />
      <Route path="/products/:id" element={<Productdetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Cart" element={<Cartpage />} />
       <Route path="/dashboard" element={<DashBoard />} />
       <Route path="/order-summary" element={<Order />} />
      <Route 
      path="/admin" element={
        <AdminProtectedRoute>
          < AdminPage />
        </AdminProtectedRoute>
      }/>
    </Routes>
  );
}

export default AllRoutes
