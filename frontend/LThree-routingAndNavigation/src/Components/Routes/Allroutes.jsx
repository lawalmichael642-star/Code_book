import { Route, Routes } from "react-router-dom"
import { Homepage } from "../../Pages/Index"
import Login from "../../Pages/Login"
import Register from "../../Pages/Register"
import ProductDetails from "../../Pages/Product/ProductDetails"
import Productlist from "../../Pages/Index"


 export const Allroutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Homepage />}/>
      
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
   </Routes>
  )
}

export default Allroutes
