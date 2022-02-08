let planets = [{
    id: 1,
    planetName: 'Mars'
}, {
    id: 2,
    planetName: 'Neptune'
}];


const addPlanet = async({ planetName }) => {
    const newPlanet = {
        id: planets.length + 1,
        planetName: planetName,
    }

    planets.push(newPlanet)
};

const getPlanets = async() => {
    return planets;
};

const editPlanet = async({ id, planetName }) => {
    planets = planets.map(orbit => {
        if (orbit.id === id) {
            return {
                id: orbit.id,
                planetName,
            }
        }
        return orbit;
    })
};

const deletePlanet = async(id) => {
    planets = planets.filter((orbit) => orbit.id !== id)
};

module.exports = {
    addPlanet,
    getPlanets,
    editPlanet,
    deletePlanet,
}