require('./pkg/db');

const express = require('express');
const recipes = require('./handlers/recipes')


const api = express();


api.use(express.json());


api.get('/api/recipes', recipes.viewRecipes);
api.get('/api/recipes/:id', recipes.oneRecipe);
api.post('/api/recipes', recipes.newRecipe);
api.put('/api/recipes/:id', recipes.reviseRecipe);
api.patch('/api/recipes/:id', recipes.partialRevise);
api.delete('/api/recipes/:id', recipes.deleteRecipe);


api.listen(9999, err => {
    if (err) return console.log(err);
    return console.log('Server started!');
})