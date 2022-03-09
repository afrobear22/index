const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipes', {
        title: String,
        time: Date,
        easyToMake: Boolean,
        servings: Number,
        ingredients: Array
    },
    'recipes'
);

const addRecipe = async(recipe) => {
    let rcp = new Recipe(recipe);
    return await Recipe.create(rcp);
};

const removeRecipe = async(id) => {
    return await Recipe.deleteOne({ _id: id });
};

const updateRecipe = async(id, recipe) => {
    return await Recipe.updateOne({ _id: id }, recipe);
};

const getRecipes = async() => {
    return await Recipe.find({});
};

const getOne = async(id) => {
    return await Recipe.findOne({ _id: id });
};

module.exports = {
    addRecipe,
    removeRecipe,
    updateRecipe,
    getRecipes,
    getOne
};