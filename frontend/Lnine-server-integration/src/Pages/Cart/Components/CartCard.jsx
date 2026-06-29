import React from 'react'
import {Link} from 'react-router-dom'
import {useCart} from '../../../context'

const CartCard = ({product}) => {
    const {removeFromCart} = useCart()

    return(
        <div className="flex">
            <Link to={`/products/${product.id}`}>
            <img src={product.poster} alt={product.name}
                className="w-32 rounded"
            />
            </Link>

            <div>
                <Link to ={`/products/${product.id}`}>
                <p className="text-lg ml-2 dark:text-slate-200">
                    {product.name}
                </p>
                </Link>
                <button onClick={() => removeFromCart(product)}
                    className="text-base ml-2 text-red-400"
                    >
                    Remove
                </button>
            </div>
      
        <div className="text-lg m-2 dark: text-slate-200">
            <span>{product.price}</span>
        </div>
        
    </div>
    )
}

export default CartCard