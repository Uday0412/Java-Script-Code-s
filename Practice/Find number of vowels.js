function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return Array.from(str).filter(char => vowels.includes(char)).length;
}

console.log(countVowels("javascript")); // 3
