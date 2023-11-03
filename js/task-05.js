const input = document.querySelector("#name-input");
console.log(input);

const output = document.querySelector("#name-output");
console.log(output);

const inputHandler = (event) => {
  output.textContent = event.currentTarget.value;
};
input.addEventListener("input", inputHandler);

