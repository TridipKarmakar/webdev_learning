class calculator {
  static add(a, b) {
    return a + b;
  }
}

// we don't need to create any new object using the new keywords

// let calC = new calculator();
// calC.add(6, 8);  //using this method we cannot create any new object right now
//only the way is

// console.log(calculator.add(70, 89));

class employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    if (salary > 0) {
      this.#salary = salary;
    } else {
      console.log("Salary cannot be set less than 0");
    }
  }

  get salary() {
    return `Salary cannot shown to you `;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value;
    }
  }
}

let empDetails = new employee("Tridip", 50000);

// console.log(empDetails.salary); // This is the example of getter.

empDetails.salary = -60000; //this is the example of setter

// console.log(empDetails.salary); //

/* if we want to check if it is working or not then we can modify this code in the getter and get the vale.
 */
