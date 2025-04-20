const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const formWrapper = document.getElementById("formWrapper");

loginBtn.addEventListener("click", () => {
    formWrapper.style.transform = "translateX(0%)";
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
    formWrapper.style.transform = "translateX(-50%)";
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    error.innerText = "";
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        error.innerText = "Invalid email format.";
    } else if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters.";
    } else {
        alert("Login successful!");
        this.reset();
    }
});

// Signup Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const phone = document.getElementById("signupPhone").value.trim();
    const dob = document.getElementById("signupDOB").value;
    const gender = document.getElementById("signupGender").value;
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;
    const error = document.getElementById("signupError");

    error.innerText = "";
    if (name.length < 3) {
        error.innerText = "Please enter a valid name.";
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        error.innerText = "Invalid email format.";
    } else if (!/^\d{10}$/.test(phone)) {
        error.innerText = "Phone must be 10 digits.";
    } else if (!dob) {
        error.innerText = "Please select date of birth.";
    } else if (!gender) {
        error.innerText = "Please select gender.";
    } else if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters.";
    } else if (password !== confirm) {
        error.innerText = "Passwords do not match.";
    } else {
        alert("Registration successful!");
        this.reset();
    }
});