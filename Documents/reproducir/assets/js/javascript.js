
function playaudio() {
  document.getElementById('miaudio').play();
}
function detener() {
  document.getElementById('miaudio').load();

}
function stopaudio() {
  document.getElementById('miaudio').pause();
}
function subirvolumen() {
  document.getElementById('miaudio').volume +=0.1;
}
function bajarvolumen() {
  document.getElementById('miaudio').volume -=0.1;
}
function adelantar() {
document.getElementById('miaudio').currentTime+=5;
}
function atras(){
document.getElementById('miaudio').currentTime-=5;

}
function barra() {
  var x =document.getElementById('miaudio').currentTime;
  console.log(x);
}
function progress()    {
        var progreso = document.getElementById('myProgress');
        progreso.animate(currentTime);
        progreso.max = miaudio.duration;
        progreso.value = miaudio.currentTime;
    }
    progress();
  
