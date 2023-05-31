const pelota = document.getElementById("pelota");

let Pos = 0;
let temporizador;

const play = document.getElementById("play")

play.addEventListener("click", function () {
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    if (Pos == 400) { Pos = 0;}
    Pos += 5;
    pelota.style.left = Pos + "px";
  }, 25);
  
  pelota.style.backgroundColor = 'greenyellow';
});

const pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  setTimeout(function () {
    clearInterval(temporizador);
    
  }, 0);
  
  pelota.style.backgroundColor = 'red';
});

const stop = document.getElementById("stop");

stop.addEventListener("click", function () {
  setTimeout(function () {
    clearInterval(temporizador);
  }, 0);
  Pos = 0
  pelota.style.left = Pos + "px";
  pelota.style.backgroundColor = 'red';
});

const reverse = document.getElementById("reverse");

reverse.addEventListener("click", function () {
  clearInterval(temporizador)
  temporizador = setInterval(() => {
    if (Pos == 0){ Pos = 400;}
    Pos -= 5;
    pelota.style.left = Pos + "px";
  }, 25);
  pelota.style.backgroundColor = 'greenyellow';
});

var btnColor = document.getElementById('color');

btnColor.onclick = function cambiarColor(){
    pelota.style.backgroundColor = 'black';
}


