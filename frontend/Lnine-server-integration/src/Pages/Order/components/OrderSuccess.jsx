import {BiCart,BiCheckCircle} from "react-icons/bi"
import {Link}from "react-router-dom"

const OrderSuccess = ({orderData}) => {
    const userName = orderData?.user?.name;
    const userEmail = orderData?.user?.email;
    const displayOrderId = orderData?.orderId;
    const totalAmount = orderData?.amount_paid || orderData?.amountPaid;
    const quantity = orderData?.quantity||0;


return(
    <section className="text-xl text-center max-w-4xi m-auto my-10 py-5 dark:text-slate-100 dark:border-slate-700">
    <div className="my-5">
        <p>
            <BiCheckCircle/>
        </p>
        <p>
            Thank You {userName} for the succesful Order!
        </p>
        <p>
            Your Order Id: {displayOrderId}
        </p>
    </div>

    <div className="my-5">
        <p>
            Items Ordered: {quantity} | total amount: ${totalAmount}
        </p>
        <p>
            Please check your email ({userEmail}) for the ebook {quantity > 1 ? 's' : ''} you Ordered
        </p>
        <p className="my-5">
            Payment ID: {orderData?. paymentId || 'N/A'}
        </p>
    </div>

                <Link
                to="/products"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 dark:hover:bg-blue dark:blue-600 focus:outline-none inline-flex items-center gap-2"
                >
                Continue Shopping <BiCart/>
                </Link>
</section>
)
}
export default OrderSuccess