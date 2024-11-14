function Unique_Values(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Array Elements (comma-separated): ", function(input1) {
    // Split the input by commas and trim each element, then convert to numbers if needed
    const arr = input1.split(',').map(item => item.trim());

    console.log("Unique values:", Unique_Values(arr));
    rl.close();
});
