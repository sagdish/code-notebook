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
let completed = false;

// breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Inhale";
  // counter.innerHTML = " ";
  container.className = "container grow";
  countDown(4);

  setTimeout(() => {
    text.innerText = "Hold";
    countDown(7);

    setTimeout(() => {
      text.innerText = "Exhale";
      countDown(8);
      container.className = "container shrink";

      if (completed) {
        setTimeout(() => {
          text.innerText = "Relax";
        }, exhale);
      }
    }, hold);
  }, inhale);
}

function countDown(cycle) {
  let num = 0;
  // counter.innerText = "0";
  const intervalCount = window.setInterval(() => {
    // counter.innerText = "1";
    num++;
    counter.innerText = `${num}`;
    if (num >= cycle) {
      window.clearInterval(intervalCount);
      // counter.innerText = `${" "}`;
    }
  }, 1000);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 0;

  if (kickOf) {
    kickOf = false;
    callback();
  }

  const intervalId = window.setInterval(() => {
    callback();

    if (++x >= repetitions) {
      window.clearInterval(intervalId);
      completed = true;
    }
  }, delay);

  // if (completed) {
  //   text.innerText = "Relax";
  // }
}

setIntervalX(breatheAnimation, totalTime, 1);

// setInterval(breatheAnimation, totalTime);
