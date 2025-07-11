let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let volsvg=document.querySelector("#vol-svg")
let songRange=document.querySelector("#song-duration")
let musicanim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")

let index=1;
let playingSong=false;
let track=document.createElement("audio")

let songs=[
    {
        name:"Rama Rama Ratte Ratte",
        path:"rama-rama-ratate-ratate.mp3",
        image:"image-3.jpeg",
        Singer:" Samarpit The Band"
    },
    {
        name:"Phir Bhi Tumko Chaahunga",
        path:"Phir-Bhi-Tumko-Chaahunga.mp3",
        image:"image-5.jpg",
        Singer:" Arijit Singh"
    },
    {
        name:"Lag Ja Gale",
        path:"Lag-Ja-Gale.mp3",
        image:"image-2.jpg",
        Singer:"Lata Mangeshkar"
    },
    {
        name:"Sooraj Dooba Hain",
        path:"Sooraj-Dooba-Hain.mp3",
        image:"image-4.jpg",
        Singer:" Arijit Singh"
    }
]

function loadtrack(index){
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songSinger.innerHTML=songs[index].Singer;
    songImage.style=`background-image: url("${songs[index].image}")`;
    volume();
    Duration();
    setInterval(()=>{
        songRange.max=track.duration
        songRange.value=track.currentTime
    },1000)
    track.loop=true
    track.load();
}
loadtrack(index);
function playPause(){
    if(playingSong==false){
        playSong();
    }
    else{
        pauseSong()
    }
}
function playSong(){
    track.play();
    playingSong = true; 
    playPauseImg.src = "pause.svg";
    musicanim.style.display="block";
}

function pauseSong(){
    track.pause();
    playingSong = false;
    playPauseImg.src="play.svg"
    musicanim.style.display="none" ;
}
function nextSong(){
    if(index < songs.length-1){
        index++;
        loadtrack(index);
        playSong();
    }
    else{
        index=0;
        loadtrack(index); 
        playSong();
    }
}
function previousSong(){
    if(index >0){
        index--;
        loadtrack(index);
        playSong();
    }
    else{
        index=songs.length-1;
        loadtrack(index);
        playSong();
    }
}
function volume(){
    track.volume=volumeRange.value/100;  
    if(volumeRange.value == 0){
        volsvg.src="mute.svg"
    } 
    else{
        volsvg.src="volume.svg";
    }
}
function Duration(){
    track.currentTime=songRange.value;
}
playlistImg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active")
    if(playlist.classList.contains("playlist-active")){
        playlistImg.src="cross.svg"
    }
    else{
        playlistImg.src="playlist.svg"
    }
} )
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadtrack(index);
        playSong();
        playlist.classList.remove("playlist-active");
        playlistImg.src="playlist.svg"
    })
})