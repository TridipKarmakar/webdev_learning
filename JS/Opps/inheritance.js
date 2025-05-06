// Exercises List -

/* 
1. Inheritance - Features request from client  

Problem Statement -

We’re building a user profile system. Start by creating a Person object with name and age. I need an Employee object that extends Person and also stores a department.
*/

//This is the main class name is person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Person.prototype.getDetails = function () {
  return `Name: ${this.name}, Age: ${this.age}`;
};
// employee class is a example of inheritance
class Employee extends Person {
  constructor(name, age, designation) {
    super(name, age);
    this.designation = designation;
  }
  getDetails() {
    return `${super.getDetails()}, Designation: ${this.designation}`;
  }
}

/* exercise number - 2

Now, we’re adding a Manager role. It should also inherit from Employee, and additionally store the teamSize. 
*/

class Manager extends Employee {
  constructor(name, age, designation, teamSize) {
    super(name, age, designation);
    this.teamSize = teamSize;
  }
  getDetails() {
    return `${super.getDetails()}, Team Size: ${this.teamSize}`;
  }
}

class Contractor extends Person {
  constructor(name, age, designation, contractDuration) {
    super(name, age, designation);
    this.contractDuration = contractDuration;
  }
  getDetails() {
    return `${super.getDetails()}, Contractor Duration: ${
      this.contractDuration
    }`;
  }
}

function printProfile(personObj) {
  console.log(personObj.getDetails());
}

const emp = new Employee("Tridip", 26, "Executive");
const mgr = new Manager("Amit", 35, "Team Lead", 10);
const cont = new Contractor("Suman", 30, "HOD", 12);

// printProfile(emp);
// printProfile(mgr);
// printProfile(cont);
