const UniversePlanet = require('../models/Planet');

const addNewPlanet = async(req, res) => {
    const { planetName } = req.body;
    if (!planetName) {
        return res.status(400).json('Missing planet name!');
    }
    try {
        await UniversePlanet.addPlanet({ planetName });
        return res.status(200).json('Added new planet!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllPlanets = async(req, res) => {
    try {
        const allPlanets = await UniversePlanet.getPlanets();
        return res.status(200).json(allPlanets);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updatePlanet = async(req, res) => {
    const { id, planetName } = req.body;
    if (!planetName || !id) {
        return res.status(400).json('Missing info!');
    }
    try {
        await UniversePlanet.editPlanet({ id, planetName })
        return res.status(200).json('Planet is updated!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deletePlanet = async(req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json('Missing ID');
    }
    try {
        await UniversePlanet.deletePlanet(id)
        return res.status(200).json('Deleted planet!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    addNewPlanet,
    getAllPlanets,
    updatePlanet,
    deletePlanet,
}