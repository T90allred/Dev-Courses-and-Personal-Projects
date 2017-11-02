var expense = {
  type: 'Personal',
  cost: '$50 USD'
}

//old way, you would have to type more
var type = expense.type;
var cost = expense.cost;

//ES6
// destructuring happens when you have an object with data and you want to pull all or some of that data out 
// and save it as individual variables you can then manipulate.
// the code below makes 2 new global variables 'type' and 'cost' by taking them from the 'expense' object above
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

//this is how you acces indexes of an array
const [first,second,third,last] = companies;

//arrays have properties so you would access those properties like this
const {length} = companies;

//mixing array and object destructuring
const companies2 = [
  {name: 'Boostability', location: 'Utah'},
  {name: 'Google', location: 'California'},
  {name: 'Microsoft', location: 'Washington'}
];

const [{location}] = companies2;

//another example
const google = {
  locations: ['utah','london','califonia']
};

const {locations: [location,location2,location3]} = google;

console.log(location);

//Practical example of destructuring arguments to a function call
//This approach makes it so you dont have to remember the argumnet order when calling it.
function signUpUser({userName, password, email, dateOfBirth, state}) {
  //create new user
  console.log(userName,password,email,dateOfBirth,state);
}

const user = {
  userName: 'Derek',
  password: 'mypassword',
  email: 'derek@gmail.com',
  dateOfBirth: '8/12/89',
  state: 'Utah'
}
signUpUser(user);


//example of array destructuring
const points = [
  [4,5],
  [3,10],
  [8,12],
  [19,7]
]

points.map(([x,y]) => {
  return {x,y};
});
