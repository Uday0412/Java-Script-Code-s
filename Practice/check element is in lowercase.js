function isLowerCaseAtIndex(str, index) {
    // Check if the index is within bounds
    if (index < 0 || index >= str.length) {
        return false; // Invalid index
    }

    // Get the character at the specified index
    const char = str.charAt(index);

    // Check if the character is lowercase
    return char === char.toLowerCase() && char !== char.toUpperCase();
}

// Example usage
const str = "Hello World";
const index = 6;
console.log(isLowerCaseAtIndex(str, index)); // Output: true, since 'w' is lowercase
