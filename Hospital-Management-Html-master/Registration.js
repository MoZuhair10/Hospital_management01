// JavaScript to handle form submission and save data to localStorage
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect input values
    const firstName = document.querySelector('input[id="firstName"]').value;
    const lastName = document.querySelector('input[id="lastName"]').value;
    const email = document.querySelector('input[id="email"]').value;
    const password = document.querySelector('input[id="password"]').value;
    const confirmPassword = document.querySelector('input[id="confirmPassword"]').value;
    const termsAccepted = document.querySelector('input[id="terms"]').checked;

    // Validate if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Validate if terms and conditions are accepted
    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
    }

    // Create user data object
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Save the user data in local storage
    localStorage.setItem('userRegistration', JSON.stringify(userData));

    // Display success message
    document.querySelector('.successBox').style.display = 'block';

    // Optionally clear the form fields
    document.getElementById('registrationForm').reset();
});
