let gameState = "waiting";
const btn = document.querySelector(".rdybtn");
const area = document.querySelector(".uppercontainer");
const timerText = document.querySelector(".timer");

function swapButtonVisibility() {
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else btn.style.display = "none";
}

function produceDelay(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function clickOnArea(time1) {
  console.log(time1);
  const time2 = Date.now();
  timerText.innerHTML = `${time2 - time1}ms`;
}

function areaToPlay() {
  area.style.background = "green";
  area.style.cursor = "pointer";
  const time1 = Date.now();
  area.addEventListener("click", () => {
    clickOnArea(time1);
  });
}

function startGame() {
  swapButtonVisibility();
  const delay = produceDelay(1000, 3000);
  setTimeout(areaToPlay, delay);
}

btn.addEventListener("click", startGame);
