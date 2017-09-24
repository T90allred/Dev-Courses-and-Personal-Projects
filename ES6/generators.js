const colors = ['red','green','black','grey','blue','orange'];
const numbers = [5,24,3,78,65,21,24];

for (let color of colors) {
  console.log(color);
}

for (var number in numbers) {
  if (numbers.hasOwnProperty(number)) {
    console.log(numbers[number]);
  }
}

// A GENERATOR IS A FUNCITON THAT CAN BE ENTERED AND EXITED MULTIPLE TIMES

function* shopping() {
  //stuff on the sidewalk

  //walking down the sidewalk

  //go into the store with cash

  const stuffFromStore = yield 'cash';

  //walking back home

  return stuffFromStore;
}

//stuff in the store

const gen = shopping();
console.log(gen.next()); //leaving our house
//walked into the store
//walking up and down isles
//purchase our stuff
console.log(gen.next('groceries')); //leaving the store with groceries
