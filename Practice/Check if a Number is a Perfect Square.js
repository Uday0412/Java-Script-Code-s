function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(20)); // false
