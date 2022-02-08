let stars = [{
    id: 1,
    starName: 'Sirius'
}, {
    id: 2,
    starName: 'Bellatrix'
}];


const addStar = async({ starName }) => {
    const newStar = {
        id: stars.length + 1,
        starName: starName,
    }

    stars.push(newStar)
};

const getStars = async() => {
    return stars;
};

const editStar = async({ id, starName }) => {
    stars = stars.map(shine => {
        if (shine.id === id) {
            return {
                id: shine.id,
                starName,
            }
        }
        return shine;
    })
};

const deleteStar = async(id) => {
    stars = stars.filter((shine) => shine.id !== id)
};

module.exports = {
    addStar,
    getStars,
    editStar,
    deleteStar,
}