const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the elements of array: ",function(input1){
    const num1 = input1.split(',').map(Number);
    rl.question("Enter the nth element: ",function(input2){
        const num2 = parseInt(input2);
        if(num2 > 0){
            const number = num1.slice(-num2);
            console.log(number);
        }else{
            console.log(" ");
        }
        rl.close();
    })
})