function navigateToPage() {
  const dropdown = document.getElementById('productslist');
  const selectedValue = dropdown.value;

  // Redirect to the selected page if a valid option is chosen
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

function checkAndRedirectToProfile() {
  const loggedInUser = localStorage.getItem('userUsername');
  if (loggedInUser) {
    // User is logged in, redirect to profile page
    window.location.href = "ProfilePage.html";
  } else {
    // User is not logged in, redirect to login page
    window.location.href = "LoginPage.html";
  }
}

function logout() {
  localStorage.removeItem('userUsername');
  localStorage.removeItem('userPassword');
  localStorage.setItem('isLoggedIn', 'false'); // Ensure we set isLoggedIn to false on logout
  window.location.href = "LoginPage.html"; // Redirect after logout
}
