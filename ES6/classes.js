//old way of using OOP is JS
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'Zoom Zoom';
};
Car.prototype.brake = 'Screech';

const car = new Car({title: 'Impreza'});
console.log(car.brake);
console.log(car.drive());
console.log(car.title);

//new way using US6
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'zoom zoom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep!';
  }
}

const tacoma = new Toyota({color: 'White', title: 'My Truck'});
const carInstance = new Car({title: 'Toyota'});
console.log(tacoma.drive());

//here with ES7 syntax you can drop the constructor function along with calling super
//functions become assigned to a variable and data members become regular variables

class Human{
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human{
  name = 'Derek'
  printName = () => {
    console.log(this.name);
  }
}

const me = new Person();

me.printName();
me.printGender();
