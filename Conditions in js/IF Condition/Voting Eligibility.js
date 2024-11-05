// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter something
rl.question("Enter your name: ", function(name) {
    console.log("Hello, " + name + "!");

    // You can ask more questions
    rl.question("Enter your age: ", function(age) {
        if (!isNaN(age) && age >= 18) {
            console.log("You are eligible to vote.");
        } else {
            console.log("You are not eligible to vote.");
        }
        
        // Close the readline interface after inputs
        rl.close();
    });
});
