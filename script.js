class Product {
  constructor(name, price, stockQuantity) {
    this.name = name;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addProduct(product, quantity) {
    if (quantity > 0 && quantity <= product.stockQuantity) {
      const existingItem = this.items.find((item) => item.product === product);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }

      // Update stock quantity
      product.stockQuantity -= quantity;

      console.log(`${quantity} ${product.name}(s) added to the cart.`);
    } else {
      console.log("Invalid quantity or insufficient stock.");
    }
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  checkout() {
    const total = this.calculateTotal();
    console.log(`Total Price: $${total}`);

    // Perform checkout operations 

    // Reset the shopping cart
    this.items = [];
    console.log("Checkout completed. Thank you for shopping!");
  }
}

class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.shoppingCart = new ShoppingCart();
  }
}


// Create some products
const laptop = new Product("Laptop", 800, 10);
const phone = new Product("Smartphone", 500, 20);

// Create a customer
const customer = new Customer("Saiful Islam", "abc@gmailc.com");

// Add products to the shopping cart
customer.shoppingCart.addProduct(laptop, 2);
customer.shoppingCart.addProduct(phone, 1);

// Calculate and display the total price
const totalPrice = customer.shoppingCart.calculateTotal();
console.log(`Total Price in the cart: $${totalPrice}`);

// Checkout
customer.shoppingCart.checkout();
