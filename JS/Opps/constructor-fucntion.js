/* 🛫 Step 1: Basics of Object
✅ Exercise 1:
Create an object called book with properties:
title (string)
author (string)
pages (number)
Also add a method called describe that prints:
"The book 'Title' is written by Author and has Pages pages." */

function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = function () {
    return `The book ${this.title} is written by Author ${this.author} and has ${this.pages} pages.`;
  };
}

const myBook = new book("The Grate gatsby", "F. Scott Fitzgerald", 180);

// console.log(myBook.description());

/* 
📝 Exercise 2 (Reminder):
Create an object called student with:
name (string)
age (number)
marks (another object having three properties: math, science, english — all numbers)
Then print marks for each subject separately.
👉 Use a constructor function for this! */

function student(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks;
}

const student1 = new student("Priyanka Das", 25, {
  science: 86,
  math: 90,
  geography: 96,
});

const student2 = new student("Rohit Sen", 24, {
  science: 90,
  math: 92,
  geography: 88,
});

// console.log(
//   `${student1.name} got ${student1.marks["science"]} marks in subject is Science`
// );
// console.log(
//   `${student1.name} got ${student1.marks["math"]} marks in subject is math`
// );
// console.log(
//   `${student1.name} got ${student1.marks["geography"]} marks in subject is geography`
// );
// console.log(
//   `${student2.name} got ${student2.marks["science"]} marks in subject is Science`
// );
// console.log(
//   `${student2.name} got ${student2.marks["math"]} marks in subject is math`
// );
// console.log(
//   `${student2.name} got ${student2.marks["geography"]} marks in subject is geography`
// );

/* 
Create an object called car with the following properties:
brand (string)
model (string)
year (number)

Update the year property to a new value.
Delete the model property from the object.

This exercise aims to help you practice:
Defining an object with properties.
Updating object properties.
Deleting properties from the object.
 */

function car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const CAR1 = new car("BYD", "Seal eMAX7", 1985);
const CAR2 = new car("TATA", "Safari", 2007);

CAR1.year = 2003; // update a property
delete CAR1.year; // delete a property

console.log(CAR1);
