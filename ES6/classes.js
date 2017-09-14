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
  constructor({title}) {
    this.title = title;
  }
  
  drive() {
    return 'vroom';
  }
}

const carInstance = new Car({title: 'Toyota'});
console.log(carInstance.drive());
