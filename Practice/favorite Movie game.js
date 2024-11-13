const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Movie Name: ", function(name) {
    if (name === "Avtar" || name === "avtar" || name === "Quit" || name === "quit") {
        console.log("Your guess is right");
    } else {
        console.log("Wrong");
    }
    rl.close();
});