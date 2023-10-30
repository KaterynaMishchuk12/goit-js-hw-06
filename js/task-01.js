const categories = document.querySelector("#categories");
const totalCategories = categories.children.length;
console.log(`Number of categories: ${totalCategories}`);
// console.log(totalCategories);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
