// Define the MessagePrinter class
class MessagePrinter {
  constructor(message, interval) {
    this.message = message;
    this.interval = interval;
    this.currentIndex = 0;
  }

  // Method to print the message one letter at a time
  printMessage(callback) {
    if (this.currentIndex < this.message.length) {
      process.stdout.write(this.message[this.currentIndex]);
      this.currentIndex++;
      setTimeout(() => this.printMessage(callback), this.interval);
    } else {
      process.stdout.write("\n");
      if (callback) callback();
    }
  }
}

// Create a new MessagePrinter object with the desired message and interval
const message1 =
  "Hello I'm Peris Nik and I'm an Electrical and Software Engineer.";
const interval = 100; // 1 second

const printer1 = new MessagePrinter(message1, interval);

// Create a new MessagePrinter object with the second message and interval
const message2 =
  "Welcome to my GitHub repository! I hope you find the content useful.";

const printer2 = new MessagePrinter(message2, interval);

// Start printing the first message and then the second message
printer1.printMessage(() => {
  printer2.printMessage();
});
