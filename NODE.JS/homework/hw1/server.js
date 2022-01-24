const sportPeople = require('./sports');

sportPeople
    .addNewSportman({ name: 'Goran Pandev', sport: 'Football', age: 38 })
    .then(() => {
        return sportPeople.getAllSportman();
    })
    .then((sports) => {
        console.log(sports);
    })
    .catch((error) => {
        console.log(error);
    });


sportPeople
    .updateSportman(5, { name: 'Rafael Nadal', sport: 'Tennis', age: 35 })
    .then(() => {
        return sportPeople.getAllSportman();
    })
    .then((sports) => {
        console.log(sports);
    })
    .catch((error) => {
        console.log(error);
    });

sportPeople
    .deleteSportman(4)
    .then(() => {
        return sportPeople.getAllSportman();
    })
    .then((sports) => {
        console.log(sports);
    })
    .catch((error) => {
        console.log(error);
    });


sportPeople
    .getAllSportman()
    .then((sports) => {
        console.log(sports);
    })
    .catch((error) => {
        console.log(error);
    });