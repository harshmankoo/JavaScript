// TASK 1: The Exam Result
// 1. Create a function 'checkExam(score)' that returns a Promise.
// 2. If score >= 33, resolve("Passed! :mortarboard:").
// 3. If score < 33, reject("Failed. :cry:").
// 4. Call the function with score 80 and handle the result.
// ============================================================================
// TASK 2: The Pizza Chain
// 1. Create 3 functions that return Promises:
//    - placeOrder() -> Resolves "Order Placed" after 2s.
//    - preparePizza() -> Resolves "Pizza Baked" after 3s.
//    - deliverPizza() -> Resolves "Delivered!" after 1s.
// 2. Chain them: placeOrder -> .then(prepare) -> .then(deliver) -> .then(print "Time to Eat!").
const placeOrder =()=>{ 
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Order Placed")
    }, 2000);
})
}
const preparePizza =() =>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pizza Baked")
    }, 3000);
})
}
const deliverPizza = ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Delivered!")
    
    }, 2000);
})
}
placeOrder()
.then((msg) => {
    console.log(msg)
    return preparePizza();
})
.then((msg)=>{
    console.log(msg)
    return deliverPizza();
});

// =====================================================================================================
// TASK 3: The System Failure (Boss Level)
// 1. Create a function 'connectToServer()'.
// 2. Use setTimeout to wait 2 seconds.
// 3. Always REJECT with the message: "Server Timeout! Try again."
// 4. Handle the error using .catch() and print "System Error: Server Timeout!"
// const connectToServer = () => {
//     return new Promise((  resolve , reject) => {
//             setTimeout(() => {
//             reject("Server Timeout! Try again.")
//     }, 2000);
// })
// }
// connectToServer().catch((error) => {
//     console.log( error ,"System Error: Server Timeout!" );
// })


// =============================================================================


// * JAVASCRIPT PROMISES PRACTICE SHEET
//  * * Instructions:
//  * 1. Create a new file 'promises.js' or use your browser console.
//  * 2. Solve the tasks below one by one.
//  * 3. Use .then() and .catch() to handle results.
// ===================================================
//  TASK 1: The Simple Success
// 1. Create a Promise called 'simplePromise'.
// 2. Inside, use resolve("Success!").
// 3. Consume the promise and log the message.
// // 

// const simplePromise =new Promise((resolve, reject) => {
//     return resolve("Success!")
// })

// simplePromise.then((message) =>{
//     console.log(message)
// })
// =============================================================

//  TASK 2: The Conditional Promise
// 1. Create a variable `isLogged = true`.
// 2. Create a Promise.
// 3. If `isLogged` is true, resolve("User is logged in").
// 4. If false, reject("User not logged in").
// 5. Test it by changing the variable.

// const attend = new Promise((resolve, reject) => {
//    let  isLogged = false;
//     if(isLogged === true){
//         resolve("User is Logged in")
//     }else{
//         reject("User Not Logged in")
//     }
    
// })
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// =====================================================================


//  TASK 3: The Delay Function (Very Common!)
// 1. Create a function `wait(ms)` that returns a Promise.
// 2. Inside, use `setTimeout` to resolve after `ms` milliseconds.
// 3. Usage: wait(2000).then(() => console.log("Waited 2 seconds!"));

// function wait(ms){
//    return new Promise(resolve => setTimeout(resolve,ms))
    
// }
// wait(2000).then(() => {
//     console.log("Waited for 2 seconds")
    
// })
// =======================================================================


// TASK 4: The Dice Roll
// 1. Create a Promise that generates a random number (1-6).
// 2. If the number is 6, resolve("Jackpot! 🎲").
// 3. If the number is 1-5, reject("You lost. Rolled a " + number).
// 4. Handle both cases.


// const diceroll= new Promise((resolve,reject) =>{
//     const number = Math.floor(Math.random()*6)+1;

