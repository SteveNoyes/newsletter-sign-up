let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailInput = document.getElementById("emailInput");
  if (emailInput.value == "") {
    console.log("Empty Input");
    // show error message
    var errorElement = document.getElementById("error-statement");
    errorElement.classList.add("error-show");
    // apply error class
    var emailElement = document.getElementById("emailInput");
    emailElement.classList.add("error-styles");
  } else {
    console.log(
      `This form has a email input of ${emailInput.value}`
    );
    emailInput.value = "";
    window.location.href = "http://127.0.0.1:5500/success-page.html";
    // https://stevenoyes.github.io/newsletter-sign-up/
  }
});