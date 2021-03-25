// Alumnos: Vanessa Machuco, Alejandro Galindo
// Ingeniería en Diseño Multimedia - Universidad Autónoma del Carmen
let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');

function open_p() {
    playlist.classList.toggle('active');
}

function sidebar() {
    options.classList.toggle('active2');
}

/*B O T O N  P L A Y*/
const music = document.querySelector("audio");
const img = document.querySelector("img")
const play_btn = document.getElementById("play_btn");
const artist = document.getElementById("artist");
const tittle = document.getElementById("tittle");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const shuffle = document.getElementById("shuffle");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_Time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [{
        name: "Genius - LSD",
        tittle: "Genius",
        artist: "LSD",
    },
    {
        name: "Memories - David Guetta",
        tittle: "Memories",
        artist: "David Guetta",
    },
    {
        name: "Alone - Marshmello",
        tittle: "Alone",
        artist: "Marshmello",
    },
    {
        name: "Sunflower - Swae Lee _ Post Malon",
        tittle: "Sunflower",
        artist: "Swae Lee & Post Malon",
    },
    {
        name: "Pero ya no - Bad Bunny",
        tittle: "Pero ya no",
        artist: "Bad Bunny",
    },


];

let isPlaying = false;
//for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play_btn.classList.replace("bx-play", "bx-pause");
    img.classList.add("anime")
};

//for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play_btn.classList.replace("bx-pause", "bx-play");
    img.classList.remove("anime")
};

play_btn.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

//Changing the music data

const loadSong = (songs) => {
    tittle.textContent = songs.tittle;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    img.src = "img/" + songs.name + ".jpg";
};

songIndex = 0;
//loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const shuffleSongs = () => {
    songIndex = (songIndex + 3) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const previousSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
//onclik  en el menu de la lista de canciones
const playThisSong = (theSong) => {
    songIndex = theSong;
    loadSong(songs[songIndex]);
    playMusic();
    open_p();
}

//progreso de la barrita
music.addEventListener("timeupdate", (Event) => {
    //console.log(event);
    const {
        currentTime,
        duration
    } = Event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;


    //duracion de la musica
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    let tot_duration = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = `${tot_duration}`;
    }

    //current duration
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);

    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }

    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;

});

//click en la funcion de progreso 
progress_div.addEventListener("click", (Event) => {
    const {
        duration
    } = music;

    let move_progress = (Event.offsetX / Event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress

});

//Siguiente cancion automatica
music.addEventListener("ended", nextSong);
next.addEventListener("click", nextSong);
shuffle.addEventListener("click", shuffleSongs);
previous.addEventListener("click", previousSong);