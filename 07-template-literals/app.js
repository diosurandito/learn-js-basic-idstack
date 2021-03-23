const name = 'Dio';
const age = 23;
const job = 'Web Developer';
const city = 'Brebes';

let html;

// Without Template String (es5)

html = '<ul><li>Name: '+ name + 
'</li><li>Age: '+ age + 
'</li><li>Job: '+ job + 
'</li><li>City: '+ city +'</li></ul>';

html =  '<ul>' + 
            '<li>Name: ' + name + '</li>' +
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' + job + '</li>' +
            '<li>City: ' + city + '</li>' +
        '</ul>';

// With Template Strings (es6)
function hello(){
    return 'Hello Gaes';
}

html = `
    <ul>
        <li> Name: ${name} </li>
        <li> Age: ${age} </li>
        <li> Job: ${job} </li>
        <li> City: ${city} </li>
        <li>${5+2}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>

`;

document.body.innerHTML = html;
