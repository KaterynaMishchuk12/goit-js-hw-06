function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
console.dir(input);

input.addEventListener("click", inputHandler);

function inputHandler(event) {
  input.value = event.currentTarget.value;
}

const buttonCreate = document.querySelector("[data-create]");
// console.log(buttonCreate);

const buttonDestroy = document.querySelector("[data-destroy]");
// console.log(buttonDestroy);

const divBoxesEl = document.querySelector("#boxes");
// console.log(boxesEl);

buttonCreate.addEventListener("click", createButtonHandler);
buttonDestroy.addEventListener("click", destroyButtonHandler);

function createBoxes(amount) {
  let size = 30;
  const array = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = document.createElement("div");
    div.classList.add("items");
    div.style.backgroundColor = "${ getRandomHexColor }";
    div.style.width = "${ size }px";
    div.style.height = "${ size }px";
    array.push(div);
  }
  return divBoxesEl.append(...array);
}

function createButtonHandler(event) {
  if (input.value !== "") {
    createBoxes(Number(input.value));
  }
}

function destroyButtonHandler(event) {
  input.value = "";
  divBoxesEl.innerHTML = "";
}
