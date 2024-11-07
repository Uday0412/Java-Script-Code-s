// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter something
    console.log("Choose the popcorn packet size : ");
    console.log("XL","L","M","S");

    // You can ask more questions
    rl.question("Enter the choice :", function(size) {
        if (size == "Xl") {
            console.log("price Of XL size popcorn packet: 250");
        } else if (size == "L") {
            console.log("price Of L size popcorn packet: 200");
        }else if (size == "M"){
            console.log("price Of M size popcorn packet: 100");
        }else if (size == "S"){
            console.log("price Of S size popcorn packet: 50");
        }
        
        // Close the readline interface after inputs
        rl.close();

});
