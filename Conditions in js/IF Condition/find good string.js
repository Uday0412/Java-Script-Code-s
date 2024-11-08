const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the string: ", function(str){
    if (str[0] == "a" || str[0] == "A" && length.str >= 3) {
        console.log("GOOD STRING");
    } else {
        console.log("NOT A GOOD STRING");
    }
    rl.close(); // Close the readline interface after getting the input
});
