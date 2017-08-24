let products = [
  {name: 'Lettuce', type: 'vegetable'},
  {name: 'Apple', type: 'fruit'},
  {name: 'Orange', type: 'fruit'},
  {name: 'Avacado', type: 'vegetable'},
  {name: 'Potato', type: 'vegetable'},
  {name: 'Carrot', type: 'vegetable'},
  {name: 'Banana', type: 'fruit'},
  {name: 'Brocoli', type: 'vegetable'},
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
