const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the string: ",function(string){
    if(string[0] === "A" || string[0] === "a" && string.length >= 5){
        console.log("this is a Golden string");
    }else{
        console.log("this is not a Golden string");
    }
    rl.close();
});