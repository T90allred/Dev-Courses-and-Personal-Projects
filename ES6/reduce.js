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

//example using .reduce
let primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'},
];

primaryColors.reduce( (previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);


//practical example using .reduce
function balancedParens(string) {
  return !string.split('').reduce( (prev, char) => {
    if(prev < 0) {return prev;}
    if(char === '(') {return ++prev;}
    if(char === ')') {return --prev;}
    return prev;
  }, 0);
};

balancedParens('((()');
