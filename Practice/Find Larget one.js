function largest_One(arr){
    if (arr.length === 0){
        return "Array is empty";
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", function(input1){
    const numArr = input1.split(' ').map(num => parseInt(num));

    console.log("The largest number is: ", largest_One(numArr));

    rl.close();
});
