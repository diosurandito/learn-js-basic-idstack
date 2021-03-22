// // var, let, const

// var nama = 'John Doe';
// console.log(nama);

// nama = 'Smithy Waberman Jensen';
// console.log(nama);

// // init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letter, number, _, $

// var variable;
// var _variable;
// var vari_able;
// var $variable;
// var vari$able;
// var variable123;
// var vari123able;

// // multi words
// var firstname;
// var firstName; //camel case
// var FirstName; //pascal case
// var first_name;

// let nama;
// nama = 'John Dio';
// console.log(nama);

// nama = 'John Connor';
// console.log(nama);


//const
/**
 * const tidak bisa diubah nilainya 
 * kecuali untuk array dan object 
 * bisa kita ubah nilai dari propertinya 
 * tapi tidak bisa kita ubah jenis atau full isi variablenya
 */

// const nama = 'John Dio';
// console.log(nama);
// nama = 'dio';
// console.log(nama);

const person = {
    name: 'John',
    age: 30
};

person.name = 'Sarah';
person.age = 28;

console.log(person);

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);

numbers = {
    a: 1,
    b: 2,
    c: 3
};

console.log(numbers);