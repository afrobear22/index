const Kafana = require('../models/Kafana');

const addNewSong = async(req, res) => {
    const { songTitle, artist } = req.body;

    if (!songTitle || !artist) {
        return res.status(400).json('Missing song title or artist!');
    }
    try {
        await Kafana.addSong({ songTitle, artist })
        return res.status(200).json('Added new song!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllSongs = async(req, res) => {
    try {
        const allSongs = await Kafana.getSongs();
        return res.status(200).json(allSongs);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateSong = async(req, res) => {
    const { id, songTitle, artist } = req.body;
    if (!songTitle || !artist || !id) {
        return res.status(400).json('Missing data');
    }
    try {
        await Kafana.editSong({ id, songTitle, artist })
        return res.status(200).json('Song updated')
    } catch (error) {
        return res.status(500).json(error)
    }
};

const deleteSongs = async(req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(400).json('Missing id')
    }
    try {
        Kafana.deleteSong(id)
        return res.status(200).json('Song deleted')
    } catch (error) {
        return res.status(500).json(error)
    }

};

module.exports = {
    addNewSong,
    getAllSongs,
    updateSong,
    deleteSongs,
};