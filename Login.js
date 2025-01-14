
function logout() {
  localStorage.removeItem('userUsername');
  localStorage.removeItem('userPassword');
  localStorage.setItem('isLoggedIn', 'false'); // Ensure we set isLoggedIn to false on logout
  window.location.href = "LoginPage.html"; // Redirect after logout
}

// Handle Login Form Switch
function toggleForm(formType) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginButton = document.getElementById('login-button');
  const signupButton = document.getElementById('signup-button');

  if (formType === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginButton.classList.add('active');
    signupButton.classList.remove('active');
  } else {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupButton.classList.add('active');
    loginButton.classList.remove('active');
  }
}

function login(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Get stored users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Validate credentials
  const userExists = users.find(
    user => user.username === username && user.password === password
  );

  if (userExists) {
    // Login successful
    localStorage.setItem('isLoggedIn', 'true'); // Set login status
    localStorage.setItem('userUsername', username); // Store logged-in user's username

    alert('Login successful!');
    window.location.href = 'ProfilePage.html'; // Redirect to profile page
  } else {
    // Login failed
    alert('Invalid username or password. Please sign up first.');
  }
}

// Handle Sign-Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById('email-signup').value;
  const username = document.getElementById('username-signup').value;
  const password = document.getElementById('password-signup').value;

  if (email && username && password) {
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username or email already exists
    const userExists = users.some(user => user.email === email || user.username === username);

    if (userExists) {
      alert('This username or email is already registered. Please use a different one.');
    } else {
      // Add the new user to the users array
      users.push({ email, username, password });
      localStorage.setItem('users', JSON.stringify(users)); // Save updated users list to localStorage

      alert('Sign-Up Successful!');
      toggleForm('login'); // Switch back to login form after successful sign-up
    }
  } else {
    alert('Please fill in all fields.');
  }
});
