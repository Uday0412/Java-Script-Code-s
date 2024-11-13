const { read } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the numbers in commas(,) : ",function(input1){
    const array = input1.split(",").map(Number);

    for(let i = 0; i < array.length ;i++){
        if(array[i] === 2){
            continue;
        }else{
            console.log(array[i]);
        }
    }
    rl.close();
});