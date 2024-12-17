const { stdout, stdin } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the array elements: ",function(input1){
    rl.question("enter the n number: ",function(input2){


        const array = input1.split(',').map(item => item.trim());
        const n = parseInt(input2,10);
        
        if(isNaN(n) || n < 0){
            console.log("enter the valid number!");
        }else{
            const result = array.slice(0,n);
            console.log("the first n elements: ",result);
        }
    });
});
