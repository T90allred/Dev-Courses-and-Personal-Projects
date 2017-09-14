var expense = {
  type: 'Personal',
  cost: '$50 USD'
}

//old way, you would have to type more
var type = expense.type;
var cost = expense.cost;

//ES6
//Here the code is setting an object 'expense' and making two properties on the object of 'type', 'cost'.
const {type,cost} = expense;
