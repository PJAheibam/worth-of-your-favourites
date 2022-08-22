const players = [
  {
    name: "Lionel Messi",
    goals: 36,
    assist: 126,
    imgUrl: "",
  },
];

const playersContainer = document.getElementById("players");
console.log(playersContainer);

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
  console.log(gridItem);

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
function showPlayers() {
  for (const player of players) {
    addPlayerToTheList(player);
  }
}

showPlayers();
