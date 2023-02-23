let displayNumber = document.getElementById("display")
let saveDisplay = document.getElementById("save-display")
let number = 0

function increment() {
  number += 1
  displayNumber.textContent = number
}

function save() {
  saveDisplay.textContent = number
}

function reset() {
  number = 0
  displayNumber.textContent = 0
  saveDisplay.textContent = 0
}

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
