// Define an interface for a user object
interface MyUser {
  id: number;
  fullName: {
    first: string;
    last: string;
  };
  email: string;
}

// Define an interface for an admin object
interface MyAdmin {
  id: number;
  fullName: {
    first: string;
    last: string;
  };
  role: string;
}

// Define a type that is a union of the properties of MyUser and MyAdmin
type UnionOfProperties = keyof MyUser | keyof MyAdmin;

// Create a function that takes a property name and a MyUser or MyAdmin object, and logs the property value
function printProperty(
  property: UnionOfProperties,
  obj: MyUser | MyAdmin
): void {
  if (property in obj) {
    console.log(`${property}: ${JSON.stringify((obj as any)[property])}`);
  } else {
    console.log(`Property ${property} does not exist on the object.`);
  }
}

// Create a MyUser object
const user: MyUser = {
  id: 1,
  fullName: {
    first: "John",
    last: "Doe",
  },
  email: "john.doe@example.com",
};

// Create a MyAdmin object
const admin: MyAdmin = {
  id: 2,
  fullName: {
    first: "Jane",
    last: "Smith",
  },
  role: "Administrator",
};

// Call the function with different properties and objects
printProperty("id", user); // Output: id: 1
printProperty("fullName", user); // Output: fullName: {"first":"John","last":"Doe"}
printProperty("email", user); // Output: email: john.doe@example.com
printProperty("role", user); // Output: Property role does not exist on the object.

printProperty("id", admin); // Output: id: 2
printProperty("fullName", admin); // Output: fullName: {"first":"Jane","last":"Smith"}
printProperty("email", admin); // Output: Property email does not exist on the object.
printProperty("role", admin); // Output: role: "Administrator"
