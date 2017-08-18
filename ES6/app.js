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