//default function arguments are used to assign arugments to a value incase it is not
//specified when the function is called


function makeAjaxRequest(url, method = 'GET') {
  return method;
  //logic to make request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');


//-----------------------------------------------------------------------------

function User(id, admin) {
  this.id = id;
  this.admin = false;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdmin(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());

console.log('Not an admin', user);
console.log('Is  an admin', createAdmin(user));
console.log('Is an admin', createAdmin());
console.log('Is an admin', createAdmin());
