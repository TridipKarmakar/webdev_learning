// Example of constructor function
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
// Example of prototype
Vehicle.prototype.start = function () {
  return `${this.model} is a car from ${this.make}`;
};

// Example of creating of new object
const Vehicle1 = new Vehicle("TATA", "Punch");
// console.log(person.start());

// Example of creating another constructor and prototype function using Inheritance method -
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an example of inheritance `;
  }
}
// This is a new object created by the 2nd function
const Vehicle2 = new Car("Toyota", "Corolla");
// console.log(Vehicle2.drive());

// let vehOne = Vehicle("Toyota", "Corolla");

// Encapsulation Topics  - The meaning is restrict the whole code with in the function, this is the meaning of encapsulation.

class BankAccount {
  #balance = 0; //Only putting the # sign this whole variable is encapsulated, and this is restricted.

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();

// console.log(account.deposit(1900000));

// Abstraction :  using the return function we can use the abstraction function.

class CoffeeMachine {
  start() {
    //whole lot of calculation
    return `Starting the machine...`;
  }

  brewCoffee() {
    //whole lot of calculation
    return `Brewing Coffee`;
  }

  pressStartButton() {
    //another computation of calculation
    return `${this.start()} + ${this.brewCoffee()}`;
  }
}

let coffeeStatus = new CoffeeMachine();

// console.log(coffeeStatus.pressStartButton());

// Polymorphism - ability of something to have or to displayed in more than one form.

class bird {
  fly() {
    return `flying...`;
  }
}

class penguin extends bird {
  fly() {
    return `penguin can't fly..`;
  }
}

let Bird = new bird();
let Penguin = new penguin();

console.log(Bird.fly());
console.log(Penguin.fly());
