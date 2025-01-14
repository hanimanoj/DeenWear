// Select elements from the DOM
const searchIcon = document.getElementById("search-icon");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-bar");
const suggestionsBox = document.querySelector(".suggestions");

// Toggle search container visibility
searchIcon.addEventListener("click", function(event) {
    event.stopPropagation();
    searchContainer.classList.toggle("show");
    if (searchContainer.classList.contains("show")) {
        searchInput.focus();
    }
});

// Close search when clicking the faded background
searchContainer.addEventListener("click", function(event) {
    // If clicking the background (searchContainer itself)
    if (event.target === searchContainer) {
        searchContainer.classList.remove("show");
        searchInput.value = "";
        suggestionsBox.style.display = "none";
    }
});

// Prevent clicks within search bar and suggestions from closing the search
searchInput.addEventListener("click", function(event) {
    event.stopPropagation();
});

suggestionsBox.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Show product suggestions as the user types
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase().trim();
    suggestionsBox.innerHTML = "";

    if (query) {
        const filteredProducts = getSuggestions(query);

        filteredProducts.forEach(function(product) {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");

            suggestionItem.innerHTML = `
                <div class="suggestion-content">
                <img
             src="${product.image}"
             alt="${product.name}"
             style="width: 150px; height: auto;"  /* Add inline style as a fallback */
         >
                    <div class="product-details">
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                    </div>
                </div>
            `;
            // Add click handler for navigation
            suggestionItem.addEventListener("click", function() {
                window.location.href = product.url;
            });
            suggestionsBox.appendChild(suggestionItem);
        });

        suggestionsBox.style.display = "block";
    } else {
        suggestionsBox.style.display = "none";
    }
});

// Dummy function to simulate getting products (can be replaced with actual data)
function getSuggestions(query) {
  const products = [
    { name: 'Kurung Amina Black', price: 'RM70.00', image: 'KurungAminaBlack.png', url: 'addToCartKABlack.html' },
    { name: 'Kurung Amina Blue', price: 'RM70.00', image: 'KurungAminaBlue.png', url: 'addToCartKABlue.html' },
    { name: 'Kurung Amina Beige', price: 'RM70.00', image: 'KurungAminaBeige.png', url: 'addToCartKABeige.html' },

    { name: 'Hanna Abaya Dusty Rose', price: 'RM90.00', image: 'HannaAbayaDustyRose.png', url: 'addToCartHARose.html' },
    { name: 'Hanna Abaya Lilac', price: 'RM90.00', image: 'HannaAbayaLilac.png', url: 'addToCartHALilac.html' },
    { name: 'Hanna Abaya Maroon', price: 'RM90.00', image: 'HannaAbayaMaroon.png', url: 'addToCartHAMaroon.html' },

    { name: 'Blouse Nur Ocean Blue', price: 'RM 25.00', image: 'BlouseNurOceanBlue.png', url: 'addToCartBNBlue.html' },
    { name: 'Blouse Nur Sage Green', price: 'RM 25.00', image: 'BlouseNurSageGreen.png', url: 'addToCartBNGreen.html' },
    { name: 'Blouse Nur Almond', price: 'RM 25.00', image: 'BlouseNurAlmond.png', url: 'addToCartBNAlmond.html' },

    { name: 'Palazo Nura Black', price: 'RM 15.90', image: 'PalazoNuraBlack.png', url: 'addToCartPNBlack.html' },
    { name: 'Palazo Nura White', price: 'RM 15.90', image: 'PalazoNuraWhite.png', url: 'addToCartPNWhite.html' },
    { name: 'Palazo Nura Dark Blue', price: 'RM 15.90', image: 'PalazoNuraDarkBlue.png', url: 'addToCartPNBlue.html' },


    { name: 'Pleated Amira Dusty Purple', price: 'RM 22.90', image: 'PleatedAmiraDustyPurple.png', url: 'addToCartPAPurple.html' },
    { name: 'Pleated Amira White', price: 'RM 22.90', image: 'PleatedAmiraWhite.png', url: 'addToCartPAWhite.html' },
    { name: 'Pleated Amira Emerald', price: 'RM22.90', image: 'PleatedAmiraEmerald.png', url: 'addToCartPAEmerald.html' },

    { name: 'Amani Skirt Extender', price: 'RM 12.00', image: 'AmaniSkirtExtenderBlue.png', url: 'addToCartASEBlue.html' },
    { name: 'Haya Skirt Extender', price: 'RM 12.00', image: 'HayaSkirtExtenderKhakis.png', url: 'addToCartHSEKhakis.html' },
    { name: 'Sakinah Skirt Extender', price: 'RM 12.00', image: 'SakinahSkirtExtenderPink.png', url: 'addToCartSSEPink.html' },

    { name: 'Shawl Maryam Blue', price: 'RM 19.50', image: 'MaryamShawlIronlessFrostBlue.png', url: 'addToCartShawlMar.html' },
    { name: 'Shawl Sadiya Green', price: 'RM 16.50', image: 'ShawlSadiyaJerseyPineGreen.png', url: 'addToCartShawlSad.html' },
    { name: 'Shawl Safiya Purple', price: 'RM 21.50', image: 'ShawlSafiyaPrintedDustyPurple.png', url: 'addToCartShawlSaf.html' },

    { name: 'Bawal Dalia', price: 'RM 14.90', image: 'BawalDaliaNormalCutDarkGrey.png', url: 'addToCartBawalDalia.html' },
    { name: 'Bawal Rasya', price: 'RM 12.90', image: 'BawalRashaLaserCutPinkish.png', url: 'addToCartBawalRasha.html' },
    { name: 'Bawal Amna', price: 'RM 17.90', image: 'BawalAmnaCurvePink.png', url: 'addToCartBawalAmna.html' },

    { name: 'Khadijah Instant', price: 'RM 25.90', image: 'KhadijahInstantShawlMoos.png', url: 'addToCartInstKhadijah.html' },
    { name: 'Fariha Instant', price: 'RM 27.90', image: 'FarihaInstantBawalDustyGreen.png', url: 'addToCartInstFariha.html' },
    { name: 'Yasira Instant', price: 'RM15.00', image: 'YasiraInstantEasyWearPurple.png', url: 'addToCartInstYasira.html' },

  ];

  return products.filter(product => product.name.toLowerCase().includes(query));
}
