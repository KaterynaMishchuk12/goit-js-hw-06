function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
buttonChangeColor.addEventListener("click", buttonClickHandler);
// console.dir(button);

function buttonClickHandler(event) {
  const bodyColor = (document.body.style.backgroundColor = getRandomHexColor());
  span.textContent = bodyColor;
  console.log(event);
}
