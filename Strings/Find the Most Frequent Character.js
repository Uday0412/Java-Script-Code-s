function mostFrequentChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;

    // Remove spaces and iterate through characters
    for (let char of str.replace(/\s+/g, '')) {
        charMap[char] = (charMap[char] || 0) + 1;

        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }

    return maxChar;
}

// Example
let input = "JavaScript is amazing!";
let result = mostFrequentChar(input);
console.log("Most Frequent Character:", result); // Output: "a"
