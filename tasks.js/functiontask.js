// - Create a function `sayHello`
// - Inside the function, return `"Hello world"`
// - Call the function and print the returned value

// function sayhello(){
// return "Hello world";

// }
// let abc = sayhello();
// console.log(abc);
// --------------------------------------------------------



// - Create a function `getSum`
// - Inside the function:

//     ```jsx
//     let a =10;let b =20;
//     ```

// - Return their sum
// - Call the function and log the result

// function getSum(){
//   let a = 10;
//   let b = 20;
//   return a + b;
// }
// let xyz = getSum();

// console.log(xyz);
// --------------------------------------------------

// ### 3. Age Checker

// Task:

// - Create a function `checkAge`
// - Inside function:
    
//     ```jsx
//     let age =18;
//     ```
// - If age ≥ 18 return `"Eligible"`
// - Else return `"Not Eligible"`

// function checkage(){
//     let age=18;
//     if(age>=18){
//         return("Eligible")
//     }else{
//     return("Not Eligible")
//     }
// }
// let result=checkage();
// console.log(result);
// -----------------------------------------------------

// ## 4. Function Stored in Variable

// ```jsx
// functiongreet() {return"Good Morning";
// }
// ```

// Task:
// - Store the function in a variable
// - Call the function using that variable
// - Print the output

// function greet(){
//     return "Good Morning";
// }
// let abc = greet();
// console.log(abc);

// ---------------------------------------------------------------------
// ## 5. Random Number Generator

// Task:

// - Create a function `getRandomNumber`
// - Return any random number between 1–10
// - Call it and log the result

// Note: (Use Math.random() )

// function getRandomNumber(){
//    return Math.floor(Math.random()*10);
// }
// getRandomNumber();
// let sum=getRandomNumber();
// console.log(sum)
// ---------------------------------------------------------

// ### 6. Boolean Return Function

// Task:

// - Create a function `isServerOnline`
// - Inside function:
//     ```jsx
//     let status =true;
//     ```
// - Return the status
// - Print output

function isServerOnline(){
    let status =true;
    return status;
}
let result=isServerOnline();
console.log(result);
// -------------------------------------------------------,


// ### 7. Function Reference Comparison

// ```jsx
// functiontest() {return"Hello";
// }let a = test;let b =test();
// ```

// Questions:

// - What is stored in `a`?
// - What is stored in `b`?
// - Which one is a function reference?



function test(){
    return"hello";
}
let a =test;
let b =test();


// a. in A a new refrence name is stored
// b. In a B is used for calling a function
// // 3. a =test; is a function reference
// -----------------------------------------------------------------------