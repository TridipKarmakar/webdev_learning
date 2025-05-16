//example 1
document.getElementById("changeTextButton").addEventListener("click", () => {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "The paragraph is now changes";
});

// example 2
document.getElementById("highlightFirstCity").addEventListener("click", () => {
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add("highlight");
});

// example 3
document.getElementById("ChangeOrder").addEventListener("click", () => {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.backgroundColor = "5px";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  let coffeeType = document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document.getElementById("removeLastTask").addEventListener("click", () => {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});

//example 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("chai code");
  });

//example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is :${feedback}`;
  });
