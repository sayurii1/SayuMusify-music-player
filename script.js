console.log("Welcome to Musify");

//Initialise the variables
let songIndex=0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songsItems = document.getElementsByClassName('songItem');

let songs=[
    {songName:"Sirf Tujhse", filePath:"music/1.mp3", coverPath:"music/song.jpeg" },
    {songName:"O Maahi", filePath:"music/2.mp3", coverPath:"music/song1.jpeg" },
    {songName:"Apna Bana Le", filePath:"music/3.mp3", coverPath:"music/song2.jpeg" },
    {songName:"Steal the Show", filePath:"music/4.mp3", coverPath:"music/song3.jpeg" },
    {songName:"Perfect", filePath:"music/5.mp3", coverPath:"music/song4.jpeg" },
    {songName:"ilym", filePath:"music/6.mp3", coverPath:"music/song5.jpeg" }
]

//songItems.forEach((element)=>{
    //element.getElementsByTagName("img")[0].src =

//})
 //audioElement.play();


 // Handle play/pause click
 masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
    })
 //Listen to Events
 audioElement.addEventListener('timeupdate' , ()=>{
    //Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play');

    })
 }
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'music/songs/1.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        


    })

    
 })