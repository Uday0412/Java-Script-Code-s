const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the elements (comma-separated): ", function(input1) {
    const num1 = input1.split(',').map(Number);
    
    rl.question("Enter the number for checking: ", function(input2) {
        const num2 = parseInt(input2);

        if (num1.includes(num2)) {
            console.log("Number exists in num1");
        } else {
            console.log("Number does not exist in num1");
        }

        rl.close()
    });
});
