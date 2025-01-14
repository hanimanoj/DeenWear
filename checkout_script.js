document.getElementById('checkoutPage').addEventListener('submit', function(event) {
event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('addy').value;
    const poscode = document.getElementById('poscode').value;
    const emailError = document.getElementById('emailError');

    // Fetch cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!name || !email || !phone || !address || !poscode) {
      alert('Please fill out every field.');
      return;
    }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email address.";
        return;
      } else {
        emailError.textContent = "";
      }

      // Check if the cart is empty
      if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
      }

      // Create a new order
      const newOrder = {
        orderId: new Date().getTime(),
        date: new Date().toLocaleString(), // current date and time
        items: cart, // items in the order
        total: cart.reduce((sum, item) => sum + item.total, 0) // total
      };

      //Save the order to order history
      const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
      orderHistory.push(newOrder);
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

      // Clear the cart
      localStorage.removeItem('cart');

      // Update the "Pay Now" message
      const paynow = document.getElementById('paynow');
      paynow.textContent = "Thank you for shopping with us!";
      alert("Thank you for shopping with us!");

      // Redirect to a confirmation or order success page (optional)
      window.location.href = 'ProfilePage.html';
});

// Order summary on cart page
window.onload = function () {
    orderSummary();
};

function orderSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const orderSummaryDiv = document.querySelector('.orderSummary');
  let total = 0;

  orderSummaryDiv.innerHTML = ''; // Clear existing content

  if (cart.length === 0) {
      orderSummaryDiv.innerHTML = '<p>You have no items in your cart.</p>';
      return;
  }

  cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('orderItem');

      itemDiv.innerHTML = `
          <img src="${item.productImage}" alt="${item.name}" class="productImage">
          <h4>${item.name}</h4>
          <p>${item.size}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: RM${item.price.toFixed(2)}</p>
          <p>Total: RM${item.total.toFixed(2)}</p>
      `;

      orderSummaryDiv.appendChild(itemDiv);
      total += item.total;
  });

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');
  totalDiv.innerHTML = `<h3>Total: RM ${total.toFixed(2)}</h3>`;

  orderSummaryDiv.appendChild(totalDiv);
}
