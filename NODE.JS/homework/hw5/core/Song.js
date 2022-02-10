let songs = [{
    id: 1,
    name: "Gold on the Ceiling",
    genre: "Rock",
    releaseDate: "2016-08-29T09:12:33.001Z",
    artist: {
        id: 1,
        name: "The Black Keys"
    }
}];

let artists = [{
    id: 1,
    name: "The Black Keys"
}];

const getAllSongs = async() => {
    return songs;
}

const addNewSong = async({ name, genre, releaseDate, artist }) => {
    // i did this because sometimes we have new songs by the same artist, artist doesnt need to have the same ID as song
    const newArtist = {
        id: artists.length + 1,
        name: artist.name
    };
    artists.push(newArtist);

    const newSong = {
        id: songs.length + 1,
        name,
        genre,
        releaseDate,
        artist: newArtist
    }
    songs.push(newSong);
};

const getASong = async(id) => {
    return songs.find((song) => song.id === id);
}

const updateSong = async({ id, name, genre, releaseDate, artist }) => {
    songs = songs.map(song => {
        if (song.id === id) {
            return {
                id: song.id,
                name,
                genre,
                releaseDate,
                artist
            }
        }
        return song;
    })
}

const deleteSong = async(id) => {
    songs = songs.filter(song => song.id !== id);
};

module.exports = {
    getAllSongs,
    addNewSong,
    getASong,
    updateSong,
    deleteSong,
};