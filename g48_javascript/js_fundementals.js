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

//1. Function Declaration
function greetDeclaration(name) {
  console.log("Hello " + name + "!");
}

greetDeclaration("Negar");

function addition(n1, n2) {
  return n1 + n2;
}

const result = addition(10, 20);
console.log(result);

//2. Function Expression
const greetExpression = function (name) {
  console.log("Hello " + name + "!");
};

greetExpression("Simon");

//3. Arrow Function
const greetArrow = (name) => console.log("Hello " + name + "!");

const _addition = (n1, n2) => console.log(n1 + n2);
_addition(12, 2);

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

const sumResult = sum(1, 2, 3, 4); //10
console.log(sumResult);

let _name = "John";
let _age = 30;

let info = "Hello, my name is " + _name + " and I am " + _age + " years old.";
//backticks `
let _info = `Hello, my name is ${_name} and I am ${_age} years old.`;
console.log(info);
console.log(_info);

function add(x = 0, y = 0) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return x / y;
}

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(calculate(10, 7, subtract));

try {
  console.log(calculate(10, 0, divide));
} catch (error) {
  console.log("Caught an error: ", error.message);
} finally {
  console.log("Finally block has been executed!");
}

//String and Date examples

let text = "Hello JS!";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.indexOf("JS"));
console.log(text.slice(0, 5));

const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());

console.log(currentDate.toLocaleDateString("sv-SE"));
