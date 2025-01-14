document.getElementById('profile-tab').addEventListener('click', function() {
  document.getElementById('profile-section').style.display = 'block';
  document.getElementById('order-history-section').style.display = 'none';
  this.classList.add('active');
  document.getElementById('order-history-tab').classList.remove('active');
});

document.getElementById('order-history-tab').addEventListener('click', function() {
  document.getElementById('profile-section').style.display = 'none';
  document.getElementById('order-history-section').style.display = 'block';
  this.classList.add('active');
  document.getElementById('profile-tab').classList.remove('active');
});

//Handle logout page
function logout() {
  localStorage.removeItem('userUsername');
  localStorage.removeItem('userPassword');
  localStorage.setItem('isLoggedIn', 'false'); // Ensure we set isLoggedIn to false on logout
  window.location.href = "LoginPage.html"; // Redirect after logout
}

// Initialize to show profile section by default
window.onload = function() {
  document.getElementById('profile-section').style.display = 'block';
  document.getElementById('order-history-section').style.display = 'none';
};

// Handle form submission on the profile page
document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) return alert('Passwords do not match.');

  // Save form data to localStorage
  ['first-name', 'last-name', 'email', 'gender', 'phone', 'dob'].forEach(id => {
    localStorage.setItem(id, document.getElementById(id).value);
  });

  alert("Profile updated successfully.");
});

window.onload = function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check the login status

  if (!isLoggedIn) {
    window.location.href = 'LoginPage.html'; // Redirect to login page if not logged in
  } else {
    const username = localStorage.getItem('userUsername');
    console.log(`Welcome back, ${username}!`);

    // Optionally, update the profile page with the logged-in user's name
    const usernameElement = document.getElementById('user-username');
    if (usernameElement) {
        usernameElement.innerText = username;
    }
  }

  displayOrderHistory();
  orderSummary();
};

// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation (replace with real authentication logic)
    if (username === "testuser" && password === "password123") {
      localStorage.setItem('isLoggedIn', 'true'); // Mark user as logged in
      localStorage.setItem('userUsername', username); // Store username
      alert("Login successful!");
      window.location.href = "ProfilePage.html"; // Redirect to profile page
    } else {
      alert("Invalid username or password.");
    }
  });

  // Redirect to profile page if user is already logged in
  if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'ProfilePage.html';
  }
});


// Order history
function displayOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const orderHistoryList = document.getElementById('orderHistoryList');

    if (orderHistory.length === 0) {
        orderHistoryList.innerHTML = '<p>No orders yet.</p>';
        return;
    }

    orderHistoryList.innerHTML = '';
    orderHistory.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');

        const itemsList = order.items
            .map(item => `<li><img src="${item.productImage}" alt="${item.name}" class="productImage">
                    ${item.name} (x${item.quantity}) - RM${item.total.toFixed(2)} </li>`)
            .join('');

        orderDiv.innerHTML = `
            <h5>Order ID: ${order.orderId}</h5>
            <p>Date: ${order.date}</p>
            <ul>${itemsList}</ul>
            <h4>Total: RM${order.total.toFixed(2)}</h4>
        `;

        orderHistoryList.appendChild(orderDiv);
    });
}

// Function to clear order history
function clearOrderHistory() {
  // Remove 'orderHistory' from localStorage
  localStorage.removeItem('orderHistory');

  // Update the order history display
  const orderHistoryList = document.getElementById('orderHistoryList');
  orderHistoryList.innerHTML = '<p>No orders yet.</p>';
}

// Attach event listener to the "Clear Order History" button
document.getElementById('clear-history-button').addEventListener('click', function() {
  if (confirm("Are you sure you want to clear your order history?")) {
    clearOrderHistory();
  }
});
// Define the variable to select the element
const orderSummary = document.getElementById('orderSummary');

// Now you can use the element
if (orderSummary) {
    orderSummary.innerHTML = "Your order summary here";
}
window.addEventListener('DOMContentLoaded', (event) => {
    const orderSummary = document.getElementById('orderSummary');
    if (orderSummary) {
        orderSummary.innerHTML = "Your order summary here";
    }
});
