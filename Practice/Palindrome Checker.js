function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
