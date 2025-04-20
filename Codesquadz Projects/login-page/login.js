const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let valid = true;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
        form.reset();
    }
});
