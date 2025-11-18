// "use strict";

// // ─────────────────────────────────────────────

// const codingQuestion = (function (start = 1, end = 15) {
//   let current = start;

//   return {
//     next() {
//       if (current <= end) {
//         return `Coding Question #${current++}`;
//       } else {
//         return `Coding Questions Finished 🥳`;
//       }
//     },
//   };
// })();
// console.log(codingQuestion.next());

// function one(input = "123") {
//   // return +input + 7;
//   return Number(input) + 7;
//   // return input - 0 + 7;
//   // return Number.parseInt(input) + 7;
// }

// console.log(one());
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function two(input) {
//   return !input ? "Invalid" : "Valid";
// }

// console.log(two(NaN));
// console.log(two("Mohamed Tamer"));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function three() {
//   const output = [];
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) continue; // Guard Clause
//     output.push(i);
//   }
//   console.log(output.join(", "));
// }

// three();
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function four(arr) {
//   return arr.filter((el) => el % 2 === 0);
// }

// console.log(four([1, 2, 3, 4, 5]));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function five(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(five([1, 2, 3], [4, 5, 6]));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function six(dayNumber) {
//   // Validation
//   if (typeof dayNumber !== "number" || dayNumber < 1 || dayNumber > 7) {
//     return "Invalid Day Number!";
//   }

//   switch (dayNumber) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//   }
// }

// console.log(six(3));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function seven(arr) {
//   return arr.map((el) => el.length);
// }

// console.log(seven(["a", "ab", "abc"]));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function eight(input) {
//   if (input % 3 === 0 && input % 5 === 0) return "Divisible by BOTH";
//   else if (input % 3 === 0) return "Divisible by 3";
//   else if (input % 5 === 0) return "Divisible by 5";
//   else return "Divisible by NONE";
// }

// console.log(eight(15));
// console.log(eight(9));
// console.log(eight(25));
// console.log(eight(7));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// const nine = (input) => input ** 2;

// console.log(nine(12));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function ten({ firstName, age }) {
//   return `${firstName} is ${age} Years Old`;
// }

// // "name" is a Reserved Keyword, So I Used "firstName" Instead :D
// console.log(ten({ firstName: "Raneem", age: 22 }));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function eleven(...arr) {
//   // Validation
//   switch (arr.length) {
//     case 0:
//     case 1:
//       return "Invalid Input, Please Pass Two Numbers or More!";
//   }

//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(eleven());
// console.log(eleven(1));
// console.log(eleven(1, 2, 3, 4, 5));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function twelve() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success!");
//     }, 3_000);
//   });
// }

// // twelve().then((message) => console.log(message));
// console.log("Promise<pending>");
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function thirteen(arr) {
//   return arr.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
// }

// console.log(thirteen([1, 3, 7, 2, 4]));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function fourteen(obj) {
//   return Object.keys(obj);
// }

// console.log(fourteen({ firstName: "Mohamed", age: 23 }));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());

// function fifteen(str) {
//   return str.split(" ");
// }

// console.log(fifteen("The Quick Brown Fox"));
// console.log("─────────────────────────────────────────────");
// console.log(codingQuestion.next());
// console.log("─────────────────────────────────────────────");

// // ─────────────────────────────────────────────

try {
  throw new Error("An Intentional Error");
} catch (error) {
  console.error(`Something Went Wrong: ${error.message}`);
} finally {
  console.log("I ALWAYS get Executed");
}
