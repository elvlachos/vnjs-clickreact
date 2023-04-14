console.log("Hello World");

const btn = document.querySelector(".rdybtn");
const area = document.querySelector(".uppercontainer");
const timerText = document.querySelector(".timer");

btn.addEventListener("click", () => {
  swapButtonVisibility();
  startGame();
});

function swapButtonVisibility() {
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function readyArea() {
  area.style.cursor = "pointer";
  area.style.background = "rgb(40, 230, 40)";
  const time1 = new Date().getTime();
  area.addEventListener("click", () => {
    const time2 = new Date().getTime();
    timerText.innerHTML = `${time2 - time1}ms`;
  });
}

function produceDelay(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function startGame() {
  area.style.background = "rgb(230, 40, 40)";
  const gameDelay = produceDelay(1234, 6789);
  setTimeout(readyArea, gameDelay);
}
