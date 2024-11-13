function sumOfDigits(number) {
    let sum = 0;
    let num = Math.abs(number); // To handle negative numbers if necessary

    while (num > 0) {
        sum += num % 10; // Add the last digit to the sum
        num = Math.floor(num / 10); // Remove the last digit
    }

    return sum;
}

// Example usage:
const number = 1234;
console.log("Sum of digits:", sumOfDigits(number)); // Output: Sum of digits: 10