// if(number === 6){
//     resolve("Jackpot!")
// }
// else{
//     reject("You lost . Rolled a " + number)
// }
// })
// diceroll.then((result) => {
//     console.log(result)
    
// }).catch((err) => {
//     console.log(err)
// });
// ===========================================================

//  TASK 5: The Morning Routine (Chaining)
// 1. Create 3 functions that return Promises:
//    - `shower()` -> Resolves "Showered!" after 2s.
//    - `dress()` -> Resolves "Dressed!" after 2s.
//    - `eatBreakfast()` -> Resolves "Ate food!" after 3s.
// 2. Chain them: shower -> .then(dress) -> .then(eat) -> .then(log "Ready to go!").

// =========


// const dailyroutine = (() => {
//    return (setTimeout(() => {resolve("Showered")
//     }, 2000));

//  let dressed (() => resolve(  setTimeout(() => {
//         resolve("Dressed !")
//     }, 2000)));

//   let eatBreakfast (()=> resolve ( setTimeout(() => {
//         resolve("Ate food!")
        
//     }, 2000)));
// })


// function shower() {
//    return new Promise(...)
// }


// ==========

// const showered = ()=>{
//     return new Promise((resolve) => {
//      setTimeout(() => { resolve( "Showred!")
        
//      }, 2000);

//  } )}

//  const dressed = () => {
//     return new Promise((resolve) => {setTimeout(() => {
//         resolve ("Dressed !")
//     }, 2000);
        
//     })
//  }
//  const eatBreakfast = () =>{
//     return new Promise((resolve) => {setTimeout(() => {
//         resolve("Ate Food !")
//     }, 3000);
        
//     })
//  }

// showered()
//   .then((msg) => {
//      console.log(msg);
//      return dressed();
//   })
//   .then((msg) => {
//      console.log(msg);
//      return eatBreakfast();
//   })
//   .then((msg) => {
//      console.log(msg);
//      console.log("READY TO GO");
//   });
//   ================================================================

//  TASK 6: The Calculator Chain (Passing Data)
// 1. Create a Promise that resolves with the number 5.
// 2. .then() -> multiply by 2 (should return 10).
// 3. .then() -> add 20 (should return 30).
// 4. .then() -> log the final result.

const calculator = (num) => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      resolve ( 5 )
     }, 2000);
   })
   multiply()
}
const multiply = (num) => {
   return new Promise((resolve, reject) => {
      setInterval(() => {
          resolve( num * 2);
      }, 1000);
   })
}
const addtiion = (num) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(num + 20)
      }, 1500);
   })
}

calculator(5).then((num) => {
console.log(`the number is ${num}`);
   multiply(num).then((num) => {
      console.log(`multiply by 2 is ${num}`);
      addtiion(num).then((num) => {
         console.log(`add 20 is ${num}`);
         console.log(`the final result is ${num}`);
         return;
      })
   })
   return ;
})


// ==========================================================================
//  TASK 7: The File Downloader
// 1. Create a function `downloadFile(url)`.
// 2. Resolve "Downloaded [url]" after 3s.
// 3. Create a function `compressFile(file)`.
// 4. Resolve "Compressed [file]" after 2s.
// 5. Chain them: download -> compress -> log "Done!".

// const downloadFile = (url) => {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//    resolve ("Downloaded [url]")
// }, 3000);
// });
// };

// const compressed  = (file) => {
// return new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve ("Compressed [file]")
//    }, 2000);
// });
// };

// downloadFile("google.com").then((url) => {
//    console.log(url);
//    compressed("file").then((file) => {
//       console.log(file);
//    })
// })
// =======================================================================

// function checkAge(Age){
//     return new Promise((resolve, reject) => {
//         if (Age >20){
//             resolve("This person is eligible for drive")
//         } else{
//             reject("This person is not Eligible for the Drive")
//         }

//     });
// }
// checkAge(2)

// .then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// });


