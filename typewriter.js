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
  iterator = 0; // Den skal starte med færste bogstav, hvilket har nummer 1.
  loop(); // Kalder på  loopet
}

function loop() {
  console.log("Loop", iterator); // Iterator viser hvilket nummer bogstav/karakter vi arbejder med
  iterator++; // Plusser én til hver gang loopet har kørt

  // Så længe iterator er mindre end eller lig med antallet af bogstaver/karaktere
  if (iterator <= maxNumbersOfIterations) {
    setTimeout(loop, 650); // Sætter delay på loopet (0,65 sekunder)
  }
  output = typewriter.substring(iterator, 0);
  // ^^ Med substing laver vi en ny string, og med paranteserne vælger vi hvilket tegn fra den nuværende teskt der skal udskrives.
  // ^^ Laver substring og udskriver til og med det tegn vi er kommet til. Vi siger den skal "stoppe" ved 0, da vi gerne vil have udskrevet alt det inden det aktuelle tegn også.
  console.log(output); // Udskriver den aktuelle tekst i konsollen
  document.querySelector("#typewriter").textContent = output; // Sætter h1 = output
}
