// console.log('Hey Node!');

// setTimeout(function() {
//   console.log('3 seconds have passed!')
// },3000);
//
// let timer = 0;
// setInterval( () => {
//   timer += 2;
//   console.log(timer + ' seconds have passed');
// },2000)
// let counter = 0;
// let timer = setInterval( () => {
//   counter += 2;
//   console.log(counter + ' seconds have passed');
//   if(counter >= 6) {
//     clearInterval(timer);
//   }
// },2000)
//
// console.log(__dirname);
// console.log(__filename);


const stuff = require('./stuff');

console.log(stuff.counter([1,2,3,2,4]));
console.log(stuff.adder(1,4));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi,stuff.pi));
