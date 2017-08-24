let products = [
  {name: 'Lettuce', type: 'vegetable', quantity: 3, price: 1.99},
  {name: 'Apple', type: 'fruit', quantity: 6, price: 2.99},
  {name: 'Orange', type: 'fruit', quantity: 7, price: 2.75},
  {name: 'Avacado', type: 'vegetable', quantity: 4, price: 3.99},
  {name: 'Potato', type: 'vegetable', quantity: 13, price: .65},
  {name: 'Carrot', type: 'vegetable', quantity: 25, price: .25},
  {name: 'Banana', type: 'fruit', quantity: 12, price: .99},
  {name: 'Brocoli', type: 'vegetable', quantity: 2, price: 1.50}
];

//example using classic for loop
let fruits = [];

for (var i = 0; i < products.length; i++) {
  if(products[i].type == 'fruit') {
    fruits.push(products[i]);
  }
}

console.log(fruits);

//example using .filter method
let veggies = products.filter((item) => {
  return item.type === 'vegetable';
})

console.log(veggies);

// Type is 'vegetable', quantity is > 6, price is < 2.00
let queryResults = products.filter( (item) => {
  return item.type === 'vegetable' && item.quantity > 6 && item.price < 2.00;
});
console.log(queryResults);

//another example
let firstPost = {id: 4, title: 'New Post'};
let secondPost = {id: 3, title: 'Other Post'};
let comments = [
  {postId: 4, content: 'cool post bro'},
  {postId: 3, content: 'did you need to say that?'},
  {postId: 2, content: 'call me maybe!'},
  {postId: 3, content: '*&^$&#^&@!@'},
  {postId: 4, content: 'Nice work'}
];
function filterComments(post, comments) {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}

console.log(filterComments(firstPost, comments));
console.log('--------------------------------------');
console.log(filterComments(secondPost, comments));
