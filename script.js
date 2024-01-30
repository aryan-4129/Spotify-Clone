audioElement = new Audio("songs/1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let playingGif = document.querySelector("#playingGif");
let myprogressBar = document.querySelector("#myprogressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songIndex = 0;

let songs = [
    { songName: "Arjan Vailly ", coverPath: "covers/1.jpeg", songsPath: "songs/1.mp3" },
    { songName: "Ram Siya Ram", coverPath: "covers/2.jpeg", songsPath: "songs/2.mp3" },
    { songName: "Ordinary Person Leo", coverPath: "covers/3.jpeg", songsPath: "songs/3.mp3" },
    { songName: "Badass Leo", coverPath: "covers/4.jpeg", songsPath: "songs/4.mp3" },
    { songName: "Nit Khair Manga ", coverPath: "covers/5.jpeg", songsPath: "songs/5.mp3" },
    { songName: "Apa Fer Milangey", coverPath: "covers/6.jpeg", songsPath: "songs/6.mp3" },
    { songName: "Heroine Bhojpuri Song", coverPath: "covers/7.jpeg", songsPath: "songs/7.mp3" },
    { songName: "Pehle Bhi Main By Vishal", coverPath: "covers/8.jpeg", songsPath: "songs/8.mp3" },
    { songName: "Rafta Rafta Woh Mere", coverPath: "covers/9.jpeg", songsPath: "songs/9.mp3" },
    { songName: "Teri Deewani By Kailash kher", coverPath: "covers/10.jpeg", songsPath: "songs/10.mp3" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    console.log(element);

});
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        playingGif.style = "opacity:1";

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        playingGif.style = "opacity:0";

    }
})

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener("change", () => {
    audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
})

const makeallPlay = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.add("fa-pause");
        e.target.classList.remove("fa-play");
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        playingGif.style.opacity = 1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        document.querySelector(".songNameBottom").innerText = songs[songIndex - 1].songName;

    })
})

document.getElementById("previous").addEventListener("click", (e) => {
    if (songIndex === 1) {
        songIndex = 10;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    document.querySelector(".songNameBottom").innerText = songs[songIndex - 1].songName;
    makeallPlay();
    document.getElementById(songIndex).classList.add("fa-pause");
    document.getElementById(songIndex).classList.remove("fa-play");


})
document.getElementById("forward").addEventListener("click", (e) => {
    if (songIndex == 10) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    document.querySelector(".songNameBottom").innerText = songs[songIndex - 1].songName;
    makeallPlay();
    document.getElementById(songIndex).classList.add("fa-pause");
    document.getElementById(songIndex).classList.remove("fa-play");


})

