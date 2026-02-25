// Inder  [3:07 PM]
// Task 1: The Bomb Countdown (setInterval)

// Create a function startBomb().
// It should countdown from 5 to 1 every second.
// When it hits 0, print "BOOM!" and stop the interval.

// Task 2: The Delayed Button (setTimeout + DOM)
// • HTML: <button id="magic-btn">Click Me</button> and <h2 id="text">Waiting...</h2>
// • JS: When the button is clicked:
// Change text to "Loading...".
// Wait 3 seconds.
// Change text to "Welcome to Async JS!".

// Task 3: The Digital Clock (Real World)
// • HTML: <h1 id="clock">00:00:00</h1> and <button id="stop-btn">Stop Clock</button>.
// • JS:
// Create a function updateTime() that gets new Date().toLocaleTimeString() and puts it in the h1.
// Use setInterval to run this function every 1000ms (1 second).
// When the "Stop Clock" button is clicked, freeze the time using clearInterval.

// Task 4: The "Callback Hell" Simulation
// • Goal: Show them why Callbacks can get messy (to prepare for Promises).
// • Write 3 functions:
// step1(callback) -> prints "Step 1 done" after 1 sec.
// step2(callback) -> prints "Step 2 done" after 1 sec.
// step3(callback) -> prints "Step 3 done" after 1 sec.
// • Call them nested inside each other so they run in order: 1 -> 2 -> 3.
// Hint: step1(() => { step2(() => { step3(...) }) })

// ======================================================================================
// Task 1: The Bomb Countdown (setInterval)

// Create a function startBomb().
// It should countdown from 5 to 1 every second.
// When it hits 0, print "BOOM!" and stop the interval.

function startBomb() {
  let count = 5;

  let timer = setInterval(function () {
    console.log(count);
    count--;

    if (count === 0) {
      console.log("BOOM!");
      clearInterval(timer);
    }
  }, 1000);
}

startBomb();
// =====================================================================

// • HTML: <button id="magic-btn">Click Me</button> and <h2 id="text">Waiting...</h2>
// • JS: When the button is clicked:
// Change text to "Loading...".
// Wait 3 seconds.
// Change text to "Welcome to Async JS!".

let magicbutton = document.getElementById("magic-btn");
let texxt = document.getElementById("text");

magicbutton.addEventListener("click", () => {
  texxt.innerHTML = "Loading....";
  setTimeout(() => {
    texxt.innerHTML = "Welcome to Async JS!";
  }, 3000);
});
// ============================================================================================
// Task 3: The Digital Clock (Real World)
// • HTML: <h1 id="clock">00:00:00</h1> and <button id="stop-btn">Stop Clock</button>.
// • JS:
// Create a function updateTime() that gets new Date().toLocaleTimeString() and puts it in the h1.
// Use setInterval to run this function every 1000ms (1 second).
// When the "Stop Clock" button is clicked, freeze the time using clearInterval.


let clock = document.getElementById("clock");
let stopButton = document.getElementById("stop-btn");

function updateTime() {
  clock.innerHTML = new Date().toLocaleTimeString();
}

let timer = setInterval(updateTime, 1000);

stopButton.addEventListener("click", () => {
  clearInterval(timer);
});
// =======================================================================================
// Task 4: The "Callback Hell" Simulation
// • Goal: Show them why Callbacks can get messy (to prepare for Promises).
// • Write 3 functions:
// step1(callback) -> prints "Step 1 done" after 1 sec.
// step2(callback) -> prints "Step 2 done" after 1 sec.
// step3(callback) -> prints "Step 3 done" after 1 sec.
// • Call them nested inside each other so they run in order: 1 -> 2 -> 3.
// Hint: step1(() => { step2(() => { step3(...) }) })
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 is done");callback();
  }, 1000);
  
}
function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 is done");  callback();
  }, 1000);
 
}
function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 is done");  callback();
  }, 1000);
}
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed!");
    });
  });
});
