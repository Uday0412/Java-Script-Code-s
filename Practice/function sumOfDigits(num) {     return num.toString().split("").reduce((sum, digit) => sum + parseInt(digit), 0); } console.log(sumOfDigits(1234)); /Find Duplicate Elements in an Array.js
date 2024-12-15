let items = [1, 2, 3, 2, 4, 5, 3, 6];
let duplicates = items.filter((item, index) => items.indexOf(item) !== index);
console.log([...new Set(duplicates)]);
// Output: [2, 3]
