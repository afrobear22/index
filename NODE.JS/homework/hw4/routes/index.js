const router = require("express").Router();
const { addNewStar, getAllStars, updateStar, deleteStar, } = require('../controllers/stars')
const { addNewPlanet, getAllPlanets, updatePlanet, deletePlanet, } = require('../controllers/planets')


// create
router.post("/stars", addNewStar);
router.post("/planets", addNewPlanet);

// read
router.get("/stars", getAllStars);
router.get("/planets", getAllPlanets);

// update
router.put("/stars", updateStar);
router.put("/planets", updatePlanet);

// delete
router.delete("/stars", deleteStar);
router.delete("/planets", deletePlanet);




router.use((req, res) => {
    res.status(404).json('Not found');
});

module.exports = router;