// A Promise is an object that says:
// "I don't have the result right now, but I promise to give you
// Success (Resolve) or Failure (Reject) later."

console.log("--- 1. Simple Promise (Coin Toss) ---");

const coinToss = new Promise((resolve, reject) => {
    // pending state
        const isHeads = Math.random() > 0.5; // Random true or false

        if (isHeads) {
            resolve("You Won! It was Heads. :trophy:");
        } else {
            reject("You Lost. It was Tails. :x:");
        }

});



coinToss.then((message) => {
        // .then() runs ONLY if resolve() is called
        console.log("Success:", message);
    })
    .catch((error) => {
        // .catch() runs ONLY if reject() is called
        console.log("Error:", error);
    });



// ==========================================
// 2. THE PROBLEM: CALLBACK HELL
// ==========================================
// Imagine doing 3 things in a row using Callbacks.
// It looks like a staircase and is hard to read.

// /* // DON'T RUN THIS, JUST LOOK AT IT:
// getData(function(a) {
//     getMoreData(a, function(b) {
//         getEvenMoreData(b, function(c) {
//             console.log(c);
//         });
//     });
// });
// */



// // ==========================================
// // 3. THE SOLUTION: PROMISE CHAINING
// // ==========================================
// // We can chain .then() to do steps in a straight line.

// console.log("\n--- 2. Promise Chaining ---");

// // A helper function that returns a Promise (waits 'ms' milliseconds)
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
wait(2000).then(() => {
        console.log("Step 1 Finished (2s)");
        return wait(1000); // Wait 1 more second
    }).then(() => {
        console.log("Step 2 Finished (1s)");
        return wait(1000); // Wait 1 more second
    }).then(() => {
        console.log("Step 3 Finished. ALL DONE! :white_check_mark:");
    });



// // ==========================================
// // 4. REAL WORLD EXAMPLE (The Age Checker)
// // ==========================================
// // Simulating a system that checks if a user is allowed to enter.

// console.log("\n--- 3. The Age Gatekeeper ---");

function checkEntry(age) {
    return new Promise((resolve, reject) => {
        console.log(`Checking ID for age: ${age}...`);

        setTimeout(() => {
            if (age >= 18) {
                resolve("Access Granted! Welcome to the club. :clinking_glasses:");
            } else {
                reject("Access Denied! You are too young. :no_entry:");
            }
        }, 1500);
    });
}

// Test 1: Allowed (21)
checkEntry(21)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

// Test 2: Denied (15) - Uncomment to test
checkEntry(15)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));


// ============================================================
function checkNumber(num) {
  return new Promise((resolve, reject) => {

    if (num > 10) {
      resolve("Number is big");
    } else {
      reject("Number is small");
    }

  });
}

checkNumber(5)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));