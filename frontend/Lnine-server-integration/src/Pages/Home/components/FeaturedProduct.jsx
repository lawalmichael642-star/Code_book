import {useEffect, useState}from "react";
import ProductCard from "../../../Components/elements/Productcard";
import {toast}from "react-toastify";
import { getFeaturedList } from "../../../services";
import { useCart } from "../../../context";

export const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const {cartList,addToCart,removeFromCart} = useCart()
    

    useEffect (()=> {
        async function fetchProducts(){
            try {
                const data = await getFeaturedList()
                setProducts(data || [])
       
            }catch (error){
                toast.error(error.message,{
                    closeButton: true,
                    position:"top-right"
                })
            }
        }
        fetchProducts()
    }, [])


    return(
        <selection className="my-20">
            <h1 className="text-2x1 text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
                Featured eBooks
            </h1>
            <div className="flex flex-wrap justify-center gap-4 lg:flex-row">
                {
                    products.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        cartList={cartList}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        />
                    ))
                }

            </div>
        </selection>
    )
}