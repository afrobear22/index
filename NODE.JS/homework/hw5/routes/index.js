const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../homework.json');
const { getAllSongs, postAllSongs, getASong, putAllSongs, deleteSong } = require('../handlers/songs')
    // const { getAllArtists, postAllArtists, putAllArtists, deleteArtist} = require('../handlers/artists')
const apiPrefix = process.env.API_PREFIX;

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiSpecs));

router.get(apiPrefix + '/songs', getAllSongs);
router.post(apiPrefix + '/songs', postAllSongs);
router.get(apiPrefix + '/songs/:id', getASong);
router.put(apiPrefix + '/songs/:id', putAllSongs);
router.delete(apiPrefix + '/songs/:id', deleteSong);

// router.get(apiPrefix + '/artists', getAllArtists);
// router.post(apiPrefix + '/artists', postAllArtists);
// router.get(apiPrefix + '/artists/:{id}', getAllArtists);
// router.put(apiPrefix + '/artists/:{id}', putAllArtists);
// router.delete(apiPrefix + '/artists/:{id}', deleteArtist);

router.use((req, res) => {
    return res.status(404).json('Not found.');
});

module.exports = router;