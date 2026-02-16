
const a = 10
const b = 20
const str = "hello"
const isActive = true


const arr = [10, 20, "hello", true, ["new Array", 20], () => { console.log("Hello World") }] // to store multiple values/element/data in it

// console.log(a);
// console.log(str);
// console.log(isActive);

// console.log(arr);



// Index
// Array's starting point will always be 0 index
const arr1 = [1, 5, 4, 3, 2, true]

console.log(arr1);
console.log(arr1.length);

// index
// arr[<index>]
// arr1.push(20)
const value = arr1[4]
console.log(value);
// console.log(arr1.indexOf(225));


// user will provide us the value
// find that values's index is array -> 

function findIndex(arr, value) {
    let index = -1
    for (const val of arr) {
        index++
        if (val === value) {
            return index
        }
    }
    return -1
}

console.log(findIndex(arr1, 2));


const func = arr[5]
func()
console.log(func);

const arr4 = arr[4]
console.log(arr4);

const arr5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr5);
