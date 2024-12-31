// script.js

document.getElementById('showCreateAccountBtn').addEventListener('click', function() {
    // Toggle visibility of the create account form
    var createAccountForm = document.getElementById('createAccountForm');
    if (createAccountForm.style.display === 'none' || createAccountForm.style.display === '') {
        createAccountForm.style.display = 'block';
        this.innerHTML = 'Hide Create Account';  // Change button text to 'Hide Create Account'
    } else {
        createAccountForm.style.display = 'none';
        this.innerHTML = 'Create Account';  // Change button text back to 'Create Account'
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if both username and password are 'admin'
    if (username === "admin" && password === "admin") {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to the login.html page
        window.location.href = "login.html";
    } else {
        // Show an error message for invalid credentials
        alert("Invalid username or password. Please try again.");
    }
});

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials
    if (username === "admin" && password === "admin") {
        // Redirect to login.html
        window.location.href = "login.html";
        return false; // Prevent the default form submission
    } else {
        // Display an error message
        alert("Invalid username or password. Please try again.");
        return false; // Prevent the default form submission
    }
}

