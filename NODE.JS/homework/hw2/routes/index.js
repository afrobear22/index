const router = require("express").Router();

const fileSystemOps = require("../fileSystem");

const path = require("path");

const pathToFile = path.join(__dirname, "random.txt");

router.post('/file', (req, res) => {
    const data = req.body.data;
    fileSystemOps(pathToFile, data)
        .then((dataOperation) => {
            return res
                .status(200)
                .json(dataOperation)
        })
        .catch((err) => {
            return res
                .status(500)
                .json(err)
        })
})

router.get('/file', (req, res) => {})


module.exports = router;