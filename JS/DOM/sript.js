// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraphChanger = document.getElementById("myParagraph");
    paragraphChanger.textContent = "Changed the paragraph";
  });
