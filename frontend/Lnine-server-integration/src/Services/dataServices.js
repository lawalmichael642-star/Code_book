import { apiRequest, USER_ENDPOINTS } from "../config/Api";
import { transformUserData } from "./authService";

/**
 * get currnent user profile 
 * @returns User dataor null if not authenticated 
 */

const getUser=async() =>{
     if(typeof window === undefined){
          return null 
     }

     try{
          const userData =await apiRequest(USER_ENDPOINTS.USER_PROFILE,{
               method:"GET"
          })
          return transformUserData(userData)
     } catch(error){
          return null
     }
}


//**
// check login status 
//  @return true if logged in,false otherwise 

const checkLoginStatus =async() =>{
     if (typeof window ===undefined){
          return null
     }
     try{
          const status=await apiRequest(USER_ENDPOINTS.LOGIN_STATUS,{
               method:null
          })

          return Boolean(status)
     } catch(error){
          return false
     }
}

const dataService={
     getUser,
     checkLoginStatus
}
export default dataService