var button = document.querySelector(".button");
var name = document.querySelector(".name");
var heart = document.querySelector(".heart");
var number = document.querySelector(".number");

function changeColor() {
  button.classList.toggle("background-is-active");
  name.classList.toggle("name-is-active");
  heart.classList.toggle("heart-is-active");
  number.classList.toggle("number-is-active");
  var likeNumber = number.textContent;
  number.textContent = parseInt(likeNumber) + 1;
}

button.addEventListener("click", changeColor);
