const {default: mongoose} = require('mongoose');

const orderSchema = new mongoose.Schema({

    user: {
        type:Object,
    },
    quantity: {
        type: number,
    },
    amount_paid: {
        type: number,
    },
    cartList: {
        type: Array,
        default: [],
    },
})
module.exports = mongoose.model("Order", orderSchema)