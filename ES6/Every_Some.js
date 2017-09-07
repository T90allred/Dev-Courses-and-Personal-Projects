let computers = [
  {name: 'Mac', ram: 16},
  {name: 'Lenovo', ram: 8},
  {name: 'Acer', ram: 24}
];

let allCanRun = true;
let onlySomeCanRun = false;

for (var i = 0; i < computers.length; i++) {
  let computer = computers[i];
  if (computer.ram < 10) {
    allCanRun = false;
  } else {
    onlySomeCanRun = true;
  }
}

console.log(allCanRun);
console.log(onlySomeCanRun);
console.log('-----');

console.log('Can EVERY computer run the program?');
console.log(computers.every( (computer) => {
  return computer.ram > 10;
}));

console.log('Can SOME computers run the program?');
console.log(computers.some( (computer) => {
  return computer.ram > 10;
}));
