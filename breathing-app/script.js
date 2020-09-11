const container = document.querySelector(".container");
const text = document.getElementById("text");
const counter = document.getElementById("counter");
const start = document.querySelector(".startBtn");
const stop = document.querySelector(".stopBtn");
const pointer = document.getElementsByClassName("pointer-container");
console.log(stop);
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
let started = false;
let completed = false;
let timersArr = [];
let intervalsArr = [];

start.addEventListener("click", startExercise);
stop.addEventListener("click", stopExercise);

function stopExercise() {
  console.log("stoped");
  started = false;
  text.innerText = "";
  counter.innerText = "";
  kickOf = true;
  container.className = "container stop";
  // pointer[0].className = "pointer-container goBack";
  pointer[0].classList.remove("goAround");
  // remove 'visible' class to hide button
  // and show start
  stop.classList.remove("visible");
  start.className = "startBtn";

  timersArr.forEach((timer) => clearTimeout(timer));
  intervalsArr.forEach((interval) => clearInterval(interval));
  timersArr.length = 0;
  intervalsArr.length = 0;
}

function startExercise() {
  console.log("started");
  started = true;
  completed = false;
  setIntervalX(breatheAnimation, totalTime, 2);
  //show stop btn
  stop.className = "stopBtn visible";
  start.className = "stopBtn non-visible";
}

function breatheAnimation() {
  // text.innerHTML = "Inhale";
  text.innerText = "Inhale";
  // counter.innerHTML = " ";
  container.className = "container grow";
  pointer[0].className = "pointer-container goAround";
  countDown(4);

  timersArr.push(
    setTimeout(() => {
      text.innerText = "Hold";
      countDown(7);

      timersArr.push(
        setTimeout(() => {
          text.innerText = "Exhale";
          countDown(8);
          container.className = "container shrink";

          if (completed) {
            completed = false;
            timersArr.push(
              setTimeout(() => {
                text.innerText = "Relax";
                counter.innerText = "";

                // show after delay
                setTimeout(() => {
                  text.innerText = "";
                  // restart an app
                  start.className = "startBtn";
                }, 3000);
                kickOf = true;
                pointer[0].classList.remove("goAround");

                // remove 'visible' class to hide button
                // and show start
                stop.classList.remove("visible");
                // counter.innerText = "🔁";
              }, exhale)
            );
          }
        }, hold)
      );
    }, inhale)
  );
}

function countDown(cycle) {
  let num = 0;
  counter.innerText = "-";
  const intervalCount = window.setInterval(() => {
    // counter.innerText = "1";
    num++;
    counter.innerText = `${num}`;
    if (num >= cycle) {
      window.clearInterval(intervalCount);
      counter.innerText = "-";
    }
  }, 1000);
  intervalsArr.push(intervalCount);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 0;

  // in the beginning start right away
  if (kickOf) {
    kickOf = false;
    callback();
    x++;
  }

  const intervalId = window.setInterval(() => {
    // call again
    callback();
    x++;
    if (x >= repetitions) {
      window.clearInterval(intervalId);
      completed = true;
    }
  }, delay);
  intervalsArr.push(intervalId);
  // stop.addEventListener("click", () => stopExercise(intervalId));
}
