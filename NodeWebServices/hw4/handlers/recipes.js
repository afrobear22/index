const recipeMongo = require('../pkg/recipes/mongo');

const viewRecipes = async(req, res) => {
    try {
        let rl = await recipeMongo.getRecipes();
        return res.status(200).send(rl);
    } catch (error) {
        return res.status(500).send('Internal server error!');
    }
};

const oneRecipe = async(req, res) => {
    try {
        let rl = await recipeMongo.getOne(req.params.id);
        return res.status(200).send(rl);
    } catch (error) {
        return res.status(500).send('Internal server error!');
    }
};

const newRecipe = async(req, res) => {
    try {
        let l = await recipeMongo.addRecipe(req.body);
        return res.status(201).send(l);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const reviseRecipe = async(req, res) => {
    try {
        await recipeMongo.updateRecipe(req.params.id, req.body);
        return res.status(204).send('Updated');
    } catch (error) {
        return res.status(500).send('Internal server error!');
    }
};

const partialRevise = async(req, res) => {
    try {
        await recipeMongo.updateRecipe(req.params.id, req.body);
        return res.status(206).send('Partialy updated');
    } catch (error) {
        return res.status(500).send('Internal server error!');
    }
};

const deleteRecipe = async(req, res) => {
    try {
        await recipeMongo.removeRecipe(req.params.id);
        return res.status(204).send('Deleted');
    } catch (error) {
        return res.status(500).send('Internal server error!');
    }
};

module.exports = {
    viewRecipes,
    oneRecipe,
    newRecipe,
    reviseRecipe,
    partialRevise,
    deleteRecipe
}