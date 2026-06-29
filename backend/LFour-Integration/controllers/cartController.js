const Cart = require("../models/cartModel");
const asyncHandler = require("express-async-handler");
const Ebook = require("../models/ebookModel");

const addToCart = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ msg: "Ebook id is required" });
    }

    const ebook = await Ebook.findOne({ id: Number(id) });

    if (!ebook) {
        return res.status(404).json({ msg: "ebook not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({
            userId,
            cartList: [ebook],
        });
    } else {
        const existingCartIndex = cart.cartList.findIndex(
            (item) => item.id === Number(id)
        );

        if (existingCartIndex !== -1) {
            return res.status(400).json({ msg: "ebook already exists in cart" });
        }

        cart.cartList.push(ebook);
    }

    const savedCart = await cart.save();
    res.status(201).json(savedCart);
});

const removeFromCart = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ msg: "Ebook id is required" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
        return res.status(404).json({ msg: "cart not found" });
    }

    const existingCartIndex = cart.cartList.findIndex(
        (item) => item.id === id
    );

    if (existingCartIndex === -1) {
        return res.status(404).json({ msg: "Ebook not found in the cart" });
    }

    cart.cartList.splice(existingCartIndex, 1);

    const savedCart = await cart.save();
    res.status(200).json(savedCart);
});

const clearCart = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
        return res.status(404).json({ msg: "cart not found" });
    }

    cart.cartList = [];

    const clearedCart = await cart.save();
    res.status(200).json(clearedCart);
});

const getUserCart = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId });

    if (!cart) {
        return res.status(200).json({
            userId,
            cartList: [],
        });
    }

    res.status(200).json(cart);
});

module.exports = {
    addToCart,
    removeFromCart,
    getUserCart,
    clearCart,
};
