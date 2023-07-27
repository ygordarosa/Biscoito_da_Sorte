const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3")
const imgCookie = document.querySelector("#fortuneCookie");
const tryAgainLuck = document.querySelector("#tryAgainLuck");
const tryAgainUnluck = document.querySelector("#tryAgainUnluck");
let luck  = Math.round(Math.random() * 10);

imgCookie.addEventListener('click', luckTest);
tryAgainLuck.addEventListener('click', tryAgainToggle);
tryAgainUnluck.addEventListener('click', tryAgainToggle);

function tryAgainToggle(event) {
  event.preventDefault();

  if(luck >= 5 ){
    luckToggle();
  }
  else {
    unluckToggle();
  }
  luck  = Math.round(Math.random() * 10);
}

function luckTest() {
  
  if(luck >= 5){
    luckToggle();
  }
  else {
    unluckToggle();
  }
}

function luckToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function unluckToggle() {
  screen1.classList.toggle("hide");
  screen3.classList.toggle("hide");
}