window.onload = function(){
  displayCart();
  if (localStorage.getItem('isLoggedIn') === null) {
      localStorage.setItem('isLoggedIn', 'false'); // Default to logged out
  }
};
//cart//
function displayCart(){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Get cart container and total section
    const cartItemsDiv = document.getElementById('cartItem');
    const totalPriceDiv = document.getElementById('totalPrice');
    cartItemsDiv.innerHTML = ''; // Clear previous content
    let total = 0;

    // Loop through cart items and display them
    cart.forEach((item, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cartItem');

        productDiv.innerHTML = `
        <img src="${item.productImage}" alt="${item.name}" class="productImage">
<div class="productDetails">
            <h4>${item.name}</h4>
            <p>Size: ${item.size}</p>
            <p>Price: RM ${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: RM ${item.total.toFixed(2)}</p>
            <button onclick="removeItem(${index})">Remove</button>

        `;

        cartItemsDiv.appendChild(productDiv);
        total += item.total;
    });

    // Display the total price
    totalPriceDiv.querySelector('span').textContent = total.toFixed(2);


}
//cart//

//----------------------------------------------------------------------//

// Click checkout button
document.getElementById('checkoutButton').addEventListener('click', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if the user is logged in
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart from localStorage

    // Log the login status for debugging
    console.log('Is logged in:', isLoggedIn);
    console.log('Cart contents:', cart);

    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else if (!isLoggedIn) {
        // Redirect to login page if not logged in
        alert("You need to log in first!");
        window.location.href = 'LoginPage.html'; // Redirect to login page
    } else {
        // If logged in, proceed to checkout page
        window.location.href = 'checkout.html'; // Redirect to checkout page
    }
});
// End of checkout button click handler
//----------------------------------------------------------------------//

//remove item//
function removeItem(index) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-display the cart and update the total price
    displayCart();
}
//remove item//
