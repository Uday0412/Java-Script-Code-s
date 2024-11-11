const { chownSync } = require("fs");
const { parseConnectionUrl } = require("nodemailer/lib/shared");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the array elements: ",function(input1){
    const num1 = input1.split(',').map(Number); // Convert input to a number    
    console.log(num1);
    rl.question("Enter the nth element: ",function(input2){
        const N = parseInt(input2);

        if(N <= 0){
            console.log(" ");
        }else{
            const elements = num1.slice(0,N);
            console.log(elements);
        }
        rl.close();
    })
})
