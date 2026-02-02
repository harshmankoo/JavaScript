// 1. ARITHMETIC OPERATORS (The Math)

// var a = 10;
// var b = 3;

// console.log("Addition (+):",       a + b);  
// console.log("Subtraction (-):",    a - b);  
// console.log("Multiplication (*):", a * b);  
// console.log("Division (/):",       a / b);  
// console.log("Exponentiation (**):", b ** a); 
// console.log("Modulus (%):", a % b); 


// // 2. INCREMENT & DECREMENT (The Loop Tools)

// var score = 100;

// score++; 
// // console.log("After ++:", score);

// ++score;
// console.log(score) 

// var num = 200
// num--; // Decrement (Subtract 1)
// console.log("After --:", num);
// num++;
// console.log(num)

// // Note: 
// // x++ (Post-increment) -> Uses value first, THEN adds.
// // ++x (Pre-increment)  -> Adds first, THEN uses value.


// // 3. ASSIGNMENT OPERATORS (The Shortcuts)

// var x = 10;
// console.log("here x is 10",x)
// // Standard Assignment

// // // // Addition Assignment (+=)
// x += 5; // 
// console.log("x is now:", x);

// // // // Subtraction Assignment (-=)
// x -= 10; 
// console.log("x is now:", x); 


// ==========================================
// 4. COMPARISON OPERATORS (True / False)
// ==========================================

// var age = 18;

// // // Relational
// console.log(age > 18); //false
// console.log(age < 18); // false
// console.log(age >= 18); //true
// console.log(age <= 18); // true


// let val1 = 5;
// let val2 = "5";

// console.log(val1 == val2);  // true
// console.log(val1 === val2); // false
// console.log(val1 != val2); // false
// console.log(val1 !== val2);// true









// concantatnation







// =================================
//    2. String + String (Concatenation)
// ================================ 
var firstName = "Harsh";
var lastName = "Singh"; 
console.log(firstName + " " + lastName);



/* ===============================
   3. String + Number
================================ */
var age = 22;

console.log("Age is " + age);



/* ===============================
   4. Number + String
================================ */
var score = 100;

console.log(score + " points");


/* ===============================
   5. Left to Right Execution
================================ */
console.log(10 + 5 + "10"); 


/* ===============================
   6. String First = All String
================================ */
console.log("10" + 5 + 5 +10);


/* ===============================
   7. Parentheses Control Math
================================ */
console.log("Total: " + (10 + 5));


//    8. Operator Behavior (Interview)
console.log(10 + "5");   // 105 
console.log("10" - 5);  // 5
console.log("10" * 2);  // 20
console.log("10" / 2); // 5
console.log(5 - "10") // -5 

// NOTE:
// Only + does string concatenation
// Other operators convert string to number


//    9. Best Practice (Template Literals)
// var name = "Aman";
// var marks = 88;

// console.log(`Student ${name} scored ${marks} marks`);


var fName =  "Harsh"
var lName =  "singh"

console.log(fName === lName)

var a = 10;
var b = "10";
console.log(a != b)





