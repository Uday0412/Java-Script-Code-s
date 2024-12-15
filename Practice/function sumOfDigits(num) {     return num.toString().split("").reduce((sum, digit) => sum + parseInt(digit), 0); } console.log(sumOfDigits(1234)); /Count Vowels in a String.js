function countVowels(str) {
    let vowels = "aeiouAEIOU";
    return str.split("").filter(char => vowels.includes(char)).length;
}
console.log(countVowels("Apna Market"));
// Output: 4
