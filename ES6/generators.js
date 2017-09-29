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
/*
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$ WALKTHROUGH OF GENERATORS $$$$$$$$$$$$$$$$$$$$$$$$$$$
*/

function* shopping() {
  //stuff on the sidewalk

  //walking down the sidewalk

  //go into the store with cash
  const stuffFromStore = yield 'cash';

  //walking to the dry cleaners

  //go into drycleaners with clothes
  const cleanClothes = yield 'laundry';

  //walking back home

  return [stuffFromStore,cleanClothes];
}

//stuff in the store

const gen = shopping();
console.log(gen.next()); //leaving our house
//walked into the store
//walking up and down isles
//purchase our stuff
console.log(gen.next('groceries')); //leaving the store with groceries
console.log(gen.next('clean clothes')); //leaving the dry cleaners with clean clothes

/*
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$ EXAMPLE OF GENERATORS $$$$$$$$$$$$$$$$$$$$$$$$$$$
*/
function* colors1() {
  yield 'red';
  yield 'green';
  yield 'blue';
}

const myFavColors = [];

for (color of colors1()) {
  myFavColors.push(color);
}

console.log(myFavColors);

/*
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$ PRACTICAL EXAMPLE OF GENERATORS $$$$$$$$$$$$$$$$$$$$$$$$$$$
*/

const testingTeam = {
  lead: 'Hunter',
  tester: 'Bill'
}

const engineeringTeam = {
  testingTeam,
  size: 4,
  department: 'engineering',
  lead: 'Derek',
  manager: 'Alex',
  engineer: 'Dave'
};

function* EngineeringTeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const TestingTeamGenerator
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of EngineeringTeamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);