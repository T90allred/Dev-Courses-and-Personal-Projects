var name = 'Jane';
var idNumber = 123;
var title = 'Software Engineer';
var hourlyWage = 50;

//ES6

const name = 'Jane';
const idNumber = 123;
let title = 'Software Engineer';
let hourlyWage = 50;

//examples
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
