console.log("Hello Here is my DOM first Task");
// TASKS:
// • The Text Changer
// Select the button with id btn-1.
// When clicked, change the text of h1 (id="main-heading") to "Welcome to the DOM!".

const changetextbtn = document.getElementById("btn-1");
const heading = document.getElementById("main-heading");

changetextbtn.addEventListener(
  "click",
  () => (heading.innerHTML = "Welcome to the Dom"),
);
// ==========================================================================================/
// • The Color Painter
// Select the button btn-2.
// When clicked, change the background color of the div (id="color-box") to "blue".

const changecolorbtn = document.getElementById("btn-2");
const changecolorbox = document.getElementById("color-box");

changecolorbtn.addEventListener("click", () => {
  changecolorbox.style.backgroundColor = "blue";
});

// ===========================================================================================
// • The Input Reader
// Select the input user-input and the button btn-3.
// When clicked, read the value from the input and show it in a standard browser alert().

const inputalert = document.getElementById("user-input");
const buttonalert = document.getElementById("btn-3");

buttonalert.addEventListener("click", () => {
    const value = inputalert.value;                   //  its read the input value
    alert(value);                                       //   it show the input value
});

// ==================================================================================================/

// • The Link Update
// Select the link my-link.
// When btn-4 is clicked, change the link's href attribute to "https://youtube.com" and its text to "Go to YouTube".

const youtubelink = document.getElementById("my-link");
const youtubebtn = document.getElementById("btn-4")

youtubebtn.addEventListener( "click" ,()=>
{
    youtubelink.href ="https://youtube.com";
    youtubelink.innerText = "Go to Youtube"
})

// =========================================================================================
// • The Vanishing Image
// Select the image my-image.
// When btn-5 is clicked, change its style.display to "none" so it disappears.

const imagebtn = document.getElementById("btn-5")
const imagedisappear = document.getElementById("my-image")

imagebtn.addEventListener( "click" , ()=> {
    imagedisappear.style.display = "none"
})

// =============================================================================================
// • The Counter (+ and -)
// You have a span counter-value that starts at 0.
// When inc-btn is clicked, increase the number by 1.
// When dec-btn is clicked, decrease the number by 1.
// Hint: You will need to convert the text to a number using parseInt() or Number().


// ===========================================================================================

// • The Dark Mode Toggle
// Select the button toggle-mode.
// When clicked, toggle the CSS class "dark-mode" on the document.body.

const darkmoodbtn = document.getElementById("toggle-mode")

darkmoodbtn.addEventListener("click", ()=>
{
   document.body.classList.toggle("dark-mode")                 // classList is a property in JavaScript that allows you to work with CSS classes of an HTML element.
});

// ==============================================================================================

// • The Password Validator
// Select password-input and login-btn.
// When clicked, check if the password is less than 5 characters.
// If it is too short, show the text "Password too short!" in the error-msg paragraph.

const passworddata = document.getElementById("password-input")
const loginbutton = document.getElementById("login-btn")
const errordata = document.getElementById("error-msg")

loginbutton.addEventListener("click" , ()=>{
   let value = passworddata.value
    if (value.length < 5 ) {
        errordata.innerHTML = "Password too short!"
    
}
})

// =================================================================================================

• The Shopping List (Create Elements)
Select item-input, add-item-btn, and the ul shopping-list.
When clicked, take the text from the input, create a new <li> element, set its text, and appendChild it to the list.


const shoplist = document.getElementById("shopping-list");
const itemdata = document