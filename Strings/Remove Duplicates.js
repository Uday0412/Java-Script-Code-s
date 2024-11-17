function removeDuplicates(str) {
    let uniqueChars = new Set(str);
    return Array.from(uniqueChars).join('');
}

// Example
let input = "programming";
let result = removeDuplicates(input);
console.log("String without Duplicates:", result); // Output: "progamin"
