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

function totalExpanse() {
  const playerExpanse = parseFloat(
    document.getElementById("player-expanse").innerText
  );
  const coachExpanse = parseInt(document.getElementById("coach").value);
  const managerExpanse = parseInt(document.getElementById("manager").value);

  const totalCost = playerExpanse + coachExpanse + managerExpanse;
  document.getElementById("total-cost").innerText = totalCost;
  // console.log(coachExpanse);
}

document.getElementById("total-expanse").addEventListener("click", function () {
  totalExpanse();
});
