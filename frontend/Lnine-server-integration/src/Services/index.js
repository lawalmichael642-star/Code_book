import adminService from "./adminservices";
import authService from "./authService";
import cartService from "./cartServices";
import dataService from "./dataServices";
import orderService from "./orderServices";


export{getFeaturedList,getProductList,getProduct} from "../Services/productServices"
export const { loginUser, logout, registerUser } = authService;
export const {checkLoginStatus,getUser}=dataService
export const {checkAdminStatus, createEbook,updateEbook}= adminService
export const { getUserCart,addToCartAPI,removeFromCartAPI,clearCartAPI} = cartService
export const {placeOrder,getUserOrder,getOrderById} = orderService