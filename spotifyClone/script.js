console.log("welcome to your music player");
// targeting the main pause button
var mainPlayButton = document.getElementById("masterPlay");
var finalS;
// stopping all audios when shuffling between them
var allAudios=document.getElementsByClassName('playingAudio');
function stopAllAudios(){
  for(var i=0;i<allAudios.length;i++){
    allAudios[i].pause();
  }
}

// functions to play the audios,display song name and update the pause/play icons
function playBms(){
  stopAllAudios();
  var bmssong = document.getElementById('bmsAudio');
  bmssong.play();
  document.getElementById("currentSongName").innerHTML="Break My Stride";
  window.finalS=bmssong;
  mainPlayButton.classList.remove('fa-circle-play');
  mainPlayButton.classList.add('fa-pause');
}

function playVienna(){
  stopAllAudios();
  var viennasong = document.getElementById('viennaAudio');
  viennasong.play();
  document.getElementById("currentSongName").innerHTML="Vienna";
  window.finalS=viennasong;
  mainPlayButton.classList.remove('fa-circle-play');
  mainPlayButton.classList.add('fa-pause');
}

function playCr(){
  stopAllAudios();
  var crsong = document.getElementById('crAudio');
  crsong.play();
  document.getElementById("currentSongName").innerHTML="Country Roads";
  window.finalS=crsong;
  mainPlayButton.classList.remove('fa-circle-play');
  mainPlayButton.classList.add('fa-pause');
}

function playKasoor(){
  stopAllAudios();
  var kasoorsong = document.getElementById('kasoorAudio');
  kasoorsong.play();
  document.getElementById("currentSongName").innerHTML="Kasoor";
  window.finalS=kasoorsong;
  mainPlayButton.classList.remove('fa-circle-play');
  mainPlayButton.classList.add('fa-pause');
}

function playTsh(){
  stopAllAudios();
  var tshsong = document.getElementById('tshAudio');
  tshsong.play();
  document.getElementById("currentSongName").innerHTML="Tum Se Hi";
  window.finalS=tshsong;
  mainPlayButton.classList.remove('fa-circle-play');
  mainPlayButton.classList.add('fa-pause');
}

function playKhnh(){
  stopAllAudios();
  var khnhsong = document.getElementById('khnhAudio');
  khnhsong.play();
  document.getElementById("currentSongName").innerHTML="Kal Ho Na Ho";
  window.finalS=khnhsong;
  mainPlayButton.classList.remove('fa-circle-play');
  mainPlayButton.classList.add('fa-pause');
}



mainPlayButton.addEventListener('click',()=>{
  if(finalS.paused || finalS.currentTime<=0){
    mainPlayButton.classList.remove('fa-circle-play');
    mainPlayButton.classList.add('fa-pause');
    finalS.play();
  }else{
    mainPlayButton.classList.remove('fa-pause');
    mainPlayButton.classList.add('fa-circle-play');
    finalS.pause();
}

});


//updating the seekbar as audio file plays

var playingAudios = document.getElementsByClassName("playingAudio");

var audioLengths=playingAudios.length;


for(var i=0;i<audioLengths;i++){
  playingAudios[i].addEventListener('timeupdate',()=>{
    console.log('timeupdate');

      var songBar=document.getElementById('currentSongBar');
        var progress = parseInt((finalS.currentTime/finalS.duration)*100);
      songBar.value=progress;

      songBar.addEventListener('change',()=>{
        finalS.currentTime=songBar.value*finalS.duration/100;
      });

  });

}

//function for previous song icon
function previous(){
  finalS.pause();
  finalS.currentTime=0;
  var cs=document.getElementById('currentSongName').innerHTML;
  if(cs=="Break My Stride"){
    playKhnh();
  }else if(cs=="Vienna"){
    playBms();
  }else if(cs=="Country Roads"){
    playVienna();
  }else if (cs=="Kasoor") {
    playCr();
  }else if (cs=="Tum Se Hi") {
    playKasoor()
  }else if (cs=="Kal Ho Na Ho") {
    playTsh()
  }
}

//function for next song icon
function next(){
  finalS.pause();
  finalS.currentTime=0;
  var cs=document.getElementById('currentSongName').innerHTML;
  if(cs=="Break My Stride"){
    playVienna()
  }else if(cs=="Vienna"){
    playCr();
  }else if(cs=="Country Roads"){
    playKasoor();
  }else if (cs=="Kasoor") {
    playTsh();
  }else if (cs=="Tum Se Hi") {
    playKhnh();
  }else if (cs=="Kal Ho Na Ho") {
    playBms();
  }
}
