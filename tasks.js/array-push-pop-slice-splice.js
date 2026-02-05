let evenNo = [];
let count = 0;

for (let i = 0; i <= 100; i++) {
       if (i % 2 === 0) {
              evenNo.push(i);
              count++;
       }
}
console.log(evenNo);
console.log(count);

let arr = ["banana", "apple", "lichi"];
arr.push("mango", "strawberry");
console.log(arr);
// arr.pop();
// console.log(arr);

// let s = arr.slice(1,3)
// console.log(s);

const group = [1,2,3,4,5,6,7,8,9];
group.splice(0,3,99,98,99,99,99,99);
console.log(group);