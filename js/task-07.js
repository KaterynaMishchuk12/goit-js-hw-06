const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

const inputFontSizeHandler = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
};

input.addEventListener("input", inputFontSizeHandler);

// ?? як і куди пов`язати початкове значення шрифту зі значенням інпута
// пов`язати треба, щоб поверталося початкове положення повзунка і шрифта якщозникає фокус?

// text.style.fontsize = Number(input.value)
