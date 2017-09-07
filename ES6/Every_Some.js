let computers = [
  {name: 'Mac', ram: 16},
  {name: 'Lenovo', ram: 8},
  {name: 'Acer', ram: 24}
];

let allCanRun = true;
let onlySomeCanRun = false;

//old way using for loop
for (var i = 0; i < computers.length; i++) {
  let computer = computers[i];
  if (computer.ram < 10) {
    allCanRun = false;
  } else {
    onlySomeCanRun = true;
  }
}

console.log(allCanRun);
console.log(onlySomeCanRun);
console.log('-----');

//simple example using every and some
console.log('Can EVERY computer run the program?');
console.log(computers.every( (computer) => {
  return computer.ram > 10;
}));

console.log('Can SOME computers run the program?');
console.log(computers.some( (computer) => {
  return computer.ram > 10;
}));

//example of using every and some
let names = [
  'Derek',
  'Samantha',
  'Alexandria',
  'Jake'
];

console.log('EVERY name is greater than 7 characters?');
console.log(names.every( (name) => {
  return name.length > 7;
}));

console.log('SOME names are greater than 7 characters?');
console.log(names.some( (name) => {
  return name.length > 7;
}));

//practical example of every and some helper methods
function Field(value) {
  this.value = value;
};

Field.prototype.validate = function() {
  return this.value.length > 0;
}

let username = new Field('dallred');
let password = new Field('coolPassword');
let birthDay = new Field('03/12/90');

let fields = [username,password,birthDay];

let formIsValid = fields.every( (field) => {
  return field.validate();
});

console.log(formIsValid);
