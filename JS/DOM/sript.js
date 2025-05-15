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
