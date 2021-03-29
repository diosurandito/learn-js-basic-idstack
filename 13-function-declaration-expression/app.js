function greet(firstName = 'HMM', lastName = 'wuh') {

    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet('John', 'Dio'));

const square = function square(x = 8) {
    return x*x;
}

console.log(square());

// IIfes
(function (name) {
    console.log(`hello ${name}`)
})('DIO');