function prime_num(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Return false if a divisor is found
        }
    }
    
    return num; // Return the number if it's prime
}


const { read } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number: ",function(input1){
    const num = input1.split(',').map(Number);
    const primes = prime_num(num);
    console.log("prime numbers: ",primes);

    rl.close();
});