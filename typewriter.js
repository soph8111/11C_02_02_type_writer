"use strict";

const typewriter = document.querySelector(".typewritten").textContent; // Henter tekst der skal udskrives

// Opretter variabler
let maxNumbersOfIterations; // Variabel der skal tælles på
let iterator;
let output;

init();

function init() {
  maxNumbersOfIterations = typewriter.length; // Loopet skal køre det antal gange, som teksten indholder karakterer.
  console.log(maxNumbersOfIterations); // 44 gange
  iterator = 0;
  loop();
}

function loop() {
  console.log("Loop", iterator);
  iterator++; // Plusser én til hver gang loopet har kørt

  if (iterator <= maxNumbersOfIterations) {
    setTimeout(loop, 650);
  }
  output = typewriter.substring(iterator, 0);
  console.log(output);
  document.querySelector("#typewriter").textContent = output;
}
