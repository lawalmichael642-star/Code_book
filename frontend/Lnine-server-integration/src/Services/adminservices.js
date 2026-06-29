import {apiRequest, EBOOK_ENDPOINTS} from "../config/Api";
import {transformProduct}from "../Services/productServices";
import {getUser}from "./index"


// /**
//  * normalise product data for api submission
//  * /


const normaliseProduct = (product) => {
     const {
          name,
          overview,
          long_description,
          longDescription,
          rating,
          poster,
          size,
          inStock,
          in_stock,
          bestSeller,
          best_seller,
          price
     }=product;

     return {
          name: name?.trim()|| "",
          overview: overview?.trim() || "",
          longDescription: longDescription?.trim() || long_description.trim()|| "",
          rating: Number (rating),
          poster: poster?.trim() || "",
          size:Number(size),
          inStock: typeof inStock === "boolean" ? inStock : Boolean(in_stock),
          bestSeller: typeof bestSeller === "boolean" ? bestSeller : Boolean (best_seller),
          price : Number(price),
     }
}


const createEbook = async (ebookData) => {
     try{
          const productData = normaliseProduct(ebookData)

          if(!productData.name || !product.overview || !productData.longDescription){
               throw new Error ("Name, Overview,  and long Description are required")
          }

          if(!productData.price || productData.price <= 0){
               throw new Error ("valid price is required")
          }

          if (!productData.rating || productData.rating < 1 || productData.rating > 5){
               throw new Error ("Rating must be between 1 and 5")
          }

          const createdProduct = await apiRequest(EBOOK_ENDPOINTS.CREATE,{
               method:"POST",
               body:JSON.stringify(productData)
          })

          return transformProduct (createdProduct)

     }catch (error){
          throw new Error(error.message|| "failed to create product")
     }
}



const updateEbook = async (id, ebookData) => {
     try{
          const productData = normaliseProduct(ebookData)

          const updatedProduct = await apiRequest(EBOOK_ENDPOINTS.UPDATE(id), {
               method:"PATCH",
               body:Json.stringify(productData)
          })

          return transformedProduct(updatedProduct)
     }catch (error) {
          throw new Error (error.message || "failed to update product")
     }
}


const checkAdminStatus = async ()=> {
     try {
          const user = await getUser();
          return Boolean (user?.isAdmin)
     } catch (error) {
          return false
     }
}


const adminService = {
     createEbook,
     updateEbook,
     checkAdminStatus
}

export default adminService