//forEach helper methods are good when you need to take each item in an array and do something with it
//because each item will be passed into a function you define you can do very specific things with each
//array item. A good example is taking an array of posts and checking for certain words of post IDs
//then doing something when you find the kind of post your looking for.

//.forEach array helper method
var names = ['Derek', 'Sam', 'Jack', 'Jane'];

//old way using error prone for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//new way using array helper method
names.forEach( function (item) {
  console.log(item);
});

//same .forEach helper method, with arrow function
names.forEach( item => {
  console.log(item);
});

//example
let numbers1 = [5,4,2,1,3,6];
let sum1 = 0;
numbers1.forEach((num) => {
  sum1 += num;
});
console.log(sum1);

//example where you reference an outside function called adder inside the forEach method
let numbers2 = [5,4,2,1,3,6];
let sum2 = 0;
function adder(num) {
  sum2 += num;
}
numbers2.forEach(adder);
console.log(sum2);
