// console.log("Using JavaScript");

// //Function in JavaScript
//  function greet(firstname){
//     console.log(firstname, "Greet Me");
//     return firstname + " Hi!How are You. ";
// }

// const res = greet("Anuj");

// greet("Pranav");

// greet(1234);

// function multiply(a,b){
//     console.log("Multiplication of " +a+ " and " +b+ " is: ");
//     return a*b;
// }

// const res = multiply(10,20);
// console.log(res);

// const multiply = (a,b) => {
//     console.log("Multiplication of the Number is: ");
//     return a*b;
// };

// console.log(multiply(10,20)); 

// const multiply = (a,b) => a*b;

// console.log(multiply(10,20));

// const greetFunction = (name="Learner") => (name+ " Hi!");

// console.log(greetFunction());

// console.log(greetFunction("Anuj"));

// const calculate = (a,b,operation) => {
//     return operation(a,b);
// };

// function add(a,b){
//     return a+b;
// };

// const res = calculate(10,20,add);

// console.log(res);

// const res = calculate(10,20,(a,b)=>a+b);

// console.log(res);

// const a = 4+5;

// throw new Error ("pass Anything, msg ");

// try{
//     console.log(age);
//     console.log(b);
// }catch(ex){
//     console.log("Pranav is Handling Error" , ex);
// }finally{
//     console.log("Always Be Executed");
// }

// Assignments Functions 

//Create a function that takes multiple functions as argument to build a calculator 

// function add(a,b){
//     return a+b;
// };

// function sub(a,b){
//     return a-b;
// };

// function mul(a,b){
//     return a*b;
// };

// function div(a,b){
//     return a/b;
// };

// const calculate = (a,b,operation) => {
//     return operation(a,b);
// };

// const res = calculate(30,10,div);

// console.log(res);

// Create a method to take the average of three numbers, and then convert it to an arrow function.

// function calculateAvg (a,b,c){
//     return (a+b+c)/3;
// };

// const calculateAvg = (a,b,c) => {
//     return (a+b+c)/3;
// };

// const calculateAvg = (a,b,c) => (a+b+c)/3;


// console.log(calculateAvg(10,20,20));

// Creating Objects 

// const student = {
//     name: "Pranav" ,
//     age: 21
// };

// console.log(student.age);
// console.log(student.name);
// console.log(student["name"]);
// console.log(student["age"]);

//const student = {
//     name: "Pranav" ,
//     age: 21 , 
//     address: {
//         city: "Warud",
//         country: "India",
//     } ,
//     isActive: true,
//     books: ["Book1," , "Book2"],
//     greet : function() {console.log("Hello my name is: " + student.name)}
// };

// console.log(student)

// student.greet();

// import {gt} from "./greet.js";

// gt();

// // Create a JavaScript object with properties name , age , and a method greet
// // that prints a greeting.

// const Person = {
//     name: "Pranav",
//     age: 21,
//     greet: function() {
//         console.log("Hi! " + Person["name"] + " greetings to you");
//     }
// };

// console.log(Person);
// console.log(Person.greet());

// // Write an ES6 module exporting a function add and import it into another file.

// import {add} from "./greet.js";

// const res = add(10,20);
// console.log(res);


// // Combine two arrays into one using the spread operator

// const a = ["Student 1" , "Student 2"];
// const b = ["Student 3" , "Student 4"];

// let result = [...a,...b];
// console.log(result);

