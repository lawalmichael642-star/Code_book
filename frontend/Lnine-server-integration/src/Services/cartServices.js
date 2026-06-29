import {apiRequest, CART_ENDPOINTS} from "../config/Api";

const transformCartData = (cartData) => {
     const cartList = cartData.cartList || [];
     const total = Number(
          cartList.reduce((sum, item) => sum + Number(item.price || 0), 0).toFixed(2)
     );

     return{
          cartList,
          total,
     }
}


const getUserCart = async () => {
     try{
          const cartData = await apiRequest(
               CART_ENDPOINTS.GET_USER_CART,{
                    method:"GET",
               });
               return transformCartData (cartData);
     }catch (error){
          // if cart not found return empty cart

          if (error.message.includes("not found ")){
               return {cartList: [], total:0};
          }
          throw new Error(error.message || "failedto fetch cart");
     }
};

const addToCartAPI = async (product)=> {
     if (!product || typeof product.id === "undefined"){
          throw new Error("Invalid Product")
     }

     try{
          const cartData = await apiRequest(CART_ENDPOINTS.ADD_TO_CART,{
               method : "POST",
               body: JSON.stringify ({ id: product.id}),
          });
          return transformCartData(cartData)
     }catch(error){
          throw new Error (error.message || "Failed to add item to cart")
     }
}


const removeFromCartAPI = async (product)=>{
     if (!product || typeof product.id === "undefined"){
          throw new Error ("invalid product")
     }
     try{
          const cartData = await apiRequest(CART_ENDPOINTS.REMOVE_FROM_CART, {
               method: "DELETE",
               body : JSON.stringify ({id:product.id}),
          });
          return transformCartData(cartData);
     }catch(error){
          throw new Error (error.message || "Failed to remove item from cart")
     }
}


const clearCartAPI = async () => {
     try {
          const cartData = await apiRequest(CART_ENDPOINTS.CLEAR_CART, {
                method: "DELETE",
          });
          return transformCartData(cartData);
     }catch (error){
          throw new Error(error.message || "Failed to clear cart")
     }
};

const cartService= {
     getUserCart,
     addToCartAPI,
     removeFromCartAPI,
     clearCartAPI
}

export default cartService;
