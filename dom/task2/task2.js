// Create a variable currentQuestionIndex = 0.
// Create a function loadQuestion() that updates the h3 text and the 4 buttons.
// When a button is clicked, check if the text matches the answer.
// If Correct: Increase Score, Alert "Correct!", and move to the next index.
// If Wrong: Alert "Wrong!".

const questions = [
    { text: "What is 2 + 2?", answer: "4", options: ["2", "4", "5", "6"] },
    { text: "Capital of India?", answer: "Delhi", options: ["Mumbai", "Delhi", "Goa", "Pune"] },
    { text: "Which language is used for Web?", answer: "JavaScript", options: ["Java", "Python", "JavaScript", "C++"] },
    { text: "What does DOM stand for?", answer: "Document Object Model", options: ["Data Object Model", "Document Object Model", "Desktop Orientation Mode", "Digital Ordinance Model"] }
];

// --- STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;

// --- SELECT ELEMENTS ---
const questionText = document.getElementById("question-text");
const scoreText = document.getElementById("quiz-score");
const answerButtons = document.querySelectorAll(".answer-btn"); // Selects all 4 buttons

// --- FUNCTION TO LOAD QUESTION ---
function loadQuestion() {
    // 1. Get the current question object
    const currentQuestion = questions[currentQuestionIndex];

    // 2. Update the Question Text
    questionText.innerText = currentQuestion.text;

    // 3. Update the Buttons
    // We loop through the 4 buttons and assign the matching option text
    answerButtons.forEach((btn, index) => {
        btn.innerText = currentQuestion.options[index];

        // CRITICAL STEP: Handle the Click
        // We use .onclick instead of addEventListener here to prevent adding 
        // duplicate listeners every time the question reloads.
        btn.onclick = () => {
            checkAnswer(currentQuestion.options[index]);
        };
    });
}

// --- FUNCTION TO CHECK ANSWER ---
function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].answer;

    // 1. Check Logic
    if (selectedOption === correctOption) {
        alert("Correct! ");
        score++;
    } else {
        alert(`Wrong!  The correct answer was: ${correctOption}`);
    }

    // 2. Update Score Text
    scoreText.innerText = "Score: " + score;

    // 3. Move to Next Question
    currentQuestionIndex++;

    // 4. Check if Quiz is finished
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load next
    } else {
        // End of Quiz
        questionText.innerText = "Quiz Over! You scored " + score + "/" + questions.length;

        // Disable buttons so they can't click anymore
        answerButtons.forEach(btn => btn.disabled = true);
    }
}

// --- START THE APP ---
loadQuestion();
// =======================================================================================

// Create a function addToCart(name, price).
// Push an object { name: name, price: price } into the cart array.
// Render: Loop through the cart array, create <li> tags for each item, and append them to cart-list.
// Calculate: Use a loop to calculate the total price and update the #total-price span.

// let cart = [];
// function addToCart(name,price){
//     cart.push({name : name , price : price })

// }

let cart = [];

function addToCart(name, price) {
  cart.push({ name: name, price: price });

  let cartlist = document.getElementById("cart-list");
  cartlist.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    let li = document.createElement("li");
    li.textContent = cart[i].name + " -$" + cart[i].price;
    cartlist.appendChild(li);
  }
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }
  document.getElementById("total-price").textContent = total;
}
// =====================================================================================

// 15 .// Add input event listeners to all 3 boxes.
// Username Check: If length < 5, show #user-error.
// Password Check: If length < 8, show #pass-error.
// Match Check: If pass value !== confirm-pass value, show #match-error.
// Master Check: If ALL 3 are valid, set submitBtn.disabled = false. Otherwise, keep it true.

let usernamedata = document.getElementById("username");
let passworddata = document.getElementById("pass");
let passconfirm = document.getElementById("confirm-pass");
let submitbuttton = document.getElementById("submit-btn");

let userError = document.getElementById("user-error");
let passError = document.getElementById("pass-error");
let matchError = document.getElementById("match-error");

function validateform() {
  let isvalid = true;
  if (usernamedata.value.length < 5) {
    userError.style.display = "block";
     isvalid= false;
  } else {
    userError.style.display = "none";
   
  }

  if (passworddata.value.length < 8) {
    passError.style.display = "block";
     isvalid= false;
  } else {
    passError.style.display = "none";
   
  }

  if (passworddata.value !== passconfirm.value) {
    matchError.style.display = "block";
     isvalid= false;
  } else {
    matchError.style.display = "none";
 
  }
  if (isvalid) {
   submitbuttton.disabled = false;
} else {
   submitbuttton.disabled = true;
}
}
usernamedata.addEventListener("input", validateform);
passworddata.addEventListener("input", validateform);
passconfirm.addEventListener("input", validateform);

// =========================================================================

// 13. The Tabbed Interface (Class Manipulation)
// • Goal: Switch between 3 views without reloading the page.
// • Logic:
// 1. Select all tab-btn buttons and all content-box divs.
// 2. Add a click listener to the buttons.
// 3. When clicked:
// Step 1: Hide ALL content boxes (add .hidden class).
// Step 2: Remove "active" class from ALL buttons.
// Step 3: Show ONLY the box that matches the button's data-target (remove .hidden).
// Step 4: Add "active" class to the clicked button.

const tabButtons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content-box");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        // 1. Remove 'active' class from ALL buttons
        tabButtons.forEach(b => b.style.backgroundColor = ""); 
        // (Or use classList.remove('active') if you have CSS)

        // 2. Hide ALL content boxes
        contents.forEach(box => box.classList.add("hidden"));

        // 3. Show ONLY the target box
        const targetId = btn.getAttribute("data-target");
        document.getElementById(targetId).classList.remove("hidden");

        // 4. Highlight the clicked button
        btn.style.backgroundColor = "lightgray"; 
    });
});

// ==================================================================================/


// 14. The Task Filter (Array Filtering)
// • Data: let tasks = [{ text: "Learn JS", completed: false }];
// • Logic:
// 1. Add: New tasks are pushed to the array with completed: false.
// 2. Toggle: Clicking a task toggles its completed status (true/false) and adds a CSS line-through style.

// Filter:
// "Show Active" button: Uses tasks.filter(t => !t.completed) and re-renders the list.
// "Show Completed" button: Uses tasks.filter(t => t.completed).
// "Show All": Renders the whole array.


let tasks = [];

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskListUl = document.getElementById("filter-task-list");

// Add Task
addTaskBtn.addEventListener("click", () => {
    if(taskInput.value === "") return;
    
    tasks.push({ text: taskInput.value, completed: false });
    taskInput.value = "";
    renderTasks("all"); // Show all by default
});

// Render Function (The Brain)
function renderTasks(filterType) {
    taskListUl.innerHTML = ""; // Clear current list

    // Filter the array based on button clicked
    let filteredTasks = tasks;
    if (filterType === "active") {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (filterType === "completed") {
        filteredTasks = tasks.filter(t => t.completed);
    }

    // Loop and Display
    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task.text;
        
        // If completed, cross it out
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        // Toggle completion on click
        li.addEventListener("click", () => {
            // Find the original task in the main array and flip it
            // (Using reference or finding by text/index)
            task.completed = !task.completed; 
            renderTasks(filterType); // Re-render to show changes
        });

        taskListUl.appendChild(li);
    });
}

// Button Listeners
document.getElementById("show-all-btn").addEventListener("click", () => renderTasks("all"));
document.getElementById("show-active-btn").addEventListener("click", () => renderTasks("active"));
document.getElementById("show-completed-btn").addEventListener("click", () => renderTasks("completed"));