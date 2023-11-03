const input = document.querySelector("#validation-input");
console.log(input);

const inputBlurHandler = (event) => {
  if (input.value.trim().length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
// console.log(inputBlurHandler);

input.addEventListener("blur", inputBlurHandler);
