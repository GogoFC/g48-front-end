// JavaScript Variables
let age = 25;
let temperature = -3.5;

let name = "John";
let message = "Hello G48!";

let myVar = 10; //number
myVar = "10"; //string

let isRaining = true; //false

//object
let person = { id: 1, name: "John", isStudent: false };

//array
let numbers = [1, 2, 3, 4, 5];

let nullVar = null; //null
let description; //undefined

console.log(message);

const PI = 3.4;
//PI = 3.14; //TypeError
console.log("PI:", PI);

const BASED_API_URL = "http://localhost8080/api/v1/";

const student = { name: "John" };

for (let i = 1; i < 10; i++) {
  /*if (i % 2 == 0) {
    console.log(i, "is ", "even");
  } else {
    console.log(i, "is ", "odd");
  }*/
  //turnury operator
  console.log(i % 2 == 0 ? "even" : "odd");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Sunday":
    console.log("It's the end of the week");
    break;
  default:
    console.log("It's the middle of the week");
}

//operators
let a = 10;
let b = 10;
let c = a + b; // addition operation

let n1 = 10;
let n2 = "10";

console.log(n1 == n2); //true
let isStrictEqual = n1 === n2; //false
