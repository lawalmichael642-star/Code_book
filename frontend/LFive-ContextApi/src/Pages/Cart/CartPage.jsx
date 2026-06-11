import { Link } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitile";


export const Cartpage = () => {
     useTitle ("Shopping Cart - Codebook")
     const cartItems = []
     return (
          <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
               <h1 className="text-2xl font-bold dark:text-white mb-6"> shopping-Cart</h1>
               {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                         <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">Your cart is empty</p>
                         <Link to="/products" className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-4 rounded-lg">
                            Continue Shopping
                         </Link>
                    </div>
               ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <div className="lg:col-span-2">
                              {/* Render cart items here */}
                              </div>
                              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-fit">
                                   <h2 className="text-xl font-bold dark:text-white mb-4">Order Summary</h2>
                                   <div className="space-y-2 mb-4">
                                        <div className="flex justify-between dark:text-gray-300">
                                             <span>Subtotal</span>
                                             <span >$0.00</span>
                                        </div>
                                        <div className="flex justify-between dark:text-gray-300">
                                             <span>Shipping</span>
                                             <span>free</span>
                                        </div>
                                        <div className="flex justify-between font-semibold text-rose-600 dark:text-rose-500">
                                             <span>Total</span>
                                             <span>$0.00</span>
                                        </div>
                                   </div>
                                   <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-4 rounded-lg transition disabled:cursor-not-allowed" >
                                    Checkout Abeg
                                   </button>
                              </div>
                         </div>
                    
               )}
          </main>
     )
}