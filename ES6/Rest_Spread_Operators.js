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

//----------------------------Additional!!!----------------------------


// the spread operator is used to extract things from arrays/objects and spread them 
// into another data structure of similar origin. You can spread arrays into objects
// but not objects into arrays

const array = [1,2,3,4,5]

const newArray = [5,4,3,2,1,...array]

// console.log(newArray)

const object = {
  name: 'Derek',
  age: 27
}

const newObject = {
  ...object,
  married: true,
  kids: false
}

const test = {
  ...newObject,
  ...newArray
}
  
// console.log(newObject);

console.log(test);

// the rest operator is heavily used in functions where you dont want to accept any amount
// of arguments passed in and be able to use them all

const filterNums = (...args) => {
  return args.filter( el => el%2 === 0);
}

console.log(filterNums(1,2,3,4,5,6,7,8));
