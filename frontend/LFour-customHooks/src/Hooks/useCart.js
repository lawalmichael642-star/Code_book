import { useCallback, useEffect, useState } from "react";

export const useCart = () => {
     const [cartlist,setCartList] = useState([]);
     const [total, setTotal] = useState(0);
     const [loading,setLoading] = useState(false);

          const addToCart =  useCallback((product) => {
               setLoading(true);

          try{
               setCartList((prev) => [...prev, product]);
               setTotal((prev) => prev +  Number (product.price || 0));
          } catch (error){
              console.error("Error adding to cart:", error);
          } finally {
              setLoading(false);
          }
     
},[]);

const removeFromCart =useCallback ((productId) => {
     setLoading(true);
     try {
          const product =cartlist.find(item => item.id === productId);
          if (product) {
               setCartList(prev => prev.filter(item => item.id !== productId));
               setTotal(prev => prev -Number (product.price || 0));
          }
     } catch (error) {
          console.error("Error removing from cart:", error);
     } finally {          
          setLoading(false);
     }
},[cartlist]);

const clearCart = useCallback(() => {
     setLoading(true);   
     try {
          setCartList([]);
          setTotal(0);
     } catch (error) {
          console.error("Error clearing cart:", error);
     } finally {
          setLoading(false);
     }
}, []);        

return { 
     cartlist,
     total, 
     loading, 
     addToCart, 
     removeFromCart, 
     clearCart
 }};