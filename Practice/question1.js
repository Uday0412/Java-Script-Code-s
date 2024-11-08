const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the number: ",function(num){
    if(num % 10 == 0){
        console.log("The number is good");
    }
    else{
        console.log("The number is bad");
    }
})