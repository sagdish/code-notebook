const container = document.querySelector(".container");
const text = document.getElementById("text");

const totalTime = 19000;

// const inhalePercentage = 21 // percentage based on 4-7-8
// const holdPercentage = 37
// const exhalePercentage = 42
// to get desired percentage:
// function percentage(percent, total) {
//   return ((percent/ 100) * total).toFixed(2)
// }

const inhale = 4000;
const hold = 7000;
const exhale = 8000;
const cycles = 3;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Inhale";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Exhale";
      container.className = "container shrink";
    }, hold);
  }, inhale);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 0;
  const intervalId = window.setInterval(() => {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalId);
    }
  }, delay);
}

setIntervalX(breatheAnimation, totalTime, cycles);

// setInterval(breatheAnimation, totalTime);
