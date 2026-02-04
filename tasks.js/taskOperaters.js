// // arithmetic operators

var a = 10;
var b = 5;
console.log("addition (+):", a + b);

console.log("subtraction (-):", a - b);

console.log("multiplication (*):", a * b);

console.log("division (/):", a / b);

console.log("exponentiation (**):", a ** b); //raises the first operand to the power of the second operand.

console.log("modulas(%):", a % b); //for reminder
   





//   ---increment and decremnet ----





// Create a JavaScript program that:

// Starts with a number

// Increases the number by 1 using increment

// Decreases the number by 1 using decrement

// Displays the result

let marks = 100;

marks++;  //post increment
console.log("After Increment the value: ", marks ) 
++marks;   //pre increment
console.log( marks)

let num = 50;
num--;  //post dcrement
console.log("After decrement :", num)
--num; //pre decrement
console.log(num)






// ------------ASSIGNMENT OPERATOR--------





// Create a variable marks and assign value 50.

// Add 10 marks using +=.

// Subtract 5 marks using -=.

// Multiply marks by 2 using *=.

// Divide marks by 5 using /=.

// Print the value after each step.


var marks=50;
console.log("Here Assign value of the marks is:" , marks)

 marks+=10;    
console.log("Here the value of the marks is adding :",marks)

marks-=5;
console.log("here is the value of marksa after the subtract:",marks)

marks*=2;
console.log("here is the value of marksa after the multiply:",marks)

marks/=5;
console.log("here is the value of marksa after the divide:",marks)







// ---------------comparision operator--------------


// == → checks value

// === → checks value + type

// != → value not equal

// !== → value or type not equal




// let age = 20;

// // check if age is greater than 18
// console.log(age > 18);   //  True

// // check if age is less than 18
// console.log(age < 18);    //false

// // check if age is equal to 18
// console.log(age == 18);     //  false

// // check if age is NOT equal to 18
// console.log(age != 18);     //  true

// // check if age is greater than or equal to 18
// console.log(age >= 18);     // true

// // check if age is less than or equal to 18
// console.log(age <= 18); // false





// let num1 = 10;
// let num2 = "10";

// console.log(num1 == num2);     // // TRUE
// console.log(num1 === num2);    // False
// console.log(num1 != num2);     //false
// console.log(num1 !== num2);   //True


// (Concatenation) Concatenation means joining things together.


// 2. string + String

var fisrtName = "Harsh";
var lastName = "Deep";
console.log(fisrtName + " " + lastName)

// 3.string + number

 var age=90;
 console.log("My Grandfather age is " + age)

//  4. number+ String

 var score=1500;
 console.log(score +" Virat Score run in one t20 series");



 // //    5. Left to Right Execution

 
// console.log(10 + 5 + "10");      // 1510

// //    6. String First = All String  If string comes first, everything after becomes a string



// console.log("10" + 5 + 5 + 10);   //105510




// //    7. Parentheses Control Math
// // ================================ */
// // console.log("Total: " + (10 + 5));       //total:15