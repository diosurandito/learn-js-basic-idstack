let val;

// number to string
val = String(123);
val = String(5+5);

// boolean to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 3, 4, 5]);

// toString
val = (5).toString();
val = (true).toString();


// String to Number 
val = Number('51.30');

// boolean to number
val = Number(true); 
val = Number(false); 

val = Number('hello');
val = Number(['1,2,3']);

val = parseInt('100.31');
val = parseFloat('100.31');


// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);