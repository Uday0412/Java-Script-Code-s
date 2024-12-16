function toTitleCase(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ");
}
console.log(toTitleCase("hello world from javascript"));
// Output: "Hello World From Javascript"
