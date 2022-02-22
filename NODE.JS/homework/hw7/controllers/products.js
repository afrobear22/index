const bcrypt = require('bcrypt');
const Product = require('../models/Product');
const { createToken } = require('../middlewares/jwt');

const allEntries = async(req, res, next) => {
    try {
        const AllProducts = await Product.find();
        return res.status(200).json(AllProducts);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const bulkInsert = async(req, res, next) => {
    const { productName, productQuantity } = req.body;
    if (!productName || !productQuantity) {
        return res.status(400).json('Invalid input, product invalid.');
    }
    try {
        await Product.create({ productName, productQuantity });
        return res.status(201).json('Product created.');
    } catch (error) {
        return res.status(409).json('An existing product already exists.');
    }
};

const updateEntry = async(req, res, next) => {
    const _id = req.params._id;
    const { productName, productQuantity } = req.body;

    if (!productName || !productQuantity) {
        return res.status(400).json('Bad request, missing product.');
    }

    try {
        await Product.findByIdAndUpdate(_id, { productName, productQuantity });
        return res.status(200).json('Product information edited.');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteEntry = async(req, res, next) => {
    const _id = req.params._id;

    if (!_id) {
        return res.status(400).json('Missing product ID!');
    }
    try {
        await Product.findByIdAndDelete(_id);
        return res.status(200).json('Product deleted');
    } catch (error) {
        return res.status(500).json('Product cannot be deleted.');
    }
};

module.exports = {
    allEntries,
    bulkInsert,
    updateEntry,
    deleteEntry,
};