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

// example 5

document.getElementById("example-5").addEventListener("click", function () {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});

// example 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Button is now clicked !");
});

// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You have selected : " + event.target.textContent);
  }
});

// example 8
// in the form handling we can store the write the feedback, submit the feedback and store the feedback

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is : ${feedback}`;
  });

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

//example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let textElement = document.getElementById("descriptionText");
    // textElement.style.backgroundColor = "yellow";
    // textElement.style.color = "purple";
    textElement.classList.toggle("highlight");
  });
