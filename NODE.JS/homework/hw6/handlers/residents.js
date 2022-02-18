const Resident = require('../core/Resident');

const getAllResidents = async(req, res, next) => {
    try {
        const AllResidents = await Resident.find();
        return res.status(200).json(AllResidents);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postAllResidents = async(req, res, next) => {
    const { name, hasCar, isBoomer } = req.body;
    if (!name || hasCar === undefined || isBoomer === undefined) {
        return res.status(400).json('Invalid input, object invalid.');
    }
    try {
        await Resident.create({ name, hasCar, isBoomer });
        return res.status(201).json('Resident created.');
    } catch (error) {
        return res.status(409).json('An existing item already exists.');
    }
};

const putAllResidents = async(req, res, next) => {
    const _id = +req.params._id;
    const { name, hasCar, isBoomer } = req.body;

    if (!name || hasCar === undefined || isBoomer === undefined) {
        return res.status(400).json('Bad request, missing info.');
    }

    try {
        await Resident.findByIdAndUpdate(_id, { name, hasCar, isBoomer });
        return res.status(200).json('Residents info edited.');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteResident = async(req, res, next) => {
    const _id = +req.params._id;

    if (!_id) {
        return res.status(400).json('Missing id!');
    }
    try {

        await Resident.findByIdAndDelete(_id);
        return res.status(200).json('OK');
    } catch (error) {
        return res.status(500).json('Internal server error, Resident cannot be deleted.');
    }
};


module.exports = {
    getAllResidents,
    postAllResidents,
    putAllResidents,
    deleteResident,
};