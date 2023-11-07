let emailError = document.getElementById("email-error");
let passError = document.getElementById("pass-error");
let messageError = document.getElementById("submit-error");
let emailVal = document.getElementById("email");
let passwordVal = document.getElementById("pwd");

let eyeicon = document.getElementById("eyeicon");
eyeicon.addEventListener("click", () => {
  if (passwordVal.type === "password") {
    eyeicon.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    passwordVal.type = "text";
  } else {
    eyeicon.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    passwordVal.type = "password";
  }
});
function validateEmail() {
  let email = emailVal.value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

function validatePassword() {
  let password = passwordVal.value;

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password === "") {
    passError.innerHTML = "password is required";
    return false;
  } else if (!password.match(passwordPattern)) {
    passError.innerHTML =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
    return false;
  }
  passError.innerHTML = "";
  return true;
}

function validateForm() {
  if (!validateEmail() || !validatePassword()) {
    messageError.style.display = "block";
    messageError.innerHTML = "Please fix the error";

    setTimeout(() => {
      messageError.style.display = "none";
    }, 3000);
    return false;
  } else {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length === 0) {
      emailVal.value = "";
      passwordVal.value = "";
      alert("Please Sign Up");
      return false;
    } else if (
      emailVal.value === data[0].username &&
      passwordVal.value === data[0].password
    ) {
      alert("LoggedIn Successfully");
    } else {
      messageError.style.display = "block";
      messageError.innerHTML = "Password and Email doesn't match. Please Check";
      messageError.style.color = "red";
      setTimeout(() => {
        messageError.style.display = "none";
      }, 3000);
      return false;
    }
  }
}
