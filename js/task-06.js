const input = document.querySelector("#validation-input");
console.log(input);

const validInput = document.querySelector(".validation-input.valid");
console.log(validInput);

const invalidInput = document.querySelector(".validation-input.invalid");
console.log(invalidInput);

const inputBlurHandler = (event) => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};
// console.log(inputBlurHandler);

input.addEventListener("blur", inputBlurHandler);
