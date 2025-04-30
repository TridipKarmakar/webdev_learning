/* 
The concept behind `prototype` function is - when we use the constructor and define a common function within the a constructor,  then when we create a new object from the constructor function it block separate memory for every object, instead of this, we can use the prototype function for that common function outside the constructor function. For example -             
*/
/* 
//This is the normal constructor function --
function person(name, age, occupation){
    this.name = name
    this.age = age
    this.occupation = occupation

    // this will be the common function for every object --
    this.sayHello = function () {
        return `Hi ${this.name}, your age is ${this.age}, your occupation is ${this.occupation}, stay happy.`
    }
} 

//Every type the common function is create the separate memory block
const person1 = new person("Tridip Karmakar", 27, "Service")
const person2 = new person("Somnath Mondal", 26, "Business")
 */

//Instead of this we can create the prototype function -

function person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}
person.prototype.sayHello = function () {
  return `Hi ${this.name}, your age is ${this.age}, your occupation is ${this.occupation}, stay happy.`;
};

const person1 = new person("Tridip Karmakar", 27, "Service");
const person2 = new person("Somnath Mondal", 26, "Business");
// console.log(person1.sayHello());
// console.log(person2.sayHello());
