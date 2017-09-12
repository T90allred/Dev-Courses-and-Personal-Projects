//lets say you want to sum all the numbers passed into our addNumbers function
//but they will not be passed in as an array or object, they will just be passed in
//REST enables us to do this!


//----------------------------REST operator!!!----------------------------

//old way where numbers are passed in as an array
function addNumbers(array) {
  return array.reduce( (prev, item) => {
    return prev + item;
  }, 0);
}

addNumbers([1,2,3,4,5]);

//new way using REST
function addNumbers(...array) {
  return array.reduce( (prev, item) => {
    return prev + item;
  }, 0);
}

addNumbers(1,2,3,4,5);

//----------------------------SPREAD operator!!!----------------------------
const defaultColors = ['red', 'green', 'orange'];
const userFavoriteColors = ['yellow','blue','salmon'];

let allColors = [ 'grey', ...defaultColors, ...userFavoriteColors ];

//----------------------------COMBINE BOTH!!!----------------------------
function validateShoppingList(...items) {
  if(items.indexOf('milk') < 0) {
    return [...items, 'milk'];
  }
  return items;
}

console.log(validateShoppingList('oranges','bananas','carrots'));

//----------------------------PRACTICAL EXAMPLE!!!----------------------------
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('This method is being depricated, please use "multiply" in the future');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.calculateProduct(1,4);
MathLibrary.multiply(1,2);
