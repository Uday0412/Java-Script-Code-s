const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the numbers separated by commas: ", function(input) {
    const numbers = input.split(',').map(num => parseInt(num.trim()));

    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const oddNumbers = numbers.filter(num => num % 2 !== 0);

    if (evenNumbers.length > 0) {
        console.log("The even numbers are:", evenNumbers.sort((a, b) => a - b));
    } else {
        console.log("No even numbers found.");
    }

    if (oddNumbers.length > 0) {
        console.log("The odd numbers are:", oddNumbers.sort((a, b) => a - b));
    } else {
        console.log("No odd numbers found.");
    }

    rl.close();
});
