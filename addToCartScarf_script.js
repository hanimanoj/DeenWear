//function for increase decrease button (quantity)//
function increaseQuantity() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseQuantity() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
//function for increase decrease button (quantity)//

//add to cart button notification//
function addToCart(name, price, productImage){
  const addToCart = document.getElementById('addToCart');
   const quantity = parseInt(document.getElementById('number').value, 10) || 0;



   if (quantity === 0) {
       alert("Please select a quantity!");
       return;
   }

   let cart = JSON.parse(localStorage.getItem('cart')) || [];

   const product = {
     name: name,
     price: price,
     size: "Free Size",
     quantity: quantity,
     total: price * quantity,
     productImage: productImage
   };

   cart.push(product);
   localStorage.setItem('cart', JSON.stringify(cart));

   addToCart.textContent = `${name} has been added into your cart!`;
   alert(`${name} has been added into your cart!`);

 }
//add to cart button notification//

//go to cart page after click bag icon//
function goToCart(){
  window.location.href='cart.html';
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
