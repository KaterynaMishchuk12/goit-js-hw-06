const form = document.querySelector(".login-form");

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const formElements = event.target;

  const email = formElements.elements.email.value;
  const password = formElements.elements.password.value;

  if (email === "" || password === "") {
    return alert(`Please fill in al the blanks!`);
  }
  const formData = { email, password };
  console.log(formData);
  formElements.reset();
}
