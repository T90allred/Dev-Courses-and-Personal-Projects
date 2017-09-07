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
