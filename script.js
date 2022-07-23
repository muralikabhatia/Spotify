console.log("Welcome to Spotify");

//Intializing variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ranjha", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
]

// audioElement.play();

//Listen to events
document.addEventListener('time');
