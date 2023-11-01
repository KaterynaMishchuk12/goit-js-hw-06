const input = document.querySelector("#font-size-control");
console.log(input);

const text = document.querySelector("#text");
console.log(text);

const inputFontSizeHandler = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
};
input.addEventListener("input", inputFontSizeHandler);

console.dir(input);
