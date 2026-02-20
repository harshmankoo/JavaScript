// function addition(x,y) {
//     return x + y
// }

// const addition = (x,y) =>  x + y
// // function {
// //     // lines of code
// // }

// function functionName(num1 , num2) {
//  console.log(num1 + num2);
//     return num1 + num2
// }
// functionName(2,3)

// const  functionName = (num) => {
//   if (num % 2 === 0){
//     return "even"
//   } else {
//     return "odd"
//   }
// }

// console.log(functionName(300000000001));





// ---------------------------------------------------------------------------------------------------------
// ✅ Task 1: Add Two Numbers

// Create an arrow function that takes two numbers and returns their sum.

const add =(num1 , num2 )=>{
    return num1 + num2;
}
console.log( add(2,3));


// --------------------------------------------------------------------------------------------------------------
// Create an arrow function that takes one number and returns its square.
// square(4) → 16
  
const number=(num)=>{
return num * num 
}
console.log(number(4))

// ---------------------------------------------------------------------------------------------------------------
// ✅ Task 3: Greet User

// Create an arrow function that takes a name and returns:

 const mainName=(user)=>{
            return `Hello , ${user}`
 }
 let backname = mainName;
 console.log (backname("Harshdeep Singh"));

//  -------------------------------------------------------------------------------
// ✅ Task 4: Check Even or Odd

// Create an arrow function that returns:

// "Even" if number is even

// "Odd" if number is odd

const checknum=(num)=>{
    if (num/2===0){
        return "The Number is Even"
    }

    else{
        return "The Number is Odd"
    }
}

let abc = checknum
console.log(abc(10))

// --------------------------------------------------------------------------------------
// ✅ Task 5: Find Largest Number

// Create an arrow function that takes two numbers and returns the larger one.

const largernum =(num1,num2)=>{
    if(num1 >num2) {
        return (num1 + "is a larger number")
    }else{
       return (num2 + "is a lager number")
    }
}
console.log(largernum(25,35))
// --------------------------------------------------------------------------------------
// ✅ Task 7: Filter Even Numbers

// Given an array:

 const numbers = [1, 2, 3, 4, 5, 6]


// Use an arrow function to return only even numbers.

const task = numbers.filter((pen)=>{

        return pen % 2===0;
    
});
console.log(task);
// ----------------------------------------------------------------------------------------


// let sum = (num1 , num2) => num1 + num2
// console.log(sum(10,20));

// let sub = (num1 , num2) => num1 - num2
// console.log(sub(30,20));

// let multiply = (num1 , num2) => num1 * num2
// console.log(multiply(10,20));

// let devision = (num1 , num2) => num1 / num2
// console.log(devision(100,20));

// let modulous = (num1 , num2) => num1 % num2
// console.log(modulous(2,21));