const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the string: ",function(input1){
    if(input1.length === 0){
        console.log("Entred string is empty!");
    }        
    else{
        console.log("string: ",input1);
    }
    rl.close();
});