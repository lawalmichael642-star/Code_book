import { useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../Hooks/useTitile";

const Login = () => {
     const [email, setemail] = useState("");
     const [password, setpassword] = useState("");

     useTitle("Login to Codebook");

     const handlesubmit = (e) => {
          e.preventDefault();
     };
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
     <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
               <h1 className="text-2xl font-bold dark:text-white mb-2"> Login </h1>
               <form onSubmit={handlesubmit} className="space-y-4">
                    <div>
                         <label className="block text-gray-700 dark:text-gray-300 mb-2">
                              Email
                         </label>
                         <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="w-full px-4 py-2 border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required/>
                    </div>
                    <div>
                         <label className="block text-gray-700 dark:text-gray-300 mb-2">
                              Password
                         </label>
                         <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="w-full px-4 py-2 border  border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required/>
                    </div>
                    <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-2  rounded-lg">
                         Login
                    </button>
               </form>
               <p className="mt-4 text-center  text-gray-600 dark:text-gray-400">
                    Dont have an account?
                    <Link to="/register" className="text-rose-600 hover:text-rose-700"> Register</Link>
                    
               </p>
          </div>

     </div>
    </main>
  )
}

export default Login
