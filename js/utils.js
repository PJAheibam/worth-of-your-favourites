// variables
let selectedTotalPlayer = 0;
const playersContainer = document.getElementById("players");
const perPlayerCost = document.getElementById("per-player-cost");
const playerExpenses = document.getElementById("player-expenses");
const perPlayerForm = document.getElementById("per-player-form");
const totalCostForm = document.getElementById("total-cost-form");
const managerCost = document.getElementById("manager-cost");
const coachCost = document.getElementById("coach-cost");
const totalCost = document.getElementById("total-cost");

function addPlayerToTheList(player) {
  const goals = document.createElement("p");
  goals.classList.add("text");
  goals.innerText = player.goals + " goals";

  const circle = document.createElement("span");
  circle.classList.add("circle");

  const assist = document.createElement("p");
  assist.innerText = player.assist + " assit";

  const subTitleContainer = document.createElement("div");
  subTitleContainer.classList.add("sub-title-container");

  const coverImage = document.createElement("div");
  coverImage.classList.add("cover-image");
  coverImage.style.backgroundImage = player.imgUrl;

  //content
  const content = document.createElement("div");
  content.classList.add("content");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = player.name;

  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = "Select";

  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  subTitleContainer.appendChild(goals);
  subTitleContainer.appendChild(circle);
  subTitleContainer.appendChild(assist);

  content.appendChild(title);
  content.appendChild(subTitleContainer);

  gridItem.appendChild(coverImage);
  gridItem.appendChild(content);
  gridItem.appendChild(button);

  playersContainer.appendChild(gridItem);
}

// click handlers //
function handleClick(e) {
  if (selectedTotalPlayer === 5) return;

  const element = e.target;
  if (element.localName === "button") {
    const playerName = element.previousSibling.children[0].innerText;
    const selected = document.getElementById("selected-list");
    // 1st approach
    // for (const listItem of selected.children) {
    //   // console.log(listItem.children[1].innerText.toLowerCase());
    //   if (listItem.children[1].innerText.toLowerCase() === "empty") {
    //     listItem.classList.add("active");
    //     listItem.children[1].innerText = playerName;

    //     const check = document.createElement("div");
    //     check.classList.add("check");

    //     element.innerText = "selected";
    //     element.setAttribute("disabled", "true");
    //     element.appendChild(check);
    //     selectedTotalPlayer++;
    //     break;
    //   }
    // }

    // 2nd approach start
    selected.children[selectedTotalPlayer].classList.add("active");
    selected.children[selectedTotalPlayer].children[1].innerText = playerName;

    element.innerHTML = `
      <div class="check"></div>
      Selected
    `;
    element.setAttribute("disabled", "true");
    selectedTotalPlayer++;
    //2nd approach end
  }
}

function handleCalculate(e) {
  e.preventDefault();

  // playerExpenses.parentElement.style.color = "var(--font-primary)";
  playerExpenses.parentElement.classList.add("font-glow-success");
  playerExpenses.innerText = parseFloat(
    (parseFloat(perPlayerCost.value) * selectedTotalPlayer).toFixed(2)
  );
  playerExpenses.style.color = "var(--font-primary)";
  playerExpenses.style.textShadow = "none";
}

function handleTotalCost(e) {
  e.preventDefault();
  perPlayerForm.onsubmit = handleCalculate(e);
  const totalExpense =
    parseFloat(managerCost.value) +
    parseFloat(coachCost.value) +
    parseFloat(playerExpenses.innerText);
  totalCost.parentElement.classList.add("font-glow-success");
  totalCost.style.color = "var(--font-primary)";
  totalCost.style.textShadow = "none";
  totalCost.innerHTML = parseFloat(totalExpense);
}
