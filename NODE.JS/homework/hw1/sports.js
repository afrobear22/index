let sportPeople = [{
        id: 1,
        name: "Michael Jordan",
        sport: "Basketball",
        age: 58
    },
    {
        id: 2,
        name: "LeBron James",
        sport: "Basketball",
        age: 37
    },
    {
        id: 3,
        name: "Cristiano Ronaldo",
        sport: "Football",
        age: 36
    },
    {
        id: 4,
        name: "Tom Brady",
        sport: "Rugby",
        age: 44
    },
    {
        id: 5,
        name: "Novak Djokovic",
        sport: "Tennis",
        age: 34
    },
    {
        id: 6,
        name: "Kiril Lazarov",
        sport: "Handball",
        age: 41
    }
];


const addNewSportman = async(newSportmanInfo) => {
    const newSportman = {
        id: sportPeople.length + 1,
        name: newSportmanInfo.name,
        sport: newSportmanInfo.sport,
        age: newSportmanInfo.age
    }
    sportPeople.push(newSportman);
}

const getAllSportman = async() => {
    return sportPeople;
}

const updateSportman = async(argumentId, newInfoForSportman) => {
    sportPeople = sportPeople.map((sport) => {
        if (sport.id === argumentId) {
            return {
                id: sport.id,
                name: newInfoForSportman.name,
                sport: newInfoForSportman.sport,
                age: newInfoForSportman.age,
            };
        } else {
            return sport;
        }
    })
}

const deleteSportman = async(targetIdForDeletion) => {
    sportPeople = sportPeople.filter((sport) => sport.id !== targetIdForDeletion)
}

module.exports = {
    getAllSportman,
    addNewSportman,
    updateSportman,
    deleteSportman,
};