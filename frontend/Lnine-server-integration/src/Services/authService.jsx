import { apiRequest, USER_ENDPOINTS } from "../config/Api";

// store user in localstorage for quick access

const persistEmail = (user) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem("email", JSON.stringify(user.email));
  window.localStorage.setItem("user", JSON.stringify(user));
};

// clear user email from localstorage

const clearPersistance = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem("email");
  window.localStorage.removeItem("user");
};

//normalise Email
const normaliseEmail = (email = "") => email.trim().toLowerCase();

//to transform the user data to match to frontend format
 export const transformUserData = (userData) => {
  return {
    id: userData._id,
    _id: userData._id,
    name: userData.name,
    isAdmin: Boolean(userData.isAdmin),
    email: userData.email,
    cartList: userData.cartList || [],
    orderList: userData.orderList || [],
  };
};

/**
 * @params{email,password}
 * @returns User data
 *
 */

export const loginUser = async (authDetail) => {
  const { email, password } = authDetail;

  if (!email || !password) {
    throw new Error("email annd password are required");
  }
  try {
    const userData = await apiRequest(USER_ENDPOINTS.LOGIN, {
      method: "POST",
      body: JSON.stringify({
        email: normaliseEmail(email),
        password,
      }),
    });

    const transFormedUser = transformUserData(userData);
    persistEmail(transFormedUser.email);

    return transFormedUser;
  } catch (error) {
    throw new Error(error.message || "invalid email or password");
  }
};

/**
 * register User
 * @param {name}
 * @param {email}
 * @param {password}
 * @returns User data
 */

export const registerUser = async (authDetail) => {
  const { email, password, name } = authDetail;

  if (!name || !password || !email) {
    throw new Error("All fields are required");
  }
  try {
    const userData = await apiRequest(USER_ENDPOINTS.REGISTER_USER, {
      method: "POST",
      body: JSON.stringify({
        email: normaliseEmail(email),
        password,
        name: name.trim(),
      }),
    });

    const transFormedUser = transformUserData(userData);
    persistEmail(transFormedUser.email);

    return transFormedUser;
  } catch (error) {
    throw new Error(error.message || "Registration failed");
  }
};

/**
 * logout
 * @returns Boolean
 */

const logout = async () => {
  try {
    await apiRequest(USER_ENDPOINTS.LOGOUT, {
      method: "POST",
    });
    clearPersistance();
    return true;
  } catch (error) {
    clearPersistance();
    throw new Error(error.message || "Logout failed");
  }
};

const authService = {
  loginUser,
  registerUser,
  logout,
};
export default authService;
