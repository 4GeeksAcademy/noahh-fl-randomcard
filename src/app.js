import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  const suits = ["♥", "♠", "♣", "♦"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector(".top-left").innerHTML = randomSuit;
  document.querySelector(".middle").innerHTML = randomNumber;
  document.querySelector(".bottom-right").innerHTML = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document
      .querySelectorAll(".suit")
      .forEach(suit => (suit.style.color = "red"));
  } else {
    document
      .querySelectorAll(".suit")
      .forEach(suit => (suit.style.color = "black"));
  }
};
