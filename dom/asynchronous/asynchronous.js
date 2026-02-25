// 1. THE PROBLEM: BLOCKING CODE
// ==========================================
// JavaScript is "Single Threaded". It can only do ONE thing at a time.
// If one line takes 10 seconds, the whole website FREEZES.
// We call this "Blocking".

// 3

// ASYNC SOLUTION: We schedule tasks for later so the app keeps running.

// setTimeout(function, milliseconds)

// setTimeout(()=>{
//      console.log(`4. Takes 4 seconds to print`)
// }, 4000)

// setTimeout(() => {
//      console.log("2. This runs after 2 seconds...");
// }, 2000); 



// console.log("3. Finish App"); 
// OUTPUT: 1. Start -> 3. Finish -> (Wait 2s) -> 2. This runs...



// ==========================================
// 2. TIMERS (Repeated Actions)
// ==========================================
// setInterval(function, milliseconds) -> Runs over and over again.
// clearInterval(id) -> Stops it.

// console.log("\n--- 2. setInterval ---");

// let count = 0;

// // Start the timer and save its ID so we can stop it later
// const timerId = setInterval(() => {
//     count++;
//     console.log("Timer Count:", count);

//     // LOGIC: Stop after 5 seconds
//     if (count === 5) {
//         clearInterval(timerId); // <--- STOP command
//         console.log("Timer Stopped! :white_check_mark:");
//     }
// }, 1000); // 1000ms = 1 second



// // // ==========================================
// // // 3. CALLBACK FUNCTIONS (The "Core" Pattern)
// // // ==========================================
// // // A Callback is simply a function you pass to another function.
// // // "I give you this function. Please run it when you are done."

// console.log("\n--- 3. Callbacks ---");



// function downloadFile(url, downloadedCallback) {
//     console.log(`Processing ${url}...`);

//     // Simulate a 3-second download
//     setTimeout(() => {
//         console.log("Download Complete!");

//         // NOW run the next step
//         downloadedCallback(); 
//     }, 3000);
// }

// // USAGE:
// downloadFile("movie.mp4", function() {
//     console.log("Now playing the movie! :clapper:");
// });



// // 1. Define the main task
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework... :memo:`);

    // Simulate working for 2 seconds
     setTimeout(() => {
         console.log("Finished Homework! :white_check_mark:");

        // NOW run the next step (The Callback)
        callback();
     }, 2000);
}

// 2. Define the callback function
function playGame() {
console.log("Now I can play FIFA! :video_game:");
}

// 3. Run them together
// We pass 'playGame' into 'doHomework'
doHomework("Math", playGame);
// ======================================================================

// console.log("THE CAR IS START")


//     setTimeout(()=>{
//         console.log("THE CAR WILL STOP AFTER 5 SECONDS"); },5000);

// console.log("NOW THE CAR WILL RUN")

// ================================================================

// SET INTERVAL===============
//  HERE WE ONLY SET SET-INTERVAL THE PROGRAM WILL RUN TILL INFINITE========


// let count = 0

// let id = setInterval(()=>{
//     count ++;
//     console.log("count = " , count);},5000);

//     // FOR STOP THE SET-INTERVAL============

//     // WE USE (clearInterval)=================================

//     if(count===10){
//     clearInterval(id);}

//     console.log("HERE THE INTERVAL WILL STOP");

// =============================================================================
// Simple Functiom================

function greet(name){
    console.log("HEY MY NAME IS : "+ name)
}
let user = greet;

user("Harshdeep Singh");

// NOW I AM MAKING A CALL BACK Function

function help (name,callback ){  // i can change the name with anything of call back function
    
    setTimeout (() => {console.log("HEY MY NAME IS "+ name +" PLEASE HELP");
    callback();} ,7000);         //  here i am callback teh function

}

function contact(){
console.log("HERE IS MY CONTACT NUMBER : 9988991931 ")
}

help("JAGJOT SINGH", contact);