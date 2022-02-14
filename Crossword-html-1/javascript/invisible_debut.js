$(document).ready(function () {
var ga = document.createElement("script"); //ga is to remember Google Analytics ;-)
ga.type = 'text/javascript';
ga.src = 'javascript/list.js';
ga.id = 'invisible';
document.body.appendChild(ga);
$('#invisible').remove();

function setUserName() {
  let myName = prompt('Please enter your firstname and lastname separated by a space.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Crossword is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Crossword is cool, ' + storedName;
}
}
);