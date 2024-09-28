// Simulación del manejo del carrito y productos

// Variables globales
let itemsCart = [];
let itemCount = 0;

// Función para agregar productos al carrito
function addToCart(product) {
  itemsCart.push(product);
  itemCount++;
  updateCartUI();
}

// Función para actualizar la interfaz del carrito
function updateCartUI() {
  const cartNumber = document.querySelector('.item_cart_number');
  if (cartNumber) {
    cartNumber.innerText = itemCount;
    cartNumber.style.display = itemCount > 0 ? 'inline-block' : 'none';
  }
}

// Simulación de añadir producto (puedes conectar esto con tus datos reales)
document.querySelectorAll('.btn.btn-primary').forEach(button => {
  button.addEventListener('click', function () {
    const product = this.parentElement.querySelector('.card-title').innerText;
    addToCart(product);
    alert(product + ' añadido al carrito.');
  });
});
