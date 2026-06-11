import {effect,useState} from 'react'
import {uesnavigate,useParams} from 'react-router-dom'

const Proudctdetails = () => {
     const {id} = useParams();
     const [product,setproduct] = useState(null);
     const navigate = useNavigate();
     const [loading,setloading] = useState(true);

     useEffect(() =>{
          const sampleProducts = {
      10001: {
        id: 10001,
        name: "Basics To Advanced In React",
        price: 29,
        rating: 5,
        poster: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=40",
        in_stock: true,
        overview: "React is a JavaScript library for building user interfaces.",
        long_description: "React is a JavaScript library used to build interactive user interfaces. It's declarative, efficient, and component-based, making UI development predictable and scalable."
      },
      10004: {
        id: 10004,
        name: "The Complete Guide to Backend Development",
        price: 99,
        rating: 5,
        poster: "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=40",
        in_stock: true,
        overview: "This guide walks you through everything you need to know to become a skilled backend developer.",
        long_description: "Backend development refers to the server-side of web development—the part you don't see but that powers everything behind the scenes."
      },
      10008: {
        id: 10008,
        name: "JavaScript Basics To Advance",
        price: 29,
        rating: 5,
        poster: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=40",
        in_stock: true,
        overview: "A comprehensive, hands-on program for learning JavaScript.",
        long_description: "JavaScript Basics to Advance is a complete journey through the JavaScript programming language."
      }
    };

    setProduct(sampleProducts[id] || null);
    setLoading(false);
     },[id]);

     if (loading) {
          return(
               <main className="mx-auto max-w-7xl px-4 py-12">
                    <div className="text-center">
                         <p className="dark:text-white">
                              Loading ......
                         </p>
                    </div>
               </main>
          )
     }
     if(!product){
          return(
               <main className="mx-auto max-w-7xl px-4 py-12">
                    <div className="text-center">
                         <p className="dark:text-white">
                              Product not found
                         </p>
                         <button
                         onClick={() => navigate("/products")} 
                         className="mt-4  hover:bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg">
                         Back to Products
                         </button>
                    </div>
               </main>
          )
     }
} 
    