const Song = require('../core/Song');

const getAllSongs = async(req, res) => {
    try {
        const allSongs = await Song.getAllSongs();
        return res.status(200).json(allSongs);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postAllSongs = async(req, res) => {
    const { name, genre, releaseDate, artist } = req.body;

    if (!name || !genre || !releaseDate || !artist) {
        return res.status(400).json('Missing data!')
    }
    try {
        await Song.addNewSong({ name, genre, releaseDate, artist });
        return res.status(201).json('Song created!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getASong = async(req, res) => {
    try {
        const aSong = await Song.getASong(id);
        return res.status(200).json(aSong);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putAllSongs = async(req, res) => {
    const { name, genre, releaseDate, artist } = req.body;
    console.log(req.params)

    const id = req.params.id;

    if (!name || !genre || !releaseDate || !artist) {
        return res.status(400).json('Missing data!')
    }
    try {
        await Song.updateSong({ id, name, genre, releaseDate, artist });
        return res.status(200).json('Updated song!')
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteSong = async(req, res) => {
    const id = req.params.id;

    try {
        await Song.deleteSong(id);
        return res.status(200).json('Song deleted!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllSongs,
    postAllSongs,
    getASong,
    putAllSongs,
    deleteSong,
};