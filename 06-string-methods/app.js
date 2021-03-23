const firstName = 'Dio';
const lastName = 'Surandito';
const age = 23;
const phar = 'Hello, my name is '+ firstName + ' and I am '+ age;
const tags = 'html, php, css, javascript';


let val;

val = firstName + lastName;

// Concatetination
val = firstName + ' ' + lastName;
val = 'Hello, my name is '+ firstName + ' and I am '+ age;

// Append
val = 'Marshall';
val += ' ';
val += 'Mathers';

// Escaping
val = 'Thats\'s awesome, I can\'t wait it';
val = "That's awesome, I can't wait it";

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];
// indexOf()
val = firstName.indexOf('o');

// charAt()
val = firstName.charAt(2);
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 2);

// slice()
val = firstName.slice(0, 2);
val = firstName.slice(-1);

// split
val = phar.split(' ');
val = tags.split(',');

// replace()
val = phar.replace('Hello', 'Hi');

// includes()
val = phar.includes('Hello');


console.log(val);