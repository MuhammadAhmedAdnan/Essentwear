let cart = [];

function openModal(productId) {
    // Populate modal with product details based on productId
    document.getElementById('modalImg').src = 'images/product' + productId + '.jpg';
    document.getElementById('modalTitle').textContent = "Men's Black Socks"; // Use productId to change content dynamically
    document.getElementById('modalPrice').textContent = "$10.00";

    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function addToCart() {
    // Add item to cart
    alert('Product added to cart!');
    closeModal();
}

function updateCart() {
    // Logic to update the cart page with current cart items
}

function checkout() {
    // Logic to proceed with checkout
    alert('Proceeding to checkout');
}
