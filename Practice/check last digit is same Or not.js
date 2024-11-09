const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Digit1: ",function(input1){
    const num1 = parseInt(input1);
    rl.question("Enter the Digit2: ",function(input2){
        const num2 = parseInt(input2);
        if(num1 % 10 === num2 % 10){
            console.log("they have same digit");
        }
        else{
            console.log("they have not same digit");
        }
        rl.close();
    });
});