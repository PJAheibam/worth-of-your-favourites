const players = [
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/messi.webp",
  },
  {
    name: "Cristiano Ronaldo",
    goals: 35,
    assist: 120,
    imgUrl: "./assets/img/players/ronaldo.jpg",
  },
  {
    name: "R. Lewandowski",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/lewandowski.webp",
  },
  {
    name: "Kylian Mbappé",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/kylian.avif",
  },
  {
    name: "Neymar Jr",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/neymar.jpg",
  },
  {
    name: "Erling Haaland",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/erling.jpeg",
  },
  {
    name: "Mohamed Salah",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/salah.webp",
  },
  {
    name: "Kevin De Bruyne",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/kevin.jpg",
  },
  {
    name: "Virgil van Dijk",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/virgil.avif",
  },
  {
    name: "Karim Benzema",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/karim.jpg",
  },
  {
    name: "Alexander-Arnold",
    goals: 36,
    assist: 126,
    imgUrl: "./assets/img/players/trent.jpg",
  },
  {
    name: "Riyad Mahrez",
    goals: 36,
    assist: 126,
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
