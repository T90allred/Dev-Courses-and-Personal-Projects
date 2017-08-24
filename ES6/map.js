//.map is good for going through an array and getting a specific value and saving those values
//to a new array

let numbers = [1,2,3,4,5,6];
let doubled = [];
let doubledNumbers = [];

//old way with for loop
for (var i = 0; i < numbers.length; i++) {

  doubled.push(numbers[i] * 2);
}
console.log(doubled);

// do the same thing with .map
doubledNumbers = numbers.map( (num) => {
  return num * 2;
});

console.log(doubledNumbers);

//example using .map
let cars = [
  {make: 'Subaru', model: 'Impreza'},
  {make: 'Toyota',model: 'Rav4'}
]

let makes = cars.map( (car) => {
  return car.make;
});

console.log(makes);

// another example using .map
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map( trip => {
   return trip.distance/trip.time;
});

// last example using .map
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    let colors = array.map( paint => {
        return paint[property];
    });
    return colors;
}
