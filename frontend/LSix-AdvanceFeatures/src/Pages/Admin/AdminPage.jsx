import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useTitle} from "../../Hooks/useTitile"
import AdminProtectedForm from "../../Routes/AdminProtectedFrom";
import AdminProtectedList from "../../Routes/AdminProtectedList";
import { toast } from "react-toastify";

const AdminPage = () => {
    useTitle ("Admin Dashboard - Codebook");
    const navigate = useNavigate();
    const [ active, setActiveTab] = useState ("products");
    const [editingProducts, setEditingProduct] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("adminUser")
        localStorage.removeItem("email")
        toast.success ("Logged Out Succesfully")
        navigate("/login");
    };
    const handleAppProduct = (formData) => {
        const newProduct ={
            ...formData,
            id:Date.now()
        };
        toast.success("Product added Succesfully!(Demo mode, not saved to database)")
        setEditingProduct(null)
    }

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setActiveTab ("add");
        window.scrollTo({top:0,  behaviour: "smooth"});
    };

    const handleDeleteProduct = (id) => {
        toast.success ("Product Deleted Successfully!");
        console.log("would delete product:", id)
    };

    return(
        <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
                <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button onClick={handleLogout} className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
                </div> 


                <div className="mb-6 flex gap-2 border-b border-gray-200 dark:border-gray-700">
                    <button
                    onClick={() => setActiveTab("products")}
                    className={`px-4 py-2 font-semibold transition ${activeTab ==="product"
                        ?"text-rose-600 border-b-2 border-rose-600"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
                    
                    >{editingProduct ? "Edit Product" : "Add Product"}

                    </button>
                </div>



                <div className="mt-8">
                    {activeTab === "product" ? (
                        <div>
                            <h2 className="text-2xl font-bold dark:text-white mbb-6 ">Manage Product</h2>
                            <AdminProductList onEdit={handleEditProduct} onDelete ={handleDeleteProduct}/>
                        </div>
                    ) : (
                    <div>
                            <AdminProductForm onSubmit={handleAppProduct} initialData ={editingProducts}/>

                    </div>
                    )}
                </div>

                <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-bold text-bold text-blue-900 dark:text-blue-100 mb-2">Admin Features in the lesson</h3>
                    <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                        <li>Project admin routes (require adminUser flag in localStorage)</li>
                        <li>Product with validation</li>
                        <li>product list with edit/delete actions</li>
                        <li>Tab navigation between wiews</li>
                        <li>Demo mode - change not persisted (upgraded in lesson 7)</li>
                    </ul>
                </div>

                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg border-yellow-200 dark:border-yellow-700">
                    <h3 className="text-lg font-black text-yellow-900 dark:text-yellow-100 mb-2">
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-3">
                            To test the admin Features:
                        </p>
                        <ol className="text-yellow-800 dark:text-yellow-200 text-sm space-y-2 ml-4 list-decimal">
                            <li>open browser DevTools</li>
                            <li>Go to console tab</li>
                            <li>Run: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">localStorage.setItem('adminUser', 'true')</code></li>
                            <li>Visit <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">admin</code></li>
                            <li>You'll now see the admin dashboard (use any email/password to login first)</li>

                        </ol>
                    </h3>
                </div>
        </main>
    )
}

export default AdminPage