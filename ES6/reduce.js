let numbers = [1,3,5,2,5];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

numbers.reduce( (sum, number) => {
  return sum + number;
},0)
console.log(sum);
