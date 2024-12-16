let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequency = items.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
}, {});
console.log(frequency);
// Output: { apple: 3, banana: 2, orange: 1 }
