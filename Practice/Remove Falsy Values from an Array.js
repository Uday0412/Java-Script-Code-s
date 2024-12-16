let array = [0, 1, false, 2, '', 3, null, undefined, NaN];
let filteredArray = array.filter(Boolean);
console.log(filteredArray);
// Output: [1, 2, 3]
