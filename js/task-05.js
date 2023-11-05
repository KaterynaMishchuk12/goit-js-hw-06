const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

const inputHandler = (event) => {
  if (event.currentTarget.value.trim() !== "") {
    output.textContent = event.currentTarget.value.trim();
  } else {
    output.textContent = "Anonymous";
  }
};

input.addEventListener("input", inputHandler);
