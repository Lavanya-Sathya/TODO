let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let passError = document.getElementById("pass-error");
let repassError = document.getElementById("repass-error");
let messageError = document.getElementById("submit-error");

let nameIcon = document.getElementById("name-error-icon");
let emailIcon = document.getElementById("email-error-icon");
let passIcon = document.getElementById("pass-error-icon");
let repassIcon = document.getElementById("repass-error-icon");
var emailVal = document.getElementById("email");
let passwordVal = document.getElementById("pwd");

function validateName() {
  var name = document.getElementById("name").value;
  nameIcon.style.display = "block";
  if (name.length == 0) {
    nameIcon.innerHTML = `<i class="fa-solid fa-circle-xmark " style="color: #b80a0a;"></i>`;
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (name.length < 4) {
    nameIcon.innerHTML = `<i class="fa-solid fa-circle-xmark " id="icon" style="color: #b80a0a;"></i>`;
    nameError.innerHTML = "Name must be atleast 4 characters";
    return false;
  }
  nameIcon.innerHTML = `<i class="fa-solid fa-check" style="color: #16ca55;"></i>`;
  nameError.innerHTML = "";
  return true;
}

function validateEmail() {
  var email = emailVal.value;
  emailIcon.style.display = "block";
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #b80a0a;"></i>`;
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    emailIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #b80a0a;"></i>`;
    return false;
  }
  emailIcon.innerHTML = `<i class="fa-solid fa-check" style="color: #16ca55;"></i>`;
  emailError.innerHTML = "";
  return true;
}

function validatePassword() {
  const password = passwordVal.value;
  passIcon.style.display = "block";
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password === "") {
    passError.innerHTML = "password is required";
    passIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #b80a0a;"></i>`;

    return false;
  } else if (!password.match(passwordPattern)) {
    passError.innerHTML =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
    passIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #b80a0a;"></i>`;
    return false;
  }
  passError.innerHTML = "";
  passIcon.innerHTML = `<i class="fa-solid fa-check" style="color: #16ca55;"></i>`;
  return true;
}

function validateCon() {
  const password = document.getElementById("pwd").value;
  const confirmPassword = document.getElementById("repwd").value;
  repassIcon.style.display = "block";

  if (password === "") {
    repassError.innerHTML = "password is required";
    repassIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #b80a0a;"></i>`;
    return false;
  } else if (password !== confirmPassword) {
    repassError.innerHTML = "Passwords do not match";
    repassIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #b80a0a;"></i>`;
    return false;
  }
  repassError.innerHTML = "";
  repassIcon.innerHTML = `<i class="fa-solid fa-check" style="color: #16ca55;"></i>`;
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePassword() ||
    !validateCon()
  ) {
    messageError.style.display = "block";
    messageError.innerHTML = "Please fix the error";

    setTimeout(() => {
      messageError.style.display = "none";
    }, 3000);
    return false;
  } else {
    const userName = emailVal.value;
    const passworsName = passwordVal.value;
    let data = [
      {
        username: userName,
        password: passworsName,
      },
    ];
    localStorage.setItem("data", JSON.stringify(data));
    return true;
  }
}
