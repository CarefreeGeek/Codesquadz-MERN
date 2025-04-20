const form = document.getElementById("admissionForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const dob = document.getElementById("dob").value;
      const gender = document.getElementById("gender").value;
      const grade = document.getElementById("grade").value;
      const address = document.getElementById("address").value.trim();

      // Clear previous errors
      document.querySelectorAll(".error").forEach(e => e.innerText = "");

      if (name.length < 3) {
        isValid = false;
        document.getElementById("error-name").innerText = "Enter a valid full name.";
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("error-email").innerText = "Enter a valid email.";
      }

      if (!/^\d{10}$/.test(phone)) {
        isValid = false;
        document.getElementById("error-phone").innerText = "Enter a 10-digit phone number.";
      }

      if (!dob) {
        isValid = false;
        document.getElementById("error-dob").innerText = "Please select a date of birth.";
      }

      if (!gender) {
        isValid = false;
        document.getElementById("error-gender").innerText = "Please select gender.";
      }

      if (!grade) {
        isValid = false;
        document.getElementById("error-grade").innerText = "Please select a grade.";
      }

      if (address.length < 10) {
        isValid = false;
        document.getElementById("error-address").innerText = "Enter a detailed address.";
      }

      if (isValid) {
        alert("Application submitted successfully!");
        form.reset();
      }
    });