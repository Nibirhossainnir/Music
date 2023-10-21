var song = ["bgmusic.mp3","fgmusic.mp3","y2mate.com -  Paka Poka  SLOWED REMIX.mp3","y2mate.com - Instant Kill.mp3","y2mate.com - Kejoo Beats  Chaos.mp3"];
var audioTag = document.getElementById("audio");
var progress = document.getElementById("progress");
audio.onloadedmetadata = function(){
  progress.max = audio.duration;
  progress.value = audio.currentTime;
}
function rangeSlide(value){
  document.getElementById('rangeValue').innerHTML = value;
}
if(audio.play()){
  setInterval(()=>{
      progress.value= audio.currentTime;
  },700);
  
}
progress.onchange = function(){
  audio.play();
  audio.currentTime = progress.value;

}

var count = 0;

function next(){
  count++;
  
  if(count>=song.length){
    count = 0;
    audioTag.src = song[count];
    audio.play();
}
else{
  audioTag.src = song[count];
  audio.play();
}
}
function prev(){
  count--;
  if(count<0){
    count = song.length -1;
    audioTag.src = song[count];
    audio.play();
}
else{
  audioTag.src = song[count];
  audio.play();
}
}