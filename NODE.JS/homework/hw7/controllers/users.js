const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createToken } = require('../middlewares/jwt');

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

const registerUser = async(req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email) {
        return res.status(400).json('Username and email must be provided!');
    }

    if (!password || password.length < 6) {
        return res.status(400).json('Password must be at least 6 characters');
    }

    try {
        const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        await User.create({ username, email, password: encryptedPassword });
        return res.status(201).json('User created!');
    } catch (error) {
        return res.status(500).json('User could not be created.');
    }
};


const login = async(req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json('Invalid credentials!');
    }

    try {
        const user = await User.findOne({ username, email });
        if (!user) {
            return res.status(400).json('User or email does not exist!');
        }

        await bcrypt.compare(password, user.password);

        const token = createToken(user.username, user.email, user._id);
        return res.status(200).json(token);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    registerUser,
    login,
};