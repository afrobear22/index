const jwt = require('jsonwebtoken');
const express = require('express');


const createToken = (username, email, id) => {
    return jwt.sign({ username, email, id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

const tokenVerifier = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

const authMiddleware = async(req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json('Not available, need to register or log in!');
    }
    const [bearer, token] = auth.split(' ');

    try {
        tokenVerifier(token);
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json('Unauthenticated!');
    }
};

module.exports = {
    createToken,
    tokenVerifier,
    authMiddleware,
};