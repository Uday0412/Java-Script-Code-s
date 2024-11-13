function factorial(num){
    let fact = 1;
    for(let i = 1;i<= num; i++){
        fact = fact * i;
    }

    return fact;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Number: ",function(input1){
    const num = parseInt(input1);

    console.log("Factorial of Numbers is: ",factorial(num));

    rl.close();
})