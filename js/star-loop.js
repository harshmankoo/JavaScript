let num = 5;
string = " ";

  for (let i = 0; i <= 5; i++){
    string = "";
    for (let j = 0; j <= 5; j++) 
        string = string + "* ";

  console.log(string);

  }




  // // Nested Loop

// let num = 10

// for (let i = 0; i < num; i++) {
//     let str = ""
//     // console.log("*");
//     for(let j = 0 ; j<=i ; j++){
//         // console.log("*");
//         str = str + "* "
//     }

//     console.log(str); // * *
//     // str = ""
// }

// console.log("navjot");

// let num = 5;

// for (let i = 1; i <= num; i++) {
//   let str = "";
//   for (let j = 0; j <= num; j++) {
//     str = str + "* "
//   }
//   console.log(str);
// }

// ===================================================== with condition
// let num = 5;
// for (let i = 5; i < num; i++) {
//   let string = "";
//   for (let j = 5; j < num; j++) {
//     if(j <= i){
//         string = string + "* ";
//     }
//   }
//   console.log(string);
// }

// ===================================================
// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     if (j <= num - 1) {
//         str += "* ";
//       // epty
//     } else {
//     }
//   }
//   console.log(str);
// }

// let num = 10;
// for (let i = 1; i <= num; i++) {
//   let str = "";
//   for (let j = 1; j <= num; j++) {
//     ( j <=( num - i)) {
//         str = str + "  "
//     } else {
//         str = str + "* "
//     }
//   }
//   console.log(str);
// }



let num = 5

// for (let i = 0; i < num; i++) {
//     let str = ""
//     for (let j = 0; j < num-i; j++) {
//         str = str + "* "
//     }
//     console.log(str);
// }

// for (let i = 1; i <= num; i++) {
//     let str = ""
//     for (let j = 1; j <= (num - i + 1); j++) {
//         str = str + "* "
//     }
//     console.log(str);
// }