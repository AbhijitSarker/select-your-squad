function selectPlayer(playerName) {
  const name = document.getElementById(playerName).innerText;
  const squad = document.getElementById("squad");
  const list = document.createElement("li");
  list.innerText = name;

  squad.appendChild(list);
}

function selector(elementID, playerName) {
  document.getElementById(elementID).addEventListener("click", function () {
    selectPlayer(playerName);
    this.disabled = true;
  });
}
selector("btn-messi", "messi");
selector("btn-neymar", "neymar");
selector("btn-ronaldo", "ronaldo");
selector("btn-mbappe", "mbappe");
selector("btn-kane", "kane");
selector("btn-modrich", "modrich");

// document.getElementById("squad").addEventListener("click", function (event) {
//   event.target.parentNode.removeChild(event.target);
// });

document
  .getElementById("calculate-expanse")
  .addEventListener("click", function () {
    const players = document
      .getElementById("squad")
      .getElementsByTagName("li").length;

    const costPerPlayer = document.getElementById("costPerPlayer").value;

    const playerExpanse = players * costPerPlayer;
    document.getElementById("player-expanse").innerText = playerExpanse;
  });
