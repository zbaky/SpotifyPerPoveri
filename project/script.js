let playlist = [];

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
}

function addSongToPlaylist(song) {
    new Song(document.getElementById("SongName").innerHTML, document.getElementById("Artist").innerHTML);
    if (getRandomInt(0, 100) < 50) {
        playlist.push(song);
    }
}

function removeSongFromPlaylist(song) {
    const index = playlist.indexOf(song);
    if (index !== -1) {
        playlist.splice(index, 1);
    }
}

function Skip() {

}

function Curse() {

}

