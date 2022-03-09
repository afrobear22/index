const mongoose = require('mongoose');

const host = 'cluster0.pdohn.mongodb.net';
const username = 'blaze';
const password = 'blaze123';
const dbname = 'movies';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;


mongoose.connect(
    DSN, { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            return console.log('No connection');
        }
        console.log('Successfully connected')
    }
);