const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector(`#ingredients`);

const listEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  item.classList.add("item-js");
  return item;
});

ingredientsEl.append(...listEl);
console.log(ingredientsEl);
