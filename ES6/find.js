let users = [
  {name: 'Derek'},
  {name: 'Sam'},
  {name: 'Brandon'},
  {name: 'Alyssa'},
  {name: 'Caden'},
  {name: 'Kaylee'},
];
let userFound;

//traditional for loop, more code, more chances for error
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Sam') {
    userFound = users[i];
    break;
  }
}
console.log(userFound);

//more readable, less code, less chance for errors
userFound = users.find((user) => {
  return user.name === 'Alyssa';
});
console.log(userFound);

//another example
function Car(model) {
  this.model = model;
}

let cars = [
  new Car('Subaru'),
  new Car('Ford'),
  new Car('Toyota')
];

let myCar = cars.find((car) => {
  return car.model === 'Subaru';
});
console.log(myCar);

let posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Post'}
];

let comment = {postId: 1, content: 'Great post bro'};

function postForComment(allPosts, theComment) {
  return allPosts.find((post) => {
    return post.id === theComment.postId;
  });
};
console.log(postForComment(posts, comment));
