const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../api-specs.json');
const {
    getAllResidents,
    postAllResidents,
    putAllResidents,
    deleteResident
} = require('../handlers/residents');

const apiPrefix = process.env.API_PREFIX;

router.get(apiPrefix + '/residents', getAllResidents);
router.post(apiPrefix + '/residents', postAllResidents);
router.put(apiPrefix + '/residents/:_id', putAllResidents);
router.delete(apiPrefix + '/residents/:_id', deleteResident);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiSpecs));

module.exports = router;