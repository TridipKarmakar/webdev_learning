/*
1.  Write a while loop that calculate the sum of all numbers from 1 to 5  and stores the result in a variable named sum 
*/

let sum = 0;
let i = 0;

while (i <= 5) {
  sum += i;
  i++;
}

// console.log(sum); /* 1+2+3+4+5 = 15*/

/*
2. Write a while loop that counts down from 5 to 1 and stores the number in an array named countdown.
 */

let countdown = [];
i = 5;

while (i > -1) {
  countdown.push(i);
  i--;
}

// console.log(countdown); /* 1+2+3+4+5 = 15*/

/* 
3. Write a `do while` loop that prompts a users to ender their favorite tea type until they enter "stop". Store each tea type in an array named /'teacollection'.
*/

let teaCollection = [];

let tea;
// do {
//   let tea = prompt("Enter your favorite tea (type `stop` to finish) ");
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

/* 
4. Write a do while loop that adds number from 1 to 3 and stores the result in a variable named total.
*/

let sumValue = 0;
let j = 1;

do {
  sumValue += j;
  j++;
} while (j < 4);

// console.log(sumValue);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 5]` by 2 and stores the results in a new array named `multipliedNumbers`.
 */

let orgArray = [2, 4, 5];
let multipliedNumbers = [];
/* i = 0;

do {
  multipliedNumbers.push(orgArray[i] * 2);
  i++;
} while (orgArray.length > i);

console.log(multipliedNumbers);
 */

for (let l = 0; l < orgArray.length; l++) {
  multipliedNumbers.push(orgArray[l] * 2);
}

// console.log(multipliedNumbers);

/* 
6. Write a `for` that list all the cities in the array `["Paris", "New work", "Tokyo", "London"]` and store each city in a new array named `cityList`
*/

cities = ["Paris", "New work", "Tokyo", "London"];
cityList = [];

for (let index = 0; index < cities.length; index++) {
  cityList.push(cities[index]);
}

console.log(cityList);
