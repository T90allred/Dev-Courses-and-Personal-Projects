let users = [
  {name: 'Derek'},
  {name: 'Sam'},
  {name: 'Brandon'},
  {name: 'Alyssa'},
  {name: 'Caden'},
  {name: 'Kaylee'},
];
let userFound;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Sam') {
    userFound = users[i];
    break;
  }
}
console.log(userFound);

userFound = users.find((user) => {
  return user.name === 'Alyssa';
});
console.log(userFound);
