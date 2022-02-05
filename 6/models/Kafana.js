let kafanaSongs = [{
    id: 1,
    songTitle: 'Za Liljanu',
    artist: 'Toma Zdravkovic',
}, ];


const addSong = async({ songTitle, artist }) => {
    const newSong = {
        id: kafanaSongs.length + 1,
        songTitle: songTitle,
        artist: artist
    }

    kafanaSongs.push(newSong);

};

const getSongs = async() => {
    return kafanaSongs;
};

const editSong = async({ id, songTitle, artist }) => {
    kafanaSongs = kafanaSongs.map(pesna => {
        if (pesna.id === id) {
            return {
                id: pesna.id,
                songTitle,
                artist
            }
        }
        return pesna;
    });
};

const deleteSong = async(id) => {
    kafanaSong = kafanaSongs.filter((pesna) => pesna.id !== id);
};

module.exports = {
    addSong,
    getSongs,
    editSong,
    deleteSong,
};