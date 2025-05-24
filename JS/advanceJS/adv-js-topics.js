// closure

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
// console.log(increment());

// promises

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    // console.log(data.toLowerCase());
  })
  .catch((error) => {
    // console.log(error);
  });
