/* 
1. Write a `for` loop that loops through the array ["green tea", "Black tea", "Chai", "oolong tea"] and stops the loop when it finds "chai".
Store all the teas before "chai in a new array named `selectedTeas`"
*/

let tea = ["green tea", "Black tea", "Chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] == "Chai") {
    selectedTeas = tea.slice(0, i);
    break;
  }
}
// console.log(selectedTeas);

/* 
2. Write a `for` loops through the array ["London", "New York", "Paris", "Berlin"] and skips "paris".

Stores the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

// console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1,2,3,4,5]` and stop when the number `4` is found. Store the number before `4` in an array named `smallNumbers`
*/
let numberList = [1, 2, 3, 4, 5];
let smallNumbers = [];

/* for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] === 4) {
    break;
  }
  smallNumbers.push(numberList[i]);
}
 */
for (const num of numberList) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(smallNumbers);

/* 
4. Use `for-of` loop to iterate through the array ["chai", "green tea", "black tea"] and skip "herbal tea".
Store the other teas in an array named `preferredTeas`.
*/

let teaList = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaList) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

// console.log(preferredTeas);

/* 
5. Use 'for-in'  loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities population in a new object name cityPopulations.

let citiesPopulation = {
"London" : 8900000,
"New York" : 8400000,
"Paris" : 2200000
"Berlin" : 3500000
}



*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}

// console.log(cityPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
"Sydney" : 5000000,
"Tokyo" : 9000000,
"Berlin" : 3500000,
"Paris" : 2200000,
}
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const i in worldCities) {
  if (worldCities[i] > 3000000) {
    largeCities[i] = worldCities[i];
  }
}

// console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array '["earl grey","green tea", "chai", "oolong tea"]'. 
Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
 */

let myTeaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let anotherTeaCollection = [];

myTeaCollection.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  anotherTeaCollection.push(tea);
});

// console.log(anotherTeaCollection);

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.

Skip `"Sydney"` and store the other cities in a new array named `traveledCities`
 */

let otherCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

otherCities.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

/* 
9. Write `for` loop that iterates through the array `[2,5,7,9]`. 
Skip the value `7` and multiply the rest by 2. Store the result  in +a array named `doubledNumbers`.
*/

let myNumbersList = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < myNumbersList.length; i++) {
  if (myNumbersList[i] == 7) {
    continue;
  }
  doubledNumbers.push(myNumbersList[i] * 2);
}

// console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "jasmine tea", "herbal tea"]` and stop when the length of the current tea name is grater that 10. 
Stop the teas iterated over in an array named `shortTeas`.
*/

let myFavoriteTeas = ["chai", "green tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myFavoriteTeas) {
  if (tea.length < 10) {
    shortTeas.push(tea);
  }
}

// console.log(shortTeas);
