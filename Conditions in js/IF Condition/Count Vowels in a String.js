function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split("").filter(char => vowels.includes(char)).length;
}

let str = "uday";
console.log(countVowels(str));