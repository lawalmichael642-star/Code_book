import Rating from "./Rating"

const Productcard = ({product}) => {

  if(!product) return null

  const {id,name,price,rating,poster, in_stock} =product
  return (
  <div className="border border-slate-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-shadow dark:bg-gray-800">
    <div className="relative">
    <img src={poster} alt={name}  className="w-full h-48 object-cover"/>
    {!in_stock &&(
      <div className="absolute insry-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <span className="text-white font-bold"> out to stock</span>
      </div>
    )}
    </div>


    <div className="p-4">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{name}</h3>
      <Rating rating={rating} />
      <div className="flex  justify-between mt-4">
        <span className="text-lg font-bold text-gray-900 dark:text-white">${price}</span>
        <button className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 disabled:cursor-not-allowed
        transition">
          Add to Cart 
        </button>
        
      </div>
    </div>
  </div>
  )
}

export default Productcard
