function Operations(num) {
    if (num <= 0) {
        console.log("Enter a positive number!");
        return;
    }

    let n = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {  // Check if the current `i` is even
            n += i;         // Add `i` to `n` if it's even
        }
    }
    return n;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a Number: ", function (input1) {
    const num = parseInt(input1.trim(), 10); // Parse the input as a number
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        console.log("Sum of all even numbers up to", num, "is:", Operations(num));
    }
    rl.close();
});
