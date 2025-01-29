// Define an interface for a user object
interface User {
  id: number;
  name: string;
  email: string;
}

// Define a mapped type that makes all fields of User optional
type PartialUser = {
  [P in keyof User]?: User[P];
};

// Create an object that satisfies the PartialUser type
const partialUser: PartialUser = {
  name: "John Doe",
};

// Create another object that satisfies the PartialUser type
const partialUser2: PartialUser = {
  email: "partialuser2@example.com",
};

// Define a mapped type that makes all fields of User readonly
type ReadonlyUser = {
  readonly [P in keyof User]: User[P];
};

// Create an object that satisfies the ReadonlyUser type
const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
};

// Attempt to modify a field of readonlyUser (this will cause an error)
// readonlyUser.name = "John Smith"; // Error: Cannot assign to 'name' because it is a read-only property.

// Define a mapped type that makes all fields of User required
type RequiredUser = {
  [P in keyof User]-?: User[P];
};

// Create an object that satisfies the RequiredUser type
const requiredUser: RequiredUser = {
  id: 2,
  name: "Alice",
  email: "alice@example.com",
};

// Define a mapped type that makes all fields of User nullable
type NullableUser = {
  [P in keyof User]: User[P] | null;
};

// Create an object that satisfies the NullableUser type
const nullableUser: NullableUser = {
  id: null,
  name: null,
  email: null,
};

// Log the objects to the console
console.log(partialUser); // Output: { name: "John Doe" }
console.log(partialUser2); // Output: { email: "partialuser2@example.com" }
console.log(readonlyUser); // Output: { id: 1, name: "Jane Doe", email: "jane.doe@example.com" }
console.log(requiredUser); // Output: { id: 2, name: "Alice", email: "alice@example.com" }
console.log(nullableUser); // Output: { id: null, name: null, email: null }
