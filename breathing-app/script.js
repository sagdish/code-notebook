const container = document.querySelector(".container");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

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
let kickOf = true;

// breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Inhale";
  container.className = "container grow";
  // counter.innerHTML = "1";
  countDown(4);

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Exhale";
      container.className = "container shrink";
    }, hold);
  }, inhale);
}

function countDown(cycle) {
  let num = 0;
  counter.innerHTML = "1";

  const intervalCount = window.setInterval(() => {
    num++;
    counter.innerText = `${num}`;
    if (num >= cycle) {
      window.clearInterval(intervalCount);
    }
  }, 1000);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 1;

  if (kickOf) {
    kickOf = false;
    callback();
  }

  const intervalId = window.setInterval(() => {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalId);
      completed = true;
    }
  }, delay);

  // if (completed) {
  //   text.innerText = "Relax";
  // }
}

setIntervalX(breatheAnimation, totalTime, cycles);

// setInterval(breatheAnimation, totalTime);
