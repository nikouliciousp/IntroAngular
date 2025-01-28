// In this example, we have a User class with a constructor that takes name and age parameters.
// We also have a static method createGuest that creates a new User object with the given name and age.
// If the name or age is missing, it throws an error.
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createGuest(data) {
    const { name, age } = data;
    if (!name || !age) {
      throw new Error("Name and age are required");
    }
    return new User(name, age);
  }
}

// Create a new User object using the static createGuest method
const guest = User.createGuest({ name: "Alice", age: 30 });

// Log the created User object
console.log(guest); // Output: User { name: 'Alice', age: 30 }

// Attempt to create a User object without providing name or age
try {
  const invalidGuest = User.createGuest({ name: "Bob" });
} catch (error) {
  console.error(error.message); // Output: Name and age are required
}
