/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
 */

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let teaFlavorsArray = new Array("green tea", "black tea", "oolong tea");

let firstTea = teaFlavors[0];
let firstTea2 = teaFlavorsArray[0];

/* 
console.log(firstTea); 
console.log(firstTea2); 
 */

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = new Array("London", "Tokyo", "Paris", "New York");

let favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = new Array("herbal tea", "white tea", "masala chai");
teaTypes[1] = "jasmine tea";

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = new Array("Mumbai", "Sydney");
citiesVisited.push("Berlin");

// citiesVisited[4] = "India";
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = new Array("chai", "iced tea", "matcha", "earl grey");
let lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = new Array("green tea", "oolong tea", "chai");

// let softCopyTeas = popularTeas.slice(0, popularTeas.length);  //Hard Copsy
let softCopyTeas = popularTeas;

popularTeas.push("black tea");

/* 
console.log(softCopyTeas);
console.log(popularTeas);
 */

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = new Array("Berlin", "Singapore", "New York");
//let HardCopyCities = topCities.slice(0, popularTeas.length); //Hard Copy
let HardCopyCities = [...topCities]; //Hard Copy

topCities.push("India");

// console.log(topCities);
// console.log(HardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = new Array("Paris", "Rome");
let asianCities = new Array("Tokyo", "Bangkok");

let worldCities = asianCities.concat(europeanCities);

// console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = new Array("masala chai", "oolong tea", "green tea", "earl grey");

let menuLength = teaMenu.length;

// console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = new Array("Kyoro", "London", "Cape Town", "Vancouver");

// let isLondonInList = cityBucketList.includes("London");

/* 
if ("London" in cityBucketList) {
  isLondonInList = true;
} */

console.log(cityBucketList.indexOf("London")); // true
