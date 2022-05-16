let player = {
  name: "bharath rao",
  chips: 2000,
};

let cards = [];
let sum = 0;
let alive = false;
let blackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = `${player.name}  : ₹  ${player.chips}`;

function isAlive() {
  alive = false;
  message = "you're out of the game 😭";
}

function isBlackJack() {
  blackjack = true;
  message = "whoaa!! you've got a blackjack 🥳";
}
function startGame() {
  alive = true;
  let firstCard = randomNumber();
  let secondCard = randomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "  ";
  }
  sumEl.textContent = "Sum:" + sum;

  sum < 21
    ? (message = "you're still in the game!!😃")
    : sum === 21
    ? isBlackJack()
    : isAlive();

  messageEl.innerHTML = message;
}

function newCard() {
  if (alive === true && blackjack === false) {
    let card = randomNumber();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function randomNumber() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else return random;
}
