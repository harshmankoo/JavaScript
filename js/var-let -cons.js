// 1. var
// 2. let
// 3. const


// // window Object
// a = 10
// price = 550
// {
//     a = 20
//     console.log("Inner ", a);
// }

// console.log("Outer ", a);


// ============== Let =================
// let age; // Declare
// age = 50 // Initialize

// let a = 10
// {
//     let a = 20
//     console.log("inner ", a);
// }
// console.log("outer ", a);



// ============== Const ===================
// const a;
// let a;
// a = 10
// console.log(a);


// const age = 18
// age = 19 // Cannot update!
// let price = 550
// console.log(age);


// ============ Var ===================
// var -> functional scope
// let a = 555
// {
//     // let a = 20
//     var a = 20
//     let b = 550
// }
// console.log(a);



var a = 250
function abc() {
   var a = 562
//    let b
   console.log("inner a = ",a);
}
abc()
console.log(a);
