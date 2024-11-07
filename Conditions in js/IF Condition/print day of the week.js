const readline = require("readline");
const { DefaultDeserializer } = require("v8");

const rl = readline.createInterface({
    input:process.stdin,
    output : process.stdout
});

console.log("Enter the number b/w 1-7: ")

rl.question("", function(input){

    const num = parseInt(input);    
    switch(num){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        
        default:
            console.log("you enterd wrong number");
    }
});