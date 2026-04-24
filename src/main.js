const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;

  if (emailValue === "" || !emailPattern.test(emailValue)) {
    form.classList.add("invalid");
    form.classList.remove("valid");
  } else {
    // VALID: Remove the error class and proceed (e.g., submit to the server)
    form.classList.remove("invalid");
    form.classList.add("valid");

    form.reset();
  }
});

// Optional: Clear error when user starts typing again
emailInput.addEventListener("input", () => {
  if (form.classList.contains("invalid")) {
    form.classList.remove("invalid");
  }
});
