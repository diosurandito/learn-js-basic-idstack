// for 
const cars = ['Honda', 'Toyota', 'Daihatsu', 'Ford'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
    
// }

//foreach
// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// MAP
// const users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Aled'},
//     {id: 3, name: 'Alef'},
//     {id: 4, name: 'Aleh'},
// ];

// const ids = users.map(function (user) {
//     return user.id
// });

// console.log(ids);

const user = {
    firstName: 'Alex',
    lastName: 'Gronod',
    age: 49
}

for(let x in user){
    console.log(`${x} : ${user[x]}`)
}