function generateRandomArray(n, min, max) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(generateRandomArray(5, 1, 10));
// Output: [random numbers between 1 and 10]
