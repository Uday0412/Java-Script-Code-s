let sentence = "JavaScript is a versatile programming language";
let largestWord = sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
console.log(largestWord);
// Output: "programming"
