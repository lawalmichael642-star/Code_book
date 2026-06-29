/**
 * API Configuration 
 * Centralized configuration for backend
 */

import axios from 'axios';

// Getting base url safely with fallback protection
const getBaseUrl = () => {
    // 1. Check if Vite's environment tracking object exists
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        return import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
    }
    
    // 2. Check if standard Node/Webpack environment tracking object exists
    if (typeof process !== 'undefined' && process.env) {
        return process.env.REACT_APP_API_BASE_URL || process.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
    }

    // 3. Absolute fallback if no build system environments are detected
    return 'http://localhost:3001/api';
}

// Helper function to build api endpoint 
const api = (path) => {
    const base = getBaseUrl()
    return base.endsWith('/') ? `${base}${path}` : `${base}/${path}`
}

// User/Auth endpoints
export const USER_ENDPOINTS = {
    REGISTER_USER : api('users/registerUser'),
    REGISTER_ADMIN: api('users/registerAdmin'),
    LOGIN: api('users/login'),
    LOGOUT: api('users/logout'),
    USER_PROFILE:  api('users/userProfile'),
    LOGIN_STATUS: api('users/loginStatus')
}

//Ebook endpoints
export const EBOOK_ENDPOINTS = {
    CREATE : api('ebook/createEbook'),
    GET_SINGLE: (id)=> api(`ebook/singleEbook/${id}`),
    GET_ALL: api('ebook/getAllEbook'),
    UPDATE: (id)=> api(`ebook/updateEbook/${id}`),
}

// Cart endpoints
export const CART_ENDPOINTS = {
    ADD_TO_CART : api('cart/addToCart'),
    REMOVE_FROM_CART: api('cart/removeFromCart'),
    CLEAR_CART: api('cart/clearCart'),
    GET_USER_CART: api('cart/getUserCart'),
}

// Order endpoints 
export const ORDER_ENDPOINTS = {
    PLACE_ORDER : api('order/placeOrder'),
    GET_USER_ORDER: api('order/getUserOrders'),
    GET_ORDER_BY_ID: api('order/getOrderById'),
}


// API configuration for axios requests
export const API_CONFIG  = {
    withCredentials: true, // Required for httponly cookies 
    headers: {
        'Content-Type': 'application/json'
    }
}

export const apiClient = axios.create(API_CONFIG)


/**
 * Helper function to make Api requests
 */ 
export const apiRequest = async (url, options = {}) => {
    const {method = 'GET', body, headers, ...rest} = options;

    const config = {
        url,
        method,
        headers: {
            ...API_CONFIG.headers,
            ...headers,
        },
        ...rest,
    };

    if (body !== undefined){
        config.data = typeof body === 'string' ?  JSON.parse(body) : body
    }


    try {
        const response = await apiClient.request(config)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)){

            if (error.response) {
                const message = error.response.data?.message || `HTTP error! status: ${error.response.status}`;
                throw new Error(message)
            }

            if (error.request) {
                throw new Error('Unable to connect to server. please make sure that the backend server is running on the required port')
            };
        }

        throw error
    }
}
