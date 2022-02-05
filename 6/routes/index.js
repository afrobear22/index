const router = require('express').Router();
const { addNewSong, getAllSongs, updateSong, deleteSongs } = require('../controllers/kafana');

router.post('/kafana', addNewSong)
router.get('/kafana', getAllSongs)
router.put('/kafana', updateSong)
router.delete('/kafan', deleteSongs)
router.use((req, res) => {
    res.status(404).json('Not found');
});

module.exports = router;