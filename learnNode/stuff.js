const counter = (array) => {
  return `There are ${array.length} elements in this array`;
};

const adder = (a,b) => {
  return `The sum of ${a} and ${b} is ${a+b}`;
};

const pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// or you could do it this way and cut out more code!

// module.exports = {
//   counter: counter,
//   adder: adder,
//   pi: pi
// }

// this is like above but with ES6 object literals

module.exports = {
  counter,
  adder,
  pi
}

// Node's event module

const events = require('events');
const util = require('util');

const Person = function(name) {
  this.name = name;
};

let derek = new Person('Derek');
let sam = new Person('Sam');
let jake = new Person('Jake');

let people = [derek,sam,jake];

//adds speak function to each Person instance
util.inherits(Person,events.EventEmitter);

people.forEach(function(person){
  person.on('speak',function(message) {
    console.log(`${person.name} said: ${message}`);
  });
});

// bomb countdown functionality 
let count = 20;
let countDown = setInterval( () => {
  count -= 2;
  jake.emit('speak',`There is ${count} seconds left on the bomb!`);
  if(count <= 0) {
    console.log('BOOM!!!');
    clearInterval(countDown);
  }
},2000)

derek.emit('speak','Node is awesome!');
sam.emit('speak', 'I dont want to go home.');


//another event emitter
const theEvent = new events.EventEmitter();

theEvent.on('someEvent',function(messg) {
  console.log(messg);
});

theEvent.emit('someEvent', 'Event emmitter test');
