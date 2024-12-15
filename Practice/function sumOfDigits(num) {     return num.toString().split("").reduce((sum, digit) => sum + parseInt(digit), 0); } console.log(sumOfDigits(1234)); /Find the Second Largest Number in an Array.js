let nums = [10, 20, 4, 45, 99];
let uniqueNums = [...new Set(nums)].sort((a, b) => b - a);
console.log(uniqueNums[1]);
// Output: 45
