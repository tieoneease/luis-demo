var luisContainer; // create a variable for the DOM node
document.addEventListener("DOMContentLoaded", function (event) {
  // wait for the web browser to finish loading the content first, or else the element won't exist
  luisContainer = document.querySelector(".luis-container"); // query the DOM node (class selector)
  luisContainer.innerText = "Bye Luis!!!";
});
