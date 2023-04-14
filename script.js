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

function startGame() {
  area.style.background = "rgb(230, 50, 50)";
  area.style.cursor = "pointer";
}
