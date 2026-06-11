const Ebook = require("../models/ebookModel");
const asyncHandler = require("express-async-handler");
const { generateUniqueId } = require("../utils");

const createEbook = asyncHandler(async (req, res) => {
    const { name, overview, longDescription, price, inStock, poster, rating, bestSeller, size } = req.body;

    const existing = await Ebook.findOne({ name });
    if (existing) {
        return res.status(400).json({ message: "Ebook with the same name already exists" });
    }

    if (!name || !overview || !longDescription || price == null || !rating || !poster) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating can only be between 1-5" });
    }

    const id = await generateUniqueId();

    const ebook = new Ebook({
        id,
        name,
        overview,
        longDescription,
        price,
        rating,
        poster,
        bestSeller: bestSeller || false,
        inStock: inStock !== undefined ? inStock : true,
        size,
    });

    const savedEbook = await ebook.save();
    res.status(201).json(savedEbook);
});

const getAnEbook = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const ebook = await Ebook.findOne({ id: Number(id) });

    if (ebook) {
        const { _id, id: ebookId, name, overview, longDescription, price, rating, poster, inStock, bestSeller, size } = ebook;

        res.status(200).json({ _id, id: ebookId, name, overview, longDescription, price, rating, poster, inStock, bestSeller, size });
    } else {
        return res.status(404).json({ message: "ebook not found" });
    }
});

const getAllEbook = asyncHandler(async (req, res) => {
    const ebooks = await Ebook.find();

    if (!ebooks || ebooks.length === 0) {
        return res.status(400).json({ message: "no ebook found" });
    }

    return res.status(200).json(ebooks);
});

const updateEbook = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const ebook = await Ebook.findOne({ id: Number(id) });

        if (ebook) {
            ebook.price = req.body.price ?? ebook.price;
            ebook.poster = req.body.poster ?? ebook.poster;
            ebook.overview = req.body.overview ?? ebook.overview;
            ebook.rating = req.body.rating ?? ebook.rating;
            ebook.inStock = req.body.inStock !== undefined ? req.body.inStock : ebook.inStock;
            ebook.bestSeller = req.body.bestSeller !== undefined ? req.body.bestSeller : ebook.bestSeller;
            ebook.longDescription = req.body.longDescription ?? ebook.longDescription;

            const updatedEbook = await ebook.save();
            res.status(200).json(updatedEbook);
        } else {
            res.status(400).json({ error: "Ebook not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = {
    createEbook,
    getAnEbook,
    getAllEbook,
    updateEbook,
};
