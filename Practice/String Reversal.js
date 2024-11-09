function reverseWords(sentence) {
    // Split the sentence into an array of words, reverse the array, and join it back into a string
    return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello world")); // Output: "world Hello"
