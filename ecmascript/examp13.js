// Define a factory function for creating Product objects
function createProduct(name, price, description) {
  return {
    name: name,
    price: price,
    description: description,
    displayInfo: function () {
      // Log the product information
      console.log(`Product Name: ${this.name}`);
      console.log(`Price: $${this.price}`);
      console.log(`Description: ${this.description}`);
    },
  };
}

// Create a new Product object using the factory function
let product = createProduct("IMac", 999.99, "A high-performance laptop");

// Call the displayInfo method of the Product object
product.displayInfo();
// Output:
// Product Name: Laptop
// Price: $999.99
// Description: A high-performance laptop
