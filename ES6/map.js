let numbers = [1,2,3,4,5,6];
let doubled = [];
let doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {

  doubled.push(numbers[i] * 2);
}
console.log(doubled);

doubledNumbers = numbers.map( (num) => {
  return num * 2;
});

console.log(doubledNumbers);

let cars = [
  {
    make: 'Subaru',
    model: 'Impreza'
  },
  {
    make: 'Toyota',
    model: 'Rav4'
  }
]

let makes = cars.map( (car) => {
  return car.make;
});

console.log(makes);

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map( trip => {
   return trip.distance/trip.time;
});
