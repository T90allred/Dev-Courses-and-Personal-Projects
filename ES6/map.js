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
