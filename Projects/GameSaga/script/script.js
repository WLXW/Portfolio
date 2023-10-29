function displayGreeting() {
  var input = document.getElementById("inputField").value;
  var greeting = "Have a nice play, " + input;

  localStorage.setItem("username", input);

  var inputField = document.getElementById("inputField");
  inputField.style.display = "none";

  var greetingElement = document.createElement("span");
  greetingElement.textContent = greeting;

  var submitButton = document.getElementById("submit-button");
  submitButton.style.display = "none";

  var eraseButton = document.getElementById("erase-button");
  eraseButton.style.display = "block";

  inputField.parentNode.insertBefore(greetingElement, inputField.nextSibling);
}


function checkUsernameAndDisplayGreeting() {
  var storedUsername = localStorage.getItem("username");

  if (storedUsername) {
    // Use the stored username
    var greeting = "Have a nice play, " + storedUsername;

    var inputField = document.getElementById("inputField");
    inputField.style.display = "none";

    var greetingElement = document.createElement("span");
    greetingElement.textContent = greeting;

    var submitButton = document.getElementById("submit-button");
    submitButton.style.display = "none";

    var eraseButton = document.getElementById("erase-button");
  eraseButton.style.display = "block";

    inputField.parentNode.insertBefore(greetingElement, inputField.nextSibling);
  } else {
    
  }
}

window.onload = function() {
  checkUsernameAndDisplayGreeting();
};

function eraseUsernameFromLocalStorage() {
  localStorage.removeItem("username");
  console.log("Username erased from local storage.");

  var inputField = document.getElementById("inputField");
  inputField.style.display = "block";

  var submitButton = document.getElementById("submit-button");
  submitButton.style.display = "block";

  var eraseButton = document.getElementById("erase-button");
  eraseButton.style.display = "none";

  var greetingElement = document.querySelector("#username span");
  if (greetingElement) {
    greetingElement.parentNode.removeChild(greetingElement);
  }

  inputField.value = "";
}
