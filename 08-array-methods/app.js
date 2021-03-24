// Create Arrays
const number = [54,23,60,1,68];
const number2 = new Array(90,7,43,100,300);
const fruit = ['Apple', 'Banana', 'Cherry', 'Orange', 'Pear'];
const mix = [30, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];
// console.log(mix);

let val;

// Get Length
val = number.length;

//check is array
val = Array.isArray(number2);

// get single value
val = fruit[4];
val = fruit[0];

// Replace/Insert into Array
fruit[2] = 'Grape';

// Find index of value
val = mix.indexOf(undefined);

// Mutating
// Add on to end
number.push(200);

// Add on to Front
number.unshift(7);

// Take off from end
number.pop();

// Take off from front
number.shift();

// splice value
number.splice(1,3);

// reverse 
fruit.reverse();


console.log(number);
console.log(fruit);
console.log(val);