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

// Exercise 4:

/* 
Create a constructor function for a Movie object.
Each movie should have:
1. title (string)
2. director (string)
3. year (number)

Then, using Movie.prototype, add a method:
getSummary() that returns something like:
"Inception was directed by Christopher Nolan in 2010."

🚨 Rules:
Do not write the method inside the constructor.
Use .prototype to attach the method.
Create two movie objects and check if they share the same method.
*/

function movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
}

movie.prototype.getSummary = function () {
  return `${this.title} was directed by ${this.director} in ${this.year}.`;
};

const movie1 = new movie("Interstellar", "Christopher Nolan", 2014);
const movie2 = new movie("Parasite", "Bong Joon-ho", 2019);

// console.log(movie1.getSummary());
// console.log(movie2.getSummary());

/* 

# 🧬 **🛠 Exercise 5: Constructor Inheritance**

## 🎯 Objective:
Create a constructor function called `Person` with:
- `name` (string)
- `age` (number)

Add a method using `Person.prototype`:
- `introduce()` → returns `"Hi, I'm NAME and I'm AGE years old."`

Then, create another constructor function called `Employee` that **inherits** from `Person`, and also has:
- `jobTitle` (string)

Add a method to `Employee.prototype`:
- `describeJob()` → returns `"I work as a JOBTITLE."`

---

### ⚙️ Key Concepts to Use:
- `Person.call(this, name, age)` inside `Employee`
- Use `Object.create(Person.prototype)` to inherit prototype methods
- Reset `Employee.prototype.constructor = Employee` (important step)

---

### 👨‍👩‍👧‍👦 Example Values You Can Use:
1. `name`: Ananya, `age`: 30, `jobTitle`: Software Engineer  
2. `name`: Raj, `age`: 45, `jobTitle`: Project Manager

---

### 🔥 Bonus (Optional):
Print both:
- `introduce()` from `Person`
- `describeJob()` from `Employee`

---

Want me to guide you through the inheritance pattern step-by-step, or will you give it a go and I’ll review your code?

*/
