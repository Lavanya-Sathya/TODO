let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let passError = document.getElementById("pass-error");
let repassError = document.getElementById("repass-error");
let messageError = document.getElementById("submit-error");


function validateName() {
    var name = document.getElementById("name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write your full name";
        return false;
    }
    // nameError.innerHTML = "valid";
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
    // emailError.innerHTML = "valid";
    return true;

}

function validatePassword() {
    const password = document.getElementById('pwd').value;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password === '') {
        passError.innerHTML = "password is required"
        return false;
    }
    else if (!password.match(passwordPattern)) {
        passError.innerHTML = 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.';
        return false;
    } 
    // passError.innerHTML = "Valid";
    return true;

}

function validateCon(){
    const password = document.getElementById('pwd').value;
    const confirmPassword = document.getElementById('repwd').value;
    if (password === '') {
        repassError.innerHTML = "password is required"
        return false;
    }
    else if (password !== confirmPassword) {
        repassError.innerHTML = "Passwords do not match"
        return false;
    } 
    // repassError.innerHTML = "Valid";
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword() || !validateCon()){
        messageError.style.display="block";
        messageError.innerHTML="Please fix the error";
        
        setTimeout(()=>{messageError.style.display="none";},3000);
        return false;
    }
    
}