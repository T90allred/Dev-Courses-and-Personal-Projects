const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let sum = 0;

arr.forEach( arrItem => {
  sum += arrItem;

});

console.log(sum);

let doubled = arr.map(item => {
  return ( item * 2 )
})

console.log('Doubled Numbers', doubled)

console.log('sum', sum);


let cars = [
  {make: 'Ford', model: 'Escape'},
  {make: 'Chevy', model: 'Silvorado'},
  {make: 'Toyota', model: 'Tacoma'},
  {make: 'Subaru', model: 'STI'}
]

let carMake = cars.map(car => {
  return car.make;
});

let carModel = cars.map(car => {
  return car.model;
});

console.log('Make:', carMake);
console.log('Model:', carModel);

//////////////////////////////////////////
let array = [2,5,4,3,1,6,7,8,9];


function findNumber(arr, k) {
    if(arr.includes((k))) {
      console.log('yes');
    } else {
      console.log('no');
    }
}

findNumber(array, 9);

array.sort();
console.log(array);

let test = 'RACECAR';
let reversed = test.split('').reverse().join('');
reversed = reversed.toLowerCase();
console.log(reversed);

function person(name,age,gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new person('Derek', 27, 'Male');
let person2 = new person('Sam', 22, 'Female')

console.log(person1.name)

//closure example

var addTo = function(passed){
  var add = function(inner){
    return passed + inner;
  }
  return add;
}
//the first time we call this function it holds on to the first argument passed in our case there are two instances of the addTo function.
//The first hold on to the value 3 and the second 4. So when we call addThree and pass a number, the number that we pass will always be added to 3.

var addThree = new addTo(3);
var addFour = new addTo(4);

var result1 = addThree(1);
var result2 = addFour(1);

console.log('Three + 1 = ' ,result1);
console.log('Four + 1 = ' ,result2);

//another closure example of my own make

var firstName = function(first){
  var lastName = function(last){
    return first + ' ' + last;
  }
  return lastName;
}

var Sam = firstName('Sam');
var SamAllred = Sam('Allred');
var SamCarter = Sam('Carter');
console.log(SamCarter);
console.log(SamAllred);
