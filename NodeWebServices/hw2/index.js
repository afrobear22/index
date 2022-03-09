const fs = require('fs');
const express = require('express');


const api = express();


const readData = (pathFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${pathFile}.json`, 'utf8', (err, data) => {
            if (err) return reject(err);
            let content = JSON.parse(data);
            return resolve(content);
        });
    });
};

const writeData = (pathFile, data) => {
    return new Promise((resolve, reject) => {
        let content = JSON.stringify(data);
        fs.writeFile(`${pathFile}.json`, content, err => {
            if (err) return reject(err);
            return resolve();
        });
    });
};


const createPerson = async(first_name, last_name) => {
    try {
        let person = {
            first_name: first_name,
            last_name: last_name
        };
        let data = await readData('./data');
        data.push(person);
        await writeData('./data', data);
    } catch (error) {
        throw (err);
    }
};


const deletePerson = async(idx) => {
    try {
        let data = await readData('./data');
        let out = data.filter((_, i) => idx !== i);
        await writeData('./data', out);
    } catch (err) {
        throw (err);
    }
};

const updatePerson = async(idx, { first_name, last_name }) => {
    let data = await readData('./data');

    try {
        let update = data.map((person, index) => {
            if (idx === index) {
                person = {
                    first_name,
                    last_name,
                };
            };
            return person;
        });
        await writeData('./data', update);
    } catch (err) {
        throw (err);
    }
};





api.use(express.json());

api.get('/users', async(req, res) => {
    try {
        let data = await readData('./data');
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

api.post('/users', async(req, res) => {
    const { first_name, last_name } = req.body;

    if (!first_name || !last_name) {
        return res.status(400).send('Missing data!')
    }

    try {
        createPerson(first_name, last_name);
        return res.status(201).send('Person created!');
    } catch (error) {
        console.log(err);
        return res.status(500).send('Server error!')
    }
});

api.delete('/users/:index', async(req, res) => {
    const idx = Number(req.params.idx)
    try {
        deletePerson(idx);
        return res.status(200).send('Person deleted!')
    } catch (error) {
        console.log(err);
        return res.status(500).send('Server error!')
    }
});

api.put('/users/:index', async(req, res) => {
    const idx = Number(req.params.idx);
    const { first_name, last_name } = req.body;

    if (!first_name || !last_name) {
        return res.status(400).send('Missing data!')
    }
    try {
        updatePerson(idx, { first_name, last_name });
        return res.status(200).send('Person updated')
    } catch (error) {
        console.log(err);
        return res.status(500).send('Server error!')
    }

});




api.listen(8000, err => {
    if (err) return console.log(err);
    console.log('Server successfully started!');
});