const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the quater number: ",function(quater){
    const quarterNumber = parseInt(quater); // Convert input to a number    
    switch(quarterNumber){
            case 1:
                console.log("Months in Quater1: January,Febuary,March");
                break;
            case 2:
                console.log("Months in Quater2: April,May,June");
                break;
            case 3:
                console.log("Months in Quater3: July,Augst,September");
                break;
            case 4:
                console.log("Months in Quater4: Octuber,Novemeber,December");
                break;
            
            default:
                console.log("You entered wrong quater");

    }
    rl.close();
});