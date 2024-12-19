function areElementsUnique(arr) {
    return new Set(arr).size === arr.length;
}
console.log(areElementsUnique([1, 2, 3, 4])); // true
console.log(areElementsUnique([1, 2, 2, 4])); // false
