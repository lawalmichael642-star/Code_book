import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import ProductCard from "../../components/elements/ProductCard";
import { useTitle } from "../../hooks/useTitle";
import { useLocation } from "react-router-dom";
import { FilterBar } from "./components/Filterbar";
import { toast } from "react-toastify";
import { getProductList } from "../../services";
import { useFilter, useCart } from "../../context"; // Fixed: Added useCart import here

const ProductList = () => {
  useTitle("Ebook Collection");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  
  const { products, initialProductList } = useFilter();
  const { cartList, addToCart, removeFromCart } = useCart(); // Now correctly defined


  useEffect(() => {
    const sampleProducts = [
      {
        id: 10001,
        name: "Basics To Advanced In React",
        price: 29,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: false,
      },
      {
        id: 10002,
        name: "Django Framework for Beginners",
        price: 19,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10003,
        name: "The Future of Design Systems",
        price: 29,
        rating: 3,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10004,
        name: "The Complete Guide to Backend Development",
        price: 99,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: false,
      },
      {
        id: 10005,
        name: "Build a Blockchain from Scratch in Go",
        price: 19,
        rating: 3,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10006,
        name: "Frontend Fastlane Plan With Projects",
        price: 99,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10007,
        name: "Master the Code Review",
        price: 19,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: false,
      },
      {
        id: 10008,
        name: "JavaScript Basics To Advance",
        price: 29,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10009,
        name: "Python Deep Dive With Projects",
        price: 29,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10010,
        name: "Mastering Software Technique",
        price: 19,
        rating: 4,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
      {
        id: 10011,
        name: "Web Development Foundation",
        price: 29,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: false,
      },
      {
        id: 10012,
        name: "Mastering Git and GitHub",
        price: 9,
        rating: 5,
        poster:
          "https://unsplash.com",
        in_stock: true,
      },
    ];

    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProductList(searchTerm);
       

        if (!data || data.length === 0) {
          initialProductList(sampleProducts);
          toast.success(
            "No Products available: only sample products displayed",
            {
              closeButton: true,
              position: "top-right",
            },
          );
          return;
        }
        initialProductList(data);
       
        toast.success("Check out our Ebooks", {
          closeButton: true,
          position: "top-right"
        });
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          closeButton: true,
          position: "top-right",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [searchTerm]); // Removed initialProductList dependency to avoid unnecessary re-fetches

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-8">
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">
            All eBooks ({products?.length || 0})
          </h1>
          <button
            onClick={() => setShow(!show)}
            className="inline-flex items-center cursor-pointer rounded-md p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            <MdMenu size={24} />
          </button>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  cartList={cartList} 
                  addToCart={addToCart} 
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>

            {products?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No products match your filters
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {show && <FilterBar setShow={setShow}/>}
    </main>
  );
};

export default ProductList;
