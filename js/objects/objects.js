const obj = {
  name: "Jagjot",
}
console.log(typeof obj)

// name is a keyword in JS where we use to refer

const info = [
{ rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
{ rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
{ rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
{ rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
{ rollNo: 5, name: "Neha", marks: [88, 77, 66, 55] }
];

// const info = ["sugar","apple"]
// console.log(typeof info);
// console.log(info[1].marks[2])
/********************************************************
// 2. ACCESSING OBJECT PROPERTIES
// ---------------------------------------------------------
// There are 2 ways:

// 1. Dot Notation
// 2. Bracket Notation
// ********************************************************/
console.log(person.city)
console.log("Name (dot):", person.name);
console.log("Age (dot):", person.age);

console.log("City (bracket):", person["city"]);
console.log(person["city"])


// /********************************************************
// 3. UPDATING OBJECT VALUES
// ---------------------------------------------------------
// You can change existing values easily.
// ********************************************************/

person.age = 29;
console.log("Updated Age:", person.age);

console.log(person)


// /********************************************************
// 4. ADDING NEW PROPERTIES
// ---------------------------------------------------------
// If key does not exist, it will be added.
// ********************************************************/

person.country = "India";
console.log("After Adding Country:", person);


// /********************************************************
// 5. DELETING PROPERTIES
// ---------------------------------------------------------
// delete keyword removes a key from object.
// ********************************************************/

delete person.city;
console.log("After Deleting City:", person);


// /********************************************************
// 6. NESTED OBJECTS
// ---------------------------------------------------------
// Objects can contain other objects.
// ********************************************************/

var student = {
  rollNo: 101,
  name: "Rahul",
  marks: {
    subject1: 78,
    subject2: 82,
    subject3: 91
  }
};

console.log("Student Name:", student.marks.subject2);
// console.log("Subject1 Marks:", student.marks.subject1);


// /********************************************************
// 7. OBJECT WITH ARRAY
// ---------------------------------------------------------
// Objects can contain arrays also.
// ********************************************************/

var employee = {
  id: 1,
  name: "Aman",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log("First Skill:", employee.skills[0] );


// /********************************************************
// 8. OBJECT METHODS (FUNCTIONS INSIDE OBJECTS)
// ---------------------------------------------------------
// When a function is inside an object, it is called a METHOD.
// ********************************************************/

var car = {
  brand: "Mahindra",
  model: "Thar",
  start: function () {
    console.log("Car is starting...");
  },
  details: function () {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
  }
};

// car.start();
// car.details();


// /********************************************************
// 9. USING THIS KEYWORD
// ---------------------------------------------------------
// this refers to the current object.
// ********************************************************/

var user = {
  name: "Neha",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

// user.greet();


// /********************************************************
// 10. LOOPING THROUGH OBJECT (BASIC)
// ---------------------------------------------------------
// Using for...in loop
// ********************************************************/

var laptop = {
  brand: "HP",
  ram: "16GB",
  processor: "i5",
  price: 60000
};

for (const x  in laptop) {
  console.log(`${x}: ${laptop[x]}`)
}