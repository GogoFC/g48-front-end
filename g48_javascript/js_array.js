let numbers = [1, 2, 3, 4];

console.log(numbers[2]);

numbers[1] = 10; //[1, 10, 3, 4]

//Add element to the end of array

numbers.push(5, 6); //[1, 10, 3, 4, 5, 6]
console.log(numbers);

numbers.pop(); //[1, 10, 3, 4, 5]

numbers.forEach((number) => console.log(number));

let evenNumbers = numbers.filter((number) => number % 2 === 0); //[ 10, 4]
console.log(evenNumbers);

const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
