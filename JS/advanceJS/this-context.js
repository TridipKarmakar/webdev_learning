const person = {
  name: "Tridip",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;

greetFunction();

const boundGreet = person.greet.bind({ name: "Jhon" });
boundGreet();

//bind, call and apply
const boundGreet2 = person.greet.call({ name: "kholi" });
