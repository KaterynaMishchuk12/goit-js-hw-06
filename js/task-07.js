const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

const inputFontSizeHandler = (event) => {
  text.style.fontSize = Number(input.value);
  text.style.fontSize = event.currentTarget.value + "px";
};

input.addEventListener("input", inputFontSizeHandler);
