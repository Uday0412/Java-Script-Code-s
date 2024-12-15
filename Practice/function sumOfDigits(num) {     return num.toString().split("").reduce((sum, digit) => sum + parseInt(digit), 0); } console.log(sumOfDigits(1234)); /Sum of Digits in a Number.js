function sumOfDigits(num) {
    return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumOfDigits(1234));
// Output: 10
