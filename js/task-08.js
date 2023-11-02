const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const formElements = event.target;
  console.dir(formElements);

  const email = formElements.elements.email.value;
  const password = formElements.elements.password.value;
  console.dir(email);
  console.dir(password);

  if (email === "" || password === "") {
    return alert(`Please fill in al the blanks!`);
  }
  const formData = { email, password };
  console.log(formData);
  formElements.reset();
}
