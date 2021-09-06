import "./styles/main.scss";

const email = document.querySelector("#email");
const email_error = document.querySelector(".form__get-started > span.error");
const form = document.querySelector(".form");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    email_error.innerHTML = "";
    email_error.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.value) {
    showError();
    event.preventDefault();
  } else if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

const showError = () => {
  if (!email.value) {
    email_error.textContent = "Please enter an email address";
  } else if (email.validity.typeMismatch) {
    email_error.textContent = "Please enter a valid email address";
  }
  email_error.className = "error active";
};
