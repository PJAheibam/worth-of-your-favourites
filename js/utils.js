function handleClick(e) {
  const element = e.target;
  if (element.localName === "button") {
    const playerName = element.previousSibling.children[0].innerText;
    const selected = document.getElementById("selected-list");
    for (const listItem of selected.children) {
      console.log(listItem.children[1].innerText.toLowerCase());
      if (listItem.children[1].innerText.toLowerCase() === "empty") {
        listItem.classList.add("active");
        listItem.children[1].innerText = playerName;

        const check = document.createElement("div");
        check.classList.add("check");

        element.innerText = "selected";
        element.setAttribute("disabled", "true");
        element.appendChild(check);
        break;
      }
    }
  }
}
