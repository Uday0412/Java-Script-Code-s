const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the string: ",function(num1){
    if(num1.length > 0){
        const Answer = num1.trim();
        console.log("After update: ",Answer);
    }
    else{
        console.log("please enter some character!");
    }
    rl.close();
});