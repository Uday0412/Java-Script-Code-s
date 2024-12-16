function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(5, 15));
// Output: Random number between 5 and 15
