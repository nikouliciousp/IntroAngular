// Define a constructor function for creating Product objects
function Product(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
}

// Add a displayInfo method to the Product prototype
Product.prototype.displayInfo = function () {
  // Log the product information
  console.log(`Product Name: ${this.name}`);
  console.log(`Price: $${this.price}`);
  console.log(`Description: ${this.description}`);
};

// Create a new Product object using the constructor function
let product = new Product("Laptop", 999.99, "A high-performance laptop");

// Call the displayInfo method of the Product object
product.displayInfo();
// Output:
// Product Name: Laptop
// Price: $999.99
// Description: A high-performance laptop
