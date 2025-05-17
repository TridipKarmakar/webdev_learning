//example 1
document.getElementById("changeTextButton").addEventListener("click", () => {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "The paragraph is now changes";
});

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    console.log(cityList.firstElementChild.classList.add("highlight"));
  });

// example 3

document.getElementById("ChangeOrder").addEventListener("click", () => {
  let ChangeOrder = document.getElementById("coffeeType");
  ChangeOrder.textContent = "Espresso";
  ChangeOrder.classList.add("highlight"); // this the add the style of css style code
  ChangeOrder.style.backgroundColor = "green";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newList = document.createElement("li");
  newList.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newList);
});
