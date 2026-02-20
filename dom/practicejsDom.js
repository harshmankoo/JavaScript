console.log("FINVASIA");
// =======================================================

// ========================================================get element by id
let first = document.getElementById("heading"); // by these we can change the the inner content of html page
first.innerText = " HELLO TO ALL THE WEB DEV PRESENT HERE";

//  =======================================================================
// Grab by Class or Tag (querySelector gets the FIRST match)

let content = document.querySelector("#myParagraph");
content.innerHTML =
  " Hey i am changing the content of the paragrpgh with the help of dom";

// WE can also chnage the stlye sheet with thw help of dom
const blackcard = document.querySelector(".card");
blackcard.style.color = "green"; // by this i can chnage the backgrounf color of the text whch is present in the div
blackcard.style.backgroundColor = "yellow";

const data = document.querySelector(".form");
data.style.backgroundColor = "pink"; //with this i am changing the background color of the form

//  ========================================================================
//   --------------EVENTS---------------

// DOM event is an action that occurs in the browser when user interact with the webpage

// event listner --- event lisntwer is a method it wait for the event to happen and it runs a fucntion

const mainbutton = document.getElementById("#btn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  first.innerHTML = " COLOR  CHANGED";
});

//in this i hva chnaged the bgc with th button and i click on the button the text of the para also be changed

// =======================================================================

// / THE CREATOR (Experienced Level)

// ===========================================================================

// Goal: Create brand new HTML elements out of thin air and add them to the page.
// This is exactly how React works under the hood


let contentdata = document.getElementById("maindata");
let clickadd = document.getElementById("added-button")
let addlists = document.getElementById("mylists")

clickadd.addEventListener("click", () => {
    const tasktext = contentdata.value;   // Get user input

    if (tasktext === "") {
        alert("Please enter the data");
        return;
    }
 
    const newlistitem = document.createElement("li");

    newlistitem.innerText = tasktext ;

    taskList.appendChild(newlistitem);

    taskInput.value = "";
});
