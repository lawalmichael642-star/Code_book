const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema(
    {
        id: {
            type: number,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        overview: {
            type: String,
            required: true,
        },
        longDescription: {
            type: String,
            required: true,
        },
        price: {
            type: number,
            required: true,
            min: 0,
        },
        poster: {
            type: String,
            required: true,
        },
        rating: {
            type: number,
            required: true,
            min: 0,
            max: 5
        },
        inStock:{
            type:Boolean,
            default:true,
        },
        size: {
            type: Number,
            required: false,
        },
        bestSeller: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true,}
)

module.exports = mongoose.model("Ebook", ebookSchema)