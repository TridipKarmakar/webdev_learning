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
    return `The book ${title} is written by Author ${author} and has ${pages} pages.`;
  };
}
