const myBg = document.getElementById("change-background");
const dropdownMenu = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdown-button");
const list = document.getElementById("list");

const toggleHome = document.getElementById("button-home");
const toggleRed = document.getElementById("button-red");
const toggleBlue = document.getElementById("button-blue");
const toggleGreen = document.getElementById("button-green");
const toggleOrange = document.getElementById("button-orange");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("dropdown-content");
});

list.addEventListener("click", function () {
  dropdownMenu.classList.toggle("dropdown-content");
});

toggleHome.addEventListener("click", function () {
  myBg.className = "standard-background-gray";
  document.getElementById("change-title").innerHTML = "gray :)";
});

toggleRed.addEventListener("click", function () {
  myBg.className = "red-background";
  document.getElementById("change-title").innerHTML = "red :)";
});

toggleBlue.addEventListener("click", function () {
  myBg.className = "blue-background";
  document.getElementById("change-title").innerHTML = "blue :)";
});

toggleGreen.addEventListener("click", function () {
  myBg.className = "green-background";
  document.getElementById("change-title").innerHTML = "green :)";
});

toggleOrange.addEventListener("click", function () {
  myBg.className = "orange-background";
  document.getElementById("change-title").innerHTML = "orange :)";
});
