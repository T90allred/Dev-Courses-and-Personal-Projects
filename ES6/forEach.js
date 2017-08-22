//.forEach array helper method
var names = ['Derek', 'Sam', 'Jack', 'Jane'];

//old way using error prone for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//new way using array helper method
names.forEach( function (item) {
  console.log(item);
})
