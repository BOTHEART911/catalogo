let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(btn) {
    // Increment cart count
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    // Flash green message
    alert("Genial! se ha añadido el producto al carrito");

    // Update cart
    let productInfo = btn.closest('.carousel-item').querySelector('.product-info').cloneNode(true);
    document.getElementById('cart-items').appendChild(productInfo);
    updateCartTotal();
}

function toggleCart() {
    const cartOverlay = document.getElementById('cart');
    cartOverlay.style.display = cartOverlay.style.display === 'none' || cartOverlay.style.display === '' ? 'flex' : 'none';
}

function updateCartTotal() {
    // Sum up all items in the cart
    cartTotal = cartCount * 20000; // Example product price
    document.getElementById('cart-total').textContent = cartTotal;
    document.getElementById('final-total').textContent = cartTotal;
}

function finalizeOrder() {
    toggleCart();
    alert("La orden será enviada a WhatsApp");
}
