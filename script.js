// Define some sample data for products
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20.49 },
    { id: 3, name: "Product 3", price: 15.99 },
    // Add more products as needed
];

// Function to display products in the products section
function displayProducts() {
    const productsSection = document.getElementById("products");

    // Clear existing content
    productsSection.innerHTML = "";

    // Loop through products and create HTML elements for each
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product in the array
    const product = products.find(p => p.id === productId);

    // Example: Add the product to the cart (you can implement this according to your needs)
    console.log(`Added ${product.name} to cart`);
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
