function validateForm() {
  // Get form inputs
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Initialize error message
  let errorMessage = "";

  // Check for empty fields
  if (!email) {
    errorMessage += "Email is required.\n";
  }
  if (!username) {
    errorMessage += "Username is required.\n";
  }
  if (!password) {
    errorMessage += "Password is required.\n";
  }
  if (!confirmPassword) {
    errorMessage += "Confirm Password is required.\n";
  }

  // If there are empty fields, show the error and stop
  if (errorMessage) {
    alert(errorMessage);
    return false;
  }

  // Validate email length (max 60 characters)
  if (email.length > 60) {
    alert("Email must not exceed 60 characters.");
    return false;
  }

  // Validate username length (max 40 characters)
  if (username.length > 40) {
    alert("Username must not exceed 40 characters.");
    return false;
  }

  // Validate password length (exactly 8 characters)
  if (password.length !== 8) {
    alert("Password must be exactly 8 characters long.");
    return false;
  }

  // Validate confirm password matches password
  if (password !== confirmPassword) {
    alert("Confirm Password must match Password.");
    return false;
  }

  // If all validations pass, show success message
  alert("Signup successful!\nEmail: " + email + "\nUsername: " + username);
  return true;
}
