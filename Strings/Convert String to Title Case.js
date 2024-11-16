function toTitleCase(str) {
    return str
        .split(" ") // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalise the first letter
        .join(" "); // Join the words back into a single string
}

// Test cases
console.log(toTitleCase("javascript is awesome")); // Output: "JavaScript Is Awesome"
console.log(toTitleCase("HELLO world"));           // Output: "Hello World"
console.log(toTitleCase("coding is FUN"));         // Output: "Coding Is Fun"
