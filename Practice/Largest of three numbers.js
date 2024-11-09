const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the num1: ",function(input1){
    const num1 = parseInt(input1);
    rl.question("Enter the num2: ",function(input2){
        const num2 = parseInt(input2);
        rl.question("Enter the num3: ",function(input3){
            const num3 = parseInt(input3);
            if(num1 >= num2 && num1 >= num3){
                console.log(num1+" is greater than "+num2+" and "+num3);
            }
            else if(num2 >= num1 && num3 >= num3){
                console.log(num2+" is greater than "+num1+" and "+num3);
            }
            else{
                console.log(num3+" is greater than "+num1+" and "+num2);
            }
            rl.close();
        });
    });
});