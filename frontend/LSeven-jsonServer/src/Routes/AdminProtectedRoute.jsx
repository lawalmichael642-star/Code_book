import {Navigate} from 'react-router-dom';

const AdminProtectedRoute = ({children}) => {
 const isAdmin = JSON.parse(localStorage.getItem("adminUser"))|| false;

 return isAdmin ? children : <Navigate to = "/login"/>
};
export default AdminProtectedRoute