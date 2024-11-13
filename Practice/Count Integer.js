const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Number: ", function(num) {
    const input1 = Math.abs(parseInt(num)); // Handle negative numbers
    let count = 0;

    // Use a for loop to divide the number until it becomes 0
    for (let temp = input1; temp > 0; temp = Math.floor(temp / 10)) {
        count++;
    }

    // Special case for 0, as it has 1 digit
    if (input1 === 0) {
        count = 1;
    }

    console.log("Number of Digits: ", count);
    rl.close();
});
