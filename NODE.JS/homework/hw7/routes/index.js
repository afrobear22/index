const router = require('express').Router();
const {
    registerUser,
    login,
} = require('../controllers/users');
const {
    allEntries,
    bulkInsert,
    updateEntry,
    deleteEntry,
} = require('../controllers/products');
const { authMiddleware } = require('../middlewares/jwt');

const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + '/register', registerUser);
router.post(PREFIX + '/login', login);

router.get(PREFIX + '/products', authMiddleware, allEntries);
router.post(PREFIX + '/products', authMiddleware, bulkInsert)
router.put(PREFIX + '/products/:_id', authMiddleware, updateEntry);
router.delete(PREFIX + '/products/:_id', authMiddleware, deleteEntry);

router.use((req, res) => {
    return res.status(404).json('Not Found!');
});

module.exports = router;