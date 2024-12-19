function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substring = str.slice(i, j + 1);
            if (substring === substring.split("").reverse().join("") && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}
console.log(longestPalindrome("babad")); 
// Output: "bab" or "aba"
