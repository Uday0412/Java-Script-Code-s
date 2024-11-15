function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']; // Array to store vowels
    let count = 0; // Counter for vowels

    // Convert the string to lowercase manually
    let lowercaseStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase to lowercase
            lowercaseStr += String.fromCharCode(charCode + 32);
        } else {
            lowercaseStr += str[i];
        }
    }

    // Loop through the lowercase string
    for (let i = 0; i < lowercaseStr.length; i++) {
        let isVowel = false;
        // Check if the current character is a vowel
        for (let j = 0; j < vowels.length; j++) {
            if (lowercaseStr[i] === vowels[j]) {
                isVowel = true;
                break;
            }
        }
        if (isVowel) {
            count++;
        }
    }

    return count;
}

// Example usage
let text = "Hello World!";
console.log(countVowels(text)); // Output: 3
