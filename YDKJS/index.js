//get bank balance from customer
//keep buying phones while they have enough money
//
//'use strict';
//const TAX_RATE = .08;
//const PHONE_PRICE = 99.99;
//const ACCESSORY_PRICE = 9.99;
//const PURCHASE_LIMIT = 150;
//let runningTotal = 0;
//let total = 0;
//let bankBallance = prompt("How much do you have to spend today?");
//
//while(bankBallance > PURCHASE_LIMIT) {
//    total += PHONE_PRICE;
//    while(total + ACCESSORY_PRICE < PURCHASE_LIMIT) {
//        total += ACCESSORY_PRICE;
//    }
//    total = addTax(total);
//    bankBallance -= total;
//    runningTotal += total;
//    console.log("Purchase total:" + formatPrice(total));
//}
//console.log("Total Spent:" + formatPrice(runningTotal));
//console.log("Bank Ballance:" + formatPrice(bankBallance));
//
//function addTax(input) {
//    let totalWithTax = input + (input * TAX_RATE);
//    return totalWithTax;
//}
//
//function formatPrice(inputPrice) {
//    
//    let strTotal = String(inputPrice.toFixed(2));
//    let formatedPrice = "$" + strTotal;
//    return formatedPrice;
//}
//




//------------------------------------------------------------------------------------------

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
let bank_balance = prompt("What is your bank balance?");
var amount = 0;
function calculateTax(amount) {
 return amount * TAX_RATE;
}
function formatAmount(amount) {
 return "$" + amount.toFixed( 2 );
}
// keep buying phones while you still have money
while (amount < bank_balance) {
 // buy a new phone!
 amount = amount + PHONE_PRICE;
 // can we afford the accessory?
 if (amount < SPENDING_THRESHOLD) {
 amount = amount + ACCESSORY_PRICE;
 }
}
// don't forget to pay the government, too
amount = amount + calculateTax( amount );
console.log(
 "Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76
// can you actually afford this purchase?
if (amount > bank_balance) {
 console.log(
 "You can't afford this purchase. :("
 );
}
// You can't afford this purchase. :(
