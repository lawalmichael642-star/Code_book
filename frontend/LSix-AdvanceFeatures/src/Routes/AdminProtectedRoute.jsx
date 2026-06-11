import { Children } from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({children}) => {
 const isAdmin = JSON.parse(localStorage.getItem("adminUser"))|| false;

 return isAdmin ? Children : <Navigate to = "/login"/>
};
export default AdminProtectedRoute