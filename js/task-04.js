const buttonDecrement = document.querySelector('[data-action="decrement"]');
// console.log(buttonDecrement);

const buttonIncrement = document.querySelector('[data-action="increment"]');
// console.log(buttonIncrement);

let counterValue = 0;
const valueEl = document.querySelector("#value");

const onClickButtonDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
buttonDecrement.addEventListener("click", onClickButtonDecrement);
console.log(buttonDecrement);

const onClickButtonIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
buttonIncrement.addEventListener("click", onClickButtonIncrement);
