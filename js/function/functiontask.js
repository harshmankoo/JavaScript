// ----------------------------TASK 1---------------------------

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

// function isServerOnline(){
//     let status =true;
//     return status;
// }
// let result=isServerOnline();
// console.log(result);
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

// function test(){
//     console.log("hello");

// }
// let a =test;
// let b =test();
// console.log(a)

// a. in A a new refrence name is stored
// b. In a B is used for calling a function
// // 3. a =test; is a function reference
// -----------------------------------------------------------------------

// ----------------------------------------------TASK 2---------------------------------------------------------------

// ### 1. Greeting Function

// Create a function `greetUser(name)`

// - It should return: `Hello <name>`
// - Call the function with **3 different names**

// function greatUser(name){
//     return "hello " + name;
// }
// console.log(greatUser("Harshdeep Singh"));
// console.log(greatUser("Jagjot Singh"));
// console.log(greatUser("Navjot Singh"));











// -----------------------------------------------------------------------

// ### 2. Square of a Number

// Create `square(num)`

// - Return the square of the number
// - Call it with different values

// function square(num) {
//   return num * num;
// }
// console.log(square(20));







// -----------------------------------------------------

// ### 3. Age Eligibility

// Create `checkEligibility(age)`

// - If age ≥ 18 → return `"Eligible"`
// - Else → return `"Not Eligible"`

// function checkEligibility(age){
//     if(age>=18){
//         return"Eligible"
//     }else{
//         return "not Eligible"
//     }
// }
// console.log(checkEligibility(10));









// -----------------------------------------------------------------------
// ## 4. Full Name Generator

// Create `getFullName(firstName, lastName)`

// - Return full name
// - Print the returned value

// function getFullName(firstName, lastName) {
//   return firstName + lastName;
// }
// console.log(getFullName("Harshdeep", "Singh"));






// -----------------------------------------------------------------

// ### 5. Simple Calculator

// Create functions:

// - `add(a, b)`
// - `subtract(a, b)`
// - `multiply(a, b)`

// Call each with different arguments.

// function Calculator(a, b) {
//   return "ADD A + B =" + (a + b);
//   return "ADD A - B =" + (a - b);
//   return "ADD A *B =" + a * b;
// }
// console.log(Calculator(20, 30));
// console.log(Calculator(5, 5));
// console.log(Calculator(9, 3));





// ----------------------------------------------------------------------/

// ### 6. Grade System

// Create:

// ```jsx
// getGrade(percentage)
// ```

// Return:

// - A → 80+
// - B → 60–79
// - C → 40–59
// - Fail → below 40


// function getGrade(percentage) {
//   if (percentage >= 80) {
//     return "A";
//   } else if (percentage >= 60) {
//     return "B";
//   } else if (percentage >= 40) {
//     return "c";
//   } else {
//     return "fail";
//   }
// }
// console.log(getGrade(50));
// console.log(getGrade(91));
// console.log(getGrade(63));
// console.log(getGrade(33));



// ------------------------------------------------------------------------------


// Create:

// ```jsx
// login(username, password)
// ```

// Rules:

// - username = `"admin"`
// - password = `"1234"`

// Return `"Login Successful"` or `"Invalid Credentials"`

// function login(username,password){
//     if(username =="admin" & password == "1234") {
//         return "Login Sucessfull"
//     }
//     else{
//         return "Invalid Credentials"
//     }
// }
// console.log (login("abc",7655))


// ----------------------------------------------------------------------

// ### 8. Function Reuse

// **Concept:** DRY principle

// 👉 Create:

// ```jsx
// isEven(number)
// ```

// Use it inside another function:

// ```jsx
// checkNumber(number)
// ```

// Return `"Even"` or `"Odd"`
// function checkNumber(number){
function isEven(number){
    if(number%2){
        return"Even"
    }
    else{
        return"odd"
    }
 
}
// }
console.log(isEven(20))