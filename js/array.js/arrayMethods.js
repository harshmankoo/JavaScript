


// --------------------------------------------------------------------------------------------------------------------------------------
// function addition(x,y) {
//     return x + y
// }                                                                       //arrow  function

// const addition = (x,y) =>  x + y






const dressCatalog = [
    { id: 101, name: "Summer Floral Dress", price: 1500, inStock: true },
    { id: 102, name: "Velvet Evening Gown", price: 4500, inStock: false },
    { id: 103, name: "Cotton A-Line Kurti", price: 800,  inStock: true },
    { id: 104, name: "Sequin Party Dress",  price: 3200, inStock: true }
];

console.log(dressCatalog[0].name);

// -----------------------------------------------------
// 1. .forEach() -> THE PRINTER
// GOAL: Just run a loop. Does NOT create a new array.
// -----------------------------------------------------
// console.log("\n--- 1. forEach() ---");

// dressCatalog.forEach((dress) => {
//     console.log(`Checking inventory for: ${dress.name}`);
// });



// dressCatalog.forEach((x) => {
//     console.log(x.name)
// });

// -----------------------------------------------------
// 2. .map() -> THE TRANSFORMER
// GOAL: Create a NEW array of the exact same length by changing data.
// -----------------------------------------------------
// console.log("\n--- 2. map() ---");

// Let's extract ONLY the names for a dropdown menu
const dressNames = dressCatalog.map((dress) => {
    return dress.name;
});
console.log("Extracted Names:", dressNames);


// -----------------------------------------------------
// 3. .filter() -> THE GATEKEEPER
// GOAL: Create a SMALLER array with only items that pass a true/false test.
// -----------------------------------------------------
// console.log("\n--- 3. filter() ---");

// Let's find only the dresses we can actually sell right now
// const availableDresses = dressCatalog.filter((dress) => {
//     return dress.inStock === true;
// });
// console.log("Available to Buy:", availableDresses);


// -----------------------------------------------------
// 4. .find() -> THE SNIPER
// GOAL: Find the VERY FIRST item that matches and return the Object itself.
// -----------------------------------------------------
// console.log("\n--- 4. find() ---");

// A customer searches for ID 103
const searchedDress = dressCatalog.find((dress) => {
    return dress.inStock === true;
});
console.log("Found Dress:", searchedDress);


// -----------------------------------------------------
// 5. .reduce() -> THE ACCUMULATOR
// GOAL: Boil the whole array down into ONE single value (like a total sum).
// -----------------------------------------------------
// console.log("\n--- 5. reduce() ---");

// Let's calculate the total value of ALL dresses in the catalog
// 'total' is the bucket (starts at 0). 'currentDress' is the item we are looping over.
// const totalInventoryValue = dressCatalog.reduce((total, currentDress) => {
//     return total + currentDress.price;
// }, 0);

// console.log("Total Inventory Value: ₹" + totalInventoryValue);


/*******************************************************
 * PART 2: OBJECT METHODS (Breaking into the Vault)
 * Why? You cannot use .map() or .filter() directly on an Object.
 * You must convert the Object into an Array first!
 *******************************************************/

// Let's isolate just ONE object to practice on
// const singleDress = {
//     id: 999,
//     name: "Winter Jacket",
//     price: 2500
// };

// console.log("\n--- WORKING WITH A SINGLE OBJECT ---", singleDress);

// // -----------------------------------------------------
// // 6. Object.keys() -> THE LABEL EXTRACTOR
// // GOAL: Get a list of the property names.
// // -----------------------------------------------------
// const keysList = Object.keys(singleDress);
// console.log("\n6. Object.keys():", keysList);
// // Output: ["id", "name", "price"]


// // -----------------------------------------------------
// // 7. Object.values() -> THE DATA EXTRACTOR
// // GOAL: Get a list of just the raw data.
// // -----------------------------------------------------
// const valuesList = Object.values(singleDress);
// console.log("7. Object.values():", valuesList);
// // // Output: [999, "Winter Jacket", 2500]


// // -----------------------------------------------------
// // 8. Object.entries() -> THE "EVERYTHING" EXTRACTOR
// // GOAL: Convert the object into an Array of Arrays (Key-Value pairs).
// // -----------------------------------------------------
// const entriesList = Object.entries(singleDress);
// console.log("8. Object.entries():", entriesList);