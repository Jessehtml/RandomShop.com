// Cart functionality using localStorage

function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return; // If not on cart page, skip
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Initialize cart display and event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            localStorage.removeItem('cart');
            displayCart();
        });
    }
});