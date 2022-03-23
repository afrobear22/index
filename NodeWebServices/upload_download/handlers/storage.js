const fs = require('fs');
const path = require('path');
const strings = require('../pkg/strings');

const MAX_FILESIZE = 1048576; // 1024 * 1024 = 1mb
const ALLOWED_FILETYPES = ['image/jpeg', 'image/png', 'image/pjpeg', 'image/gif'];

const upload = async(req, res) => {
    // console.log(req.files)
    if (MAX_FILESIZE < req.files.document.size) {
        return res.status(400).send('File exceeds max file size!');
    }

    if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
        return res.status(400).send('File type not valid!');
    }

    let userDir = `user_${req.user.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;

    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }

    let fileName = `${strings.makeID(6)}_${req.files.document.name}`
    let filePath = `${userDirPath}/${fileName}`;
    req.files.document.mv(filePath, err => {
        if (err) {
            return res.status(500).send('Internal server error.');
        }
        res.status(201).send({ file_name: fileName });
    });
};
const download = async(req, res) => {
    let userDir = `user_${req.user.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found');
    }
    res.download(filePath);
};


const listFiles = async(req, res) => {
    let userDir = `user_${req.user.id}`;
    // let userDirPath = `${__dirname}/../uploads/${userDir}`;
    // let filePath = `${userDirPath}/${req.params.filename}`;
    const directoryPath = path.join(`${__dirname}/../uploads`, userDir);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Internal server error.');
        }
        files.forEach(file => {
            res.status(200).send(file);
        });
    });
};


const removeFile = async(req, res) => {
    let userDir = `user_${req.user.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(500).send('Internal server error.');
        }
        res.status(200).send('File deleted!')
    });

};

module.exports = {
    upload,
    download,
    listFiles,
    removeFile
};