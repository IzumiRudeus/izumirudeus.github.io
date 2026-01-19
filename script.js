// --- THIS IS THE INSECURE PART ---
// The correct password is saved directly in the code.
const CORRECT_PASSWORD = "your-secret-password-123";

// Get the HTML elements we need to work with
const loginButton = document.getElementById('login-button');
const passwordInput = document.getElementById('password-input');

// Add an event listener for when the login button is clicked
loginButton.addEventListener('click', () => {
    // Get the value the user typed into the password field
    const enteredPassword = passwordInput.value;

    // Check if the entered password matches the correct one
    if (enteredPassword === CORRECT_PASSWORD) {
        // If it's correct, redirect the user to the admin page
        alert('Login successful! Redirecting...');
        window.location.href = 'admin.html';
    } else {
        // If it's incorrect, show an error message
        alert('Incorrect Password. Please try again.');
        // Optionally, clear the input field
        passwordInput.value = '';
    }
});
