/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardtype = ["Hearts", "Spades", "Clubs", "Diamonds"];

const cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
const card = document.getElementById("card");
const changeButton = document.getElementById("changeCardButton");
const cardWidth = document.getElementById("cardWidth");
const cardHeight = document.getElementById("cardHeight");

function shuffle() {
  const cardHeader = document.getElementById("cardHeader");
  const cardBody = document.getElementById("cardValue");
  const cardFooter = document.getElementById("cardFooter");

  const cardTypeIndex = Math.floor(Math.random() * cardtype.length);
  const cardValueIndex = Math.floor(Math.random() * cardValue.length);

  const cardTypeValue = cardtype[cardTypeIndex];
  const cardValueContent = cardValue[cardValueIndex];

  switch (cardTypeValue) {
    case "Hearts":
      cardHeader.innerHTML =
        '<i class="bi bi-heart-fill" style="font-size: 5em;color: red;"></i>';
      cardFooter.innerHTML =
        '<i class="bi bi-heart-fill" style="font-size: 5em;transform: rotate(180deg);color: red;"></i>';

      break;
    case "Spades":
      cardHeader.innerHTML =
        '<i class="bi bi-suit-spade-fill" style="font-size: 5em;"></i>';
      cardFooter.innerHTML =
        '<i class="bi bi-suit-spade-fill" style="font-size: 5em;transform: rotate(180deg);"></i>';
      break;
    case "Clubs":
      cardHeader.innerHTML =
        '<i class="bi bi-suit-club-fill" style="font-size: 5em;"></i>';
      cardFooter.innerHTML =
        '<i class="bi bi-suit-club-fill" style="font-size: 5em;transform: rotate(180deg);"></i>';
      break;
    case "Diamonds":
      cardHeader.innerHTML =
        '<i class="bi bi-gem" style="font-size: 5em;color: cornflowerblue;"></i>';
      cardFooter.innerHTML =
        '<i class="bi bi-gem" style="font-size: 5em;transform: rotate(180deg);color: cornflowerblue;"></i>';
      break;
  }

  cardBody.innerText = cardValueContent;
}

window.onload = function() {
  cardHeight.setAttribute("value", card.clientHeight);
  cardWidth.setAttribute("value", card.clientWidth);

  shuffle();
};

changeButton.addEventListener("click", () => {
  shuffle();
});

cardHeight.addEventListener("input", e => {
  card.style.height = e.target.value + "px";
});

cardWidth.addEventListener("input", e => {
  card.style.width = e.target.value + "px";
});

setInterval(() => {
  shuffle();
}, 10000);
