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

const arrrayCollection = {
  id: 1748359865091,
  text: "Action Log generator",
  completed: false,
};

console.log(JSON.stringify(arrrayCollection));
