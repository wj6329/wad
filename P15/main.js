// Function to validate the registration form
function validateForm() {
  // Get form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validate name field
  if (name === "") {
    showErrorPopup("Please enter your name.");
    return false;
  }

  // Validate email field
  if (!validateEmail(email)) {
    showErrorPopup("Please enter a valid email address.");
    return false;
  }

  // Validate password field
  if (password.length < 6) {
    showErrorPopup("Password must be at least 6 characters long.");
    return false;
  }

  // If all fields are valid, submit the form
  alert("Registration successful!");
  return true;
}

// Function to validate email using regular expression
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to display error popup
function showErrorPopup(message) {
  alert("Error: " + message);
}
