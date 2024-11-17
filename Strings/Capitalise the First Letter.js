function capitaliseWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Example
let input = "javascript is a fun language";
let result = capitaliseWords(input);
console.log("Capitalised String:", result); // Output: "Javascript Is A Fun Language"
