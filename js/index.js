const players = [
  {
    name: "Lionel Messi",
    goals: 42,
    assist: 145,
    imgUrl: "./assets/img/players/messi.webp",
  },
  {
    name: "Cristiano Ronaldo",
    goals: 40,
    assist: 149,
    imgUrl: "./assets/img/players/ronaldo.jpg",
  },
  {
    name: "R. Lewandowski",
    goals: 35,
    assist: 134,
    imgUrl: "./assets/img/players/lewandowski.webp",
  },
  {
    name: "Kylian Mbappé",
    goals: 37,
    assist: 126,
    imgUrl: "./assets/img/players/kylian.avif",
  },
  {
    name: "Neymar Jr",
    goals: 32,
    assist: 128,
    imgUrl: "./assets/img/players/neymar.jpg",
  },
  {
    name: "Erling Haaland",
    goals: 34,
    assist: 138,
    imgUrl: "./assets/img/players/erling.jpeg",
  },
  {
    name: "Mohamed Salah",
    goals: 38,
    assist: 146,
    imgUrl: "./assets/img/players/salah.webp",
  },
  {
    name: "Kevin De Bruyne",
    goals: 21,
    assist: 135,
    imgUrl: "./assets/img/players/kevin.jpg",
  },
  {
    name: "Virgil van Dijk",
    goals: 30,
    assist: 121,
    imgUrl: "./assets/img/players/virgil.avif",
  },
  {
    name: "Karim Benzema",
    goals: 31,
    assist: 136,
    imgUrl: "./assets/img/players/karim.jpg",
  },
  {
    name: "Alexander-Arnold",
    goals: 29,
    assist: 130,
    imgUrl: "./assets/img/players/trent.jpg",
  },
  {
    name: "Riyad Mahrez",
    goals: 25,
    assist: 150,
    imgUrl: "./assets/img/players/riyad.jpeg",
  },
];

function showPlayers() {
  for (const player of players) {
    addPlayerToTheList(player);
  }
}

showPlayers();

// event listeners
playersContainer.addEventListener("click", handleClick);
perPlayerForm.addEventListener("submit", handleCalculate);
// maxWarningModal.addEventListener("click", handleMaxWarning);
totalCostForm.onsubmit = handleTotalCost;
