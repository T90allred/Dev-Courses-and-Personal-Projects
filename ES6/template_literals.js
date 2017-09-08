//template strings use backticks, inside the backticks you can type strings and
//inject values inside ${} as below

function getMessage() {
  return `The year is ${new Date().getFullYear()}!`;
}

console.log(getMessage());

const ES5string = "ES5 uses \" and +";
const ES6string = `ES6 uses \` and ${}`;
