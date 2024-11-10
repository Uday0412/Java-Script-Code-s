function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
