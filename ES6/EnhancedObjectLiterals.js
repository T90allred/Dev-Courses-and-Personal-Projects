//anytime there is a key value pair with same name for the key and value (like inventory below) you can
//delete one and make it so it only says it once. for key value pairs that are funcitons you can delete the
//"function" keyword and the : after the key, see below.

//----------------------------------------------  OLD WAY  -------------------------
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce( (total,book) => total+=book.price,0);
    },
    priceForTitle: function (title) {
      return this.inventory.find( (book) => book.title === title).price;
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'YDKJS', price: 15},
  {title: 'Code Complete', price: 20}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('YDKJS'));

//----------------------------------------------  NEW WAY  -------------------------
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce( (total,book) => total+=book.price,0);
    },
    priceForTitle(title) {
      return this.inventory.find( (book) => book.title === title).price;
    },
    whatCanIAfford(amount) {
      return this.inventory.filter( (book) => book.price <= amount);
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'YDKJS', price: 15},
  {title: 'Code Complete', price: 20}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('YDKJS'));
console.log(bookShop.whatCanIAfford(19));

//----------------------------------------------  EXAMPLE  -------------------------
function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: 'POST'
  });
}

const url = "http://fileupload.com";
const data = {color: red};
