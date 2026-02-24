// Create a variable currentQuestionIndex = 0.
// Create a function loadQuestion() that updates the h3 text and the 4 buttons.
// When a button is clicked, check if the text matches the answer.
// If Correct: Increase Score, Alert "Correct!", and move to the next index.
// If Wrong: Alert "Wrong!".

// const questions = [
//     { text: "What is 2+2?", answer: "4", options: ["2", "4", "5", "6"] },
//     { text: "Capital of India?", answer: "Delhi", options: ["Mumbai", "Delhi", "Goa", "Pune"] }
// ];

//  let currentQuestionIndex = 0

// let heading3 = document.getElementById("question-text")
// let answerbtn = document.querySelectorAll(".answer-btn")

// answerbtn.forEach(loadquestion => {
//    loadquestion.addEventListener("click", ()=>{

//     heading3.innerText = questions["0"].text
//     })

//      answerbtn.forEach(loadquestion =>{
//         loadquestion.innerText = questions["0"].options
//      })

// })

// function loadQuestion() {
//    heading3.innerText = questions["1"].text
// loop buttons
// set options
// }
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

// Add input event listeners to all 3 boxes.
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