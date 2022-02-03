const router = require("express").Router();

router.get('/home', (req, res) => {
    return res.status(200).json('Hello you are on homepage!')
});

router.post('/register', (req, res) => {
    if (req.body) {
        body = { username: "", password: "" }
        return res.status(201).json('Registration was successful.')
    }
});

router.use((req, res) => {
    return res.status(404).json('Not found')
});
module.exports = router;