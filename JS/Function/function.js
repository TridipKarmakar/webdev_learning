/* 
1. Write a function name `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. Store the result in a variable names `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("Lemon Tea");
// console.log(teaOrder);

/* 
2. Crete a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function name `confirmOrder` that returns a message like `"Order Confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea() {
  function confirmOrder() {
    return "Order Confirmed for chai";
  }

  let message = confirmOrder();
  return message;
}

let message = orderTea();
// console.log(message);

/* 
3. Write a arrow function named `calculationTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the variable named `TotalCost`. 
*/

const calculationTotal = (price, quantity) => price * quantity;

const totalCost = calculationTotal(250, 5);

// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`. 
*/

function makeTea(teaOrder) {
  return `makeTea : ${teaOrder}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let orderStatus = processTeaOrder(makeTea);
// console.log(orderStatus);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a massage like `"Making green tea"`.
Store the return function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let result = teaMaker("Green Tea");
console.log(result);
