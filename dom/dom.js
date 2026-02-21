console.log("Basics");

// 1. Grab by ID

const title = document.getElementById("main-title");

title.innerText = "DOM Class Started! <i> Harsh </i>"




// 2. Grab by Class or Tag (querySelector gets the FIRST match)

const paragraph = document.querySelector(".desc")
// const paragraph = document.querySelector(".desc");
paragraph.innerHTML = "Hey Hey <b> Jagjot </b>";

// // 3. Change the text
title.innerText = "Welcome to the DOM!";
paragraph.innerHTML = "Learning JS is <strong>powerful</strong>.";

console.log("\n--- Level 2: Classes & Styles ---");

// // The beginner way (Direct Style):
title.style.color = "blue";

const card = document.querySelector(".card");


// ==========================================
// THE INTERACTIVE (Events)
// ==========================================
// Goal: Make the website respond to the user (Clicks, Typing).

console.log("\n--- Level 3: Events ---");

const colorBtn = document.getElementById("color-btn");

colorBtn.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "red";
    title.innerHTML = "Color Changed"
})

// Listen for a "click" event
// colorBtn.addEventListener("click", () => {
//     // Generate a random background color
//     document.body.style.backgroundColor = "lightgray";
//     title.innerText = "Color Changed!";
// });
// ===========================================================================================================

// ==========================================
/.

console.log("\n--- Level 4: Creating Elements ---");



const taskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
//     // 1. Get the text the user typed
    // const taskText = taskInput.value;

//     // Guard clause: Don't add empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;.
    }

//     // 2. CREATE a brand new <li> tag
    const newListItem = document.createElement("li");

//     // 3. Add text to the new <li>
    newListItem.innerText = taskText;

//     // 4. APPEND (attach) the new <li> to the existing <ul> on the page
    taskList.appendChild(newListItem);

//     // 5. Clear the input box for the next task
    taskInput.value = "";
});


// What if we want to delete a task by clicking it?
// We put the listener on the PARENT (ul), not the children (li).

taskList.addEventListener("click", (event) => {
    // Check if the thing we actually clicked was an 'LI'
    if (event.target.tagName === "LI") {
        event.target.remove(); // Delete it from the DOM completely!
    }
});