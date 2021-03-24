const person = {
    firstName: 'Steve',
    lastName: 'Job',
    age: 39,
    email: 'steve@job.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Arizona',
        zipcode: '86029'
    },
    getBirthYear: function () {
        return 2021 - this.age;
    }
};

let val;
val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[0];
val = person.address.zipcode;
val = person.address['city'];
val = person.getBirthYear();



console.log(val);