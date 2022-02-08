const UniverseStar = require('../models/Star');

const addNewStar = async(req, res) => {
    const { starName } = req.body;
    if (!starName) {
        return res.status(400).json('Missing star name!');
    }
    try {
        await UniverseStar.addStar({ starName });
        return res.status(200).json('Added new star!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllStars = async(req, res) => {
    try {
        const allStars = await UniverseStar.getStars();
        return res.status(200).json(allStars);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateStar = async(req, res) => {
    const { id, starName } = req.body;
    if (!starName || !id) {
        return res.status(400).json('Missing info!');
    }
    try {
        await UniverseStar.editStar({ id, starName })
        return res.status(200).json('Star is updated!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteStar = async(req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json('Missing ID');
    }
    try {
        await UniverseStar.deleteStar(id)
        return res.status(200).json('Deleted star!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    addNewStar,
    getAllStars,
    updateStar,
    deleteStar,
}