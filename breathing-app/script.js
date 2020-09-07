const container = document.querySelector(".container");
const text = document.getElementById("text");
const counter = document.getElementById("counter");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

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
let timersArr = [];

start.addEventListener("click", startExercise);
// stop.addEventListener("click", stopExercise);

function stopExercise(intId) {
  window.clearInterval(intId);
  text.innerText = "";
  counter.innerText = "";
  kickOf = true;
  container.className = "container stop";
}

function startExercise() {
  setIntervalX(breatheAnimation, totalTime, 1);
}

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
          counter.innerText = "🔁";

          text.innerText = "";
          counter.innerText = "";
          kickOf = true;
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
      counter.innerText = "-";
    }
  }, 1000);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 0;

  // in the beginning start right away
  if (kickOf) {
    kickOf = false;
    callback();
  }

  const intervalId = window.setInterval(() => {
    // call again
    callback();

    if (++x >= repetitions) {
      window.clearInterval(intervalId);
      completed = true;
    }
  }, delay);

  stop.addEventListener("click", () => stopExercise(intervalId));
}

// setIntervalX(breatheAnimation, totalTime, 1);

// setInterval(breatheAnimation, totalTime);
// unsuccessfull atempt to show last second
// function beforeSwitch(lastNum) {
//   counter.innerText = `${lastNum}`;
//   return new Promise((done) =>
//     setTimeout(() => {
//       done();
//       // counter.innerText = "-";
//     }, 350)
//   );
// }
