const players = [
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Neymar Jr",
    goals: 35,
    assist: 120,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
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
perPlayerForm.onsubmit = handleCalculate;
totalCostForm.onsubmit = handleTotalCost;
