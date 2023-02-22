let displayNumber = document.getElementById("display")
let saveDisplay = document.getElementById("save-display")
let number = 0

function increment() {
  number = number + 1
  displayNumber.innerText = number
}

function save() {
  saveDisplay.innerText = number
}

function reset() {
  number = 0
  displayNumber.innerText = 0
  saveDisplay.innerText = 0
}

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
