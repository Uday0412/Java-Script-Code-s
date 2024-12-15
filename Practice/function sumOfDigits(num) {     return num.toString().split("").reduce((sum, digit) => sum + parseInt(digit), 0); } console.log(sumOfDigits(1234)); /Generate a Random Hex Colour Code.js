function getRandomHexColour() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColour());
// Output: e.g., "#4e32a8"
