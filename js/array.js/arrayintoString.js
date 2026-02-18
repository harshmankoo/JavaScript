var fruits = ["Apple", "Mango", "Banana"];

var result = fruits.toString();
                                                                                //   by to .tostring method
console.log(result);
// -----------------------------------------------------------------------------------


var fruits = ["Apple", "Mango", "Banana"];

var result = fruits.join("-");
                                                                                //   by to .join method
console.log(result);                                                  // it let to choose seprator
// ------------------------------------------------------------------------------------------------------------------


// converting strings into Array
var text = "Hello World JavaScript";

var result = text.split(" ");

console.log(result);                                                                     //it let us also use seprator
                                                                                    // " " means split where space appears.
// ------------------------------------------------------------------------------------------

var text = "Apple,Mango,Banana";

var result = text.split(",");                                                                   //split by coma

console.log(result);

// --------------------------------------------------------------------------------------------

var text = "Hello";

var result = text.split("");

console.log(result);                                                           //    split by each corrector
// -----------------------------------------------------------------------------------------------------------------------

var text = "Hello";

var result = Array.from(text);
                                                                                 //    by array  .from
console.log(result);
