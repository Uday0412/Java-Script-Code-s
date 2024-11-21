function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
