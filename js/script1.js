const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(
            ".password"
        );

        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Preventing form submit
        forms.classList.toggle("show-signup");
    });
});

forms.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing form submit

    // Get the entered email and password
    const emailInput = forms.querySelector(".email");
    const passwordInput = forms.querySelector(".password");
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    // Call a function to validate the email and password
    const isCredentialsValid = validateCredentials(enteredEmail, enteredPassword);

    if (isCredentialsValid) {
        // Credentials are valid, redirect to index.html
        window.location.href = "index.html";
    } else {
        // Credentials are incorrect, display an error message
        const errorMessage = forms.querySelector(".error-message");
        errorMessage.textContent = "Invalid email or password. Please try again.";
        emailInput.value = ""; // Clear the email field
        passwordInput.value = ""; // Clear the password field
    }
});

function validateCredentials(email, password) {
    // Here, you would implement the logic to validate the email and password.
    // You can compare the entered email and password against a predefined set of valid credentials.
    // Replace the exampleEmails and examplePasswords with your own set of valid credentials.

    const validEmails = ["user1@example.com", "user2@example.com"];
    const validPasswords = ["password1", "password2"];

    for (let i = 0; i < validEmails.length; i++) {
        if (email === validEmails[i] && password === examplePasswords[i]) {
            return true; // Credentials are valid
        }
    }

    return false; // Credentials are invalid
}