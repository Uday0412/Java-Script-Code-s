function longestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

console.log(longestWord("JavaScript is a versatile language")); // "versatile"
