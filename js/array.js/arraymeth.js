/ // //    1. ARRAY CREATION

// const arr = [];
// const arr1 = [1, 2, 3, 4, 5];
// console.log(`Array 1 for array funtions`,arr1)
// From string to array
// const arr2 = Array.from("Guri");    
// console.log(arr2)

// const arr3 = [10, 20, 30];
// // // console.log(arr3)


// // //    2. ADD / REMOVE ELEMENTS (MUTATES)

// // arr1.push(6);   
// // console.log(`Array push`,arr1)

// // arr1.pop();         // remove end
// // console.log(`Array pop`,arr1)

// // arr1.unshift(112);

// // console.log(arr1)    // add start
// // arr1.shift();       // remove start
// // console.log(arr1)    

// // //    3. MERGE / COPY ARRAYS

// // // concat
// // const merged = arr1.concat(arr3);
// // // console.log(merged);



// // slice 
// const sliced = arr1.slice(1, 4);
// console.log(sliced)
// console.log(arr1)


// // splice
// arr1.splice(2, 4, 99);
// console.log(arr1)

// // 4. SORTING & REVERSING (MUTATES)

// const nums = [10, 5, 20, 2];
// console.log(nums)
// nums.sort((a, b) => a - b);
// console.log(nums)
// nums.reverse();
// console.log(nums)


// //    7. STRING CONVERSION
// console.log(arr1)
// const joined = arr1.join("-");
// console.log(joined)
// console.log(typeof joined)
// const asString = arr1.toString();
// console.log(asString)


// /* ===============================
//    8. FLATTENING ARRAYS
// ================================ */

// const nested = [1, [2, [3, 4,[5,6,[7,8,9]]]]];

// const flatArr = nested.flat(5);
// console.log(flatArr)



// const matrix = [
//     [1, 2, 3],  // Row 0
//     [4, 5, 6],  // Row 1
//     [7, 8, 9]   // Row 2
// ];

// console.log(matrix[0][2]); 
// console.log(matrix[2][1])
// // console.log(matrix[2][2]); // Output: 9




// // const numbers = [10, 20, 30, 40, 50];

// // // 1. CLEARING AN ARRAY FAST
// // numbers.length = 0; 
// // console.log(numbers); 

// // // 2. SHORTENING AN ARRAY
// // const letters = ["A", "B", "C", "D", "E"];
// // letters.length = 2; 
// // console.log(letters);