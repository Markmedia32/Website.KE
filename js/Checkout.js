let checkoutList = document.getElementById('checkoutList');
let totalElement = document.querySelector('.total');
let quantityElement = document.querySelector('.quantity');
let backToShoppingBtn = document.querySelector('.back-to-shopping');

// Load items in the checkout list
function loadCheckoutList() {
    checkoutList.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;

    for (const key in listCards) {
        if (listCards.hasOwnProperty(key)) {
            const value = listCards[key];

            let listItem = document.createElement('div');
            listItem.classList.add('checkout-list-item');
            listItem.innerHTML = `
                <img src="images/${value.image}" alt="${value.name}">
                <div class="checkout-list-item-info">
                    <div>${value.name}</div>
                    <div>Price: Ksh${value.price.toLocaleString()}</div>
                    <div>Quantity: ${value.quantity}</div>
                </div>
            `;
            checkoutList.appendChild(listItem);

            totalQuantity += value.quantity;
            totalPrice += value.price;
        }
    }

    totalElement.textContent = `Ksh${totalPrice.toLocaleString()}`;
    quantityElement.textContent = totalQuantity;
}

// Event listener for "Back to Shopping" button
backToShoppingBtn.addEventListener('click', () => {
    // Redirect back to the shopping page
    window.location.href = 'index.html';
});

// Initial load of the checkout list
loadCheckoutList();
