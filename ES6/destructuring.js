var expense = {
  type: 'Personal',
  cost: '$50 USD'
}

//old way, you would have to type more
var type = expense.type;
var cost = expense.cost;

//ES6
//Here the code is setting an object 'expense' and making two properties on the object of 'type', 'cost'.
const {type,cost} = expense;

// simple example
let person = {
  name: 'Derek',
  age: 27,
  married: true,
  kids: 0
}


const {name,age,married,kids} = person;

console.log(name);
console.log(age);
console.log(married);
console.log(kids);

//other example using old way
var savedFile = {
  extension: 'jpg',
  name: 'catPicture',
  size: 1423
}

function formatName({name,extension,size}) {
  return `The file ${name}.${extension} is of size ${size}`;
}

formatName(savedFile);

// destructuring arrays
const companies = [
  'Google',
  'Microsoft',
  'Jane.com',
  'Pluralsight'
];
