import { useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../Hooks/useTitile";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  useTitle("Register For Codebook");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }
  };
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold dark:text-white mb-2"> Register </h1>
          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="w-full px-4 py-2 border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full px-4 py-2 border  border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              Email
            </div>
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border  border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              confirm password
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-2  rounded-lg"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center  text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link to="/login" className="text-rose-600 hover:text-rose-700">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
