// // // var students = [
// // // { rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
// // // { rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
// // // { rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
// // // { rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
// // // { rollNo: 5, name: "Neha", marks: [88, 77, 66, 55] }
// // // ];

// // // /**********************************************************************
// // // TASK 1: Calculate Result of One Student

// // // Create function:

// // // calculateResult(student)

// // // Return object format:

// // // {
// // // rollNo,
// // // name,
// // // total,
// // // percentage,
// // // status
// // // }

// // // Rules:

// // // * total = sum of 4 subjects
// // // * percentage = total / 4
// // // * PASS only if ALL subjects >= 33
// // // * If any subject < 33 → FAIL
// // //   **********************************************************************/

// // // function calculateResult(student) {
// // // // TODO
// // // }

// // // /**********************************************************************
// // // Generate Results of All Students

// // // Create function:

// // // generateResults(students)

// // // Return array of result objects using calculateResult()
// // // **********************************************************************/

// // // function generateResults(students) {
// // // // TODO
// // // }

// // // /**********************************************************************
// // // Find Topper (NO SORT ALLOWED)

// // // Create function:

// // // getTopper(results)

// // // Return student with highest percentage
// // // **********************************************************************/

// // // function getTopper(results) {
// // // // TODO
// // // }

// // // /**********************************************************************
// // //  Get Failed Students List

// // // Create function:

// // // getFailedStudents(results)

// // // Return array of students where status === "FAIL"
// // // **********************************************************************/

// // // function getFailedStudents(results) {
// // // // TODO
// // // }

// // // /**********************************************************************
// // // Subject Toppers

// // // Create function:

// // // getSubjectToppers(students)

// // // Return format:

// // // [
// // // { subject: 1, name: "StudentName", marks: highestMarks },
// // // { subject: 2, name: "StudentName", marks: highestMarks },
// // // { subject: 3, name: "StudentName", marks: highestMarks },
// // // { subject: 4, name: "StudentName", marks: highestMarks }
// // // ]

// // // (No sort allowed)
// // // **********************************************************************/

// // // function getSubjectToppers(students) {
// // // // TODO
// // // }

// // // /**********************************************************************
// // // TEST RUN (DO NOT MODIFY)
// // // **********************************************************************/

// // // var results = generateResults(students);
// // // console.log("All Results:", results);

// // // var topper = getTopper(results);
// // // console.log("Topper:", topper);

// // // var failed = getFailedStudents(results);
// // // console.log("Failed Students:", failed);

// // // var subjectToppers = getSubjectToppers(students);
// // // console.log("Subject Toppers:", subjectToppers);

// // // /**********************************************************************
// // // EXPECTED OUTPUT CHECKS (SHOULD MATCH)

// // // Topper should be: Aman
// // // Failed student: Karan
// // // **********************************************************************/

// // var students = [
// // { rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
// // { rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
// // { rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
// // { rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
// // { rollNo: 5, name: "Neha", marks: [88, 77, 66, 55] }
// // ];

// // function calculateResult(student) {
// //   let total = 0;
// // for(let i=0;i<student.marks.length;i++){
// //   total=total+students.marks[i];
// // }
// // console.log(total)
// // }
// // let percentage= total   /students.marks.length;

// // // function calculateResult(student) {
// // //   console.log(student);
// // //   let total = 0;
// // //   for (let i = 0; i < student.length; i++) {
// // //     console.log("total : ",total)
// // //     console.log("student.marks[i] : ",student[i].marks);
// // //     total = total + student[i].marks;
// // //   }
// // //   console.log(total);
// // //   let percentage = total / student.marks.length;
// // //   console.log(percentage);
// // // }
// // // calculateResult(students)

// var students = [
//  { rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
//  { rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
//  { rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
//  { rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
//  { rollNo: 5, name: "Neha", marks: [88, 77, 66, 55] }
// ];

// function calculateResult(student){
//  console.log(students);
//     var total=0;
// //  It adds all numbers inside the marks array
// //  And stores the final sum inside total
// for (var i = 0; i < student.marks.length; i++) {
//     total = total + student.marks[i];

// console.log(total);
// }
// }
// // }
// // calculateResult(students[1]);   // Here i am calling the function

// //     var percentage = total / student.marks.length;

// //     var status = "PASS";

// //     // Check fail condition
// //     for (var i = 0; i < student.marks.length; i++) {
// //         if (student.marks[i] < 33) {
// //             status = "FAIL";
// //             break;
// //         }
// //     }

// //     return {
// //         rollNo: student.rollNo,
// //         name: student.name,
// //         total: total,
// //         percentage: percentage,
// //         status: status
// //     };

var students = [
  { rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
  { rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
  { rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
  { rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
  { rollNo: 5, name: "Neha", marks: [88, 77, 66, 55] },
];

function calculateResult(student) {
  var total = 0;

  for (var i = 0; i < student.marks.length; i++) {
    total = total + student.marks[i];
  }

  var percentage = total / student.marks.length;
  var status = "PASS";

  for (var i = 0; i < student.marks.length; i++) {
    if (student.marks[i] < 33) {
      status = "FAIL";
      break;
    }
  }

  return {
    rollNo: student.rollNo,
    name: student.name,
    total: total,
    percentage: percentage,
    status: status,
  };
}

var result = calculateResult(students[0]);
console.log(result);
//    ----------------------------------------------------------
function generateResults(students) {
  let results = [];
  for (let i = 0; i < students.length; i++) {
    let result = calculateResult(students[i]);
    results.push(result);
  }
  return results;
}
console.log(generateResults(students));
// ----------------------------------------------------------

// function getTopper(results) {

//     var topper = results[0];

//     for (var i = 1; i < results.length; i++) {

//         if (results[i].percentage > topper.percentage) {
//             topper = results[i];
//         }

//     }

//     return topper;
// }
// var topperpercentage=getTopper(results)
// console.log(topperpercentage);

function getTopper(results) {
  let topper = results[0];
  for (let i = 1; i < results.length; i++) {
    if (results[i].percentage > topper.percentage) {
      topper = results[i];
    }
  }
  return topper;
}
let results = generateResults(students);
console.log(getTopper(results));
