let sentence = "javascript is fun";
let capitalised = sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capitalised);
// Output: "Javascript Is Fun"
