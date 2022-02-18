const Resident = require('../core/Resident');

const getAllResidents = async(req, res) => {
    try {
        const allResidents = await Resident.getAllResidents();
        return res.status(200).json(allResidents);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postAllResidents = async(req, res) => {
    const { name, hasCar, isBoomer } = req.body;

    if (!name || hasCar === undefined || isBoomer === undefined) {
        return res.status(400).json('Missing data!')
    }
    try {
        await Resident.addNewResident({ name, hasCar, isBoomer });
        return res.status(201).json('Created!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putAllResidents = async(req, res) => {
    const { name, hasCar, isBoomer } = req.body;

    const _id = +req.params.boomer;

    if (!name || hasCar === undefined || isBoomer === undefined) {
        return res.status(400).json('Missing data!')
    }
    try {
        await Resident.updateResident({ _id, name, hasCar, isBoomer });
        return res.status(200).json('Updated resident!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteResident = async(req, res) => {
    const _id = +req.params.boomer;

    try {
        await Resident.deleteResident(_id);
        return res.status(200).json('Deleted resident');
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllResidents,
    postAllResidents,
    putAllResidents,
    deleteResident,
};