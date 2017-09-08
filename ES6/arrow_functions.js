const add1 = function (a,b) {
  return a + b;
}

// delete function key word and add => after arguments
const add2 = (a,b) => {
  return a + b;
}

//if function has a single expression like our add function. This is called an
//implicit return
const add = (a,b) => a + b;

add2(1,2); // 3

//------------------------------------------------------------------------------
const double1 = function (number) {
  return number * 2;
}

const double2 = number => number * 2;

double2(4); //8

//------------------------------------------------------------------------------
const sayHi1 = function () {
  return `Hi`;
}

const sayHi2 = () => {
  return `Hi`;
}
sayHi2(); // Hi

//------------------------------------------------------------------------------

const array = [1,2,3];
array.map(number => number *2);

//------------------------------------------------------------------------------

const team1 = {
  members: ['Derek','Sam'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map( function (member) {
      return `${member} is a part of team ${this.teamName}`;
    }.bind(this));
  }
};

//ES6 takes advantage of 'lexical this'
const team2 = {
  members: ['Derek','Sam'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map( member => `${member} is a part of team ${this.teamName}`);
  }
};

console.log(team2.teamSummary());
