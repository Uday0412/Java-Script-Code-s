function containsSubstring(str, sub) {
    // Convert both strings to lowercase for case-insensitive comparison
    return str.toLowerCase().includes(sub.toLowerCase());
}

// Test cases
console.log(containsSubstring("JavaScript is fun", "script")); // Output: true
console.log(containsSubstring("Hello World", "world"));       // Output: true
console.log(containsSubstring("Coding is great", "Python"));  // Output: false
