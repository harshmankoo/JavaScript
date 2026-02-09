// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//   let string = "*";
//   for (let j = 1; j < i; j++) {
//     string = string + "*";
//   }
//     console.log(string);
// }

// -------------------------------------------------------

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//   string = "";
//   for (let j = 1; j <= 5; j++){
//     string = string + "* ";
//   }
//   console.log(string);
// }

// // --------------------------------------------------------------

// // STARS IN A EVEN ROW*
// // *****
// // *
// // *****
// // *
// // *****
// // *
// // *****
// // *
// // *****

// for( let i= 1; i<=10;i++){
//   if(i%2===0){
//     console.log("*****");
//   }
//     else{console.log("*");
//   }
//   }

// -----------------------------------------------------------
// 1
// 12
// 123
// 1234
// 12345

// for (let i = 1; i <= 5; i++) {
//   let string = "";
//   for (let j = 1; j <= i; j++) {
//     string = string + j;
//   }
//   console.log(string);
// }

// ------------------------------------------------------------
// * * * * *
// * * * *
// * * *
// * *
// *

// for (let i = 5; i >= 1; i--) {
//   let string = "";
//   for (let j = 1; j <= i; j++) {
//     string= string + "* ";
//   }
//   console.log(string);
// }



// --------------------------------------------------------------------/
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let num = 5 ;
// for(let i = 1 ; i <= num ; i++ ){
//   let string = "";
//   for ( let j =  1 ; j <= num ; j++){
//    if(j <= num - i){
//      string = string + "" 
//     }else{
//       string = string + "* "
//    }
//   }
//   console.log(string);
  
// }




// -----------------------------------------------------------
 
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let num = 5 ;
// for(let i = 1 ; i <= num ; i++ ){
//   let string = "";
//   for ( let j =  1 ; j <= num ; j++){
//    if(j <= num - i){
//      string = string + " " 
//     }else{
//       string = string + "* "
//    }
//   }
//   console.log(string);
// }

// ----------------------------------------------------------------------------------------
// * * * * *
//  * * * *
//   * * *
//    * *
//     *


// for (let i = 1; i <= 5; i++) {
//   let string = "";

//   for (let j = 1; j < i; j++) {
//     string = string + " ";
//   }

//   for (let k = i; k <=5; k++) {
//     string = string + "* ";
//   }

//   console.log(string);
// }




// ---------------------------------------------------------------------
// 1  
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15

// let num = 5 ;
// let n = 1 ;
// for (let i = 0; i < num; i++) {
//   let string = "";                                                         
//   for (let j = 0n; j <= i; j++) {                                          
//     if( j <= i){                                                             
//         string += (n++ + "  ")                                      
//     }                                                                         
//   }
//   console.log(string);
// }






// ------------------------------------------------------
// A  
// B  C  
// D  E  F
// G  H  I  J
// K  L  M  N  O

// let num = 5;
// let n = 0;                                                                  
// for (let i = 0; i < num; i++) {                                            
//   let string = "";                                                          
//   for (let j = 0; j <= i; j++) {                                            
//     if (j <= i) {                                                              
//         string += String.fromCharCode(65 + n++) + "  ";
//     }
//   }
//   console.log(string);
// }



// ------------------------------------------------------------
// * * * * *
//   * * * *
//     * * *
//       * *
//         *


let num = 5;
for (let i = 1; i <= num; i++ ) {
  let string = "";
  for (let j = 1; j <= num; j++) {                             
    if (j <= num - 1 ){                                             
      string += " d ";                                         
    } else {                                                   
      string += "* ";                                         
    }
  }
  console.log(string);
}



// -------------------------------------------------
// *
//   *
//     *
//       *
//         *

// for (let i = 1; i <= 5; i++) {
//   let string = "";
//   for (let j = 1; j <= 5; j++) {
//     if (i === j) string += "* ";
//     else string += "  ";
//   }
//   console.log(string);
// }
// --------------------------------------------------




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
let num = 5;
for (let i = 1; i <= num; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    if (j <= num - 1) {
        str += "* ";
    } else {
    }
  }
  console.log(str);
}

let num = 10;
for (let i = 1; i <= num; i++) {
  let str = "";
  for (let j = 1; j <= num; j++) {
    ( j <=( num - i)) {
        str = str + "  "
    } else {
        str = str + "* "
    }
  }
  console.log(str);
}

