function findTwoSum(numbers, target) {
    // Loop through the array
    for (let i = 0; i < numbers.length; i++) {
        // Inner loop to check for the complement
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the sum of two numbers equals the target
            if (numbers[i] + numbers[j] === target) {
                return [i, j]; // Return the indices if the sum matches
            }
        }
    }
    return null; // Return null if no such pair exists
}

// Example Usage:
const numbers = [2, 7, 11, 15];
const target = 9;

const result = findTwoSum(numbers, target);
console.log(result); // Output: [0, 1]
