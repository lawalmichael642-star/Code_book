import apiRequest from "../config/api";

export const getOrders = async () => {
    return await apiRequest ("/orders")
};

export const getOrder = async (id) => {
    return await apiRequest(`/orders/${id}`)
};

export const createOrder = async (order) =>{
    return await apiRequest("/order/", {
   method: "POST",
    body:JSON.stringify({
    ...order,
    id:Date.now(),
    createAt:new Date ().toISOString,
    })
})
         
}

export const getOrdersByUser = async (email) => {
    return await apiRequest(`/orders?email=${email}`);
}