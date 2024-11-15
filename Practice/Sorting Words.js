function sortWords(sentence) {
    // Step 1: Clean the sentence by removing punctuation and converting to lowercase
    let cleanedSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i].toLowerCase();
        if (char >= 'a' && char <= 'z' || char === ' '){
            cleanedSentence += char;
        }
    }

    // Step 2: Split the cleaned sentence into words
    let words = [];
    let currentWord = "";
    for (let i = 0; i < cleanedSentence.length; i++) {
        if (cleanedSentence[i] !== ' ') {
            currentWord += cleanedSentence[i];
        } else if (currentWord) {
            words.push(currentWord);
            currentWord = "";
        }
    }
    if (currentWord) words.push(currentWord); // Add the last word if any

    // Step 3: Sort the words alphabetically without using .sort()
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words.length - i - 1; j++) {
            if (words[j] > words[j + 1]) {
                // Swap words[j] and words[j + 1]
                let temp = words[j];
                words[j] = words[j + 1];
                words[j + 1] = temp;
            }
        }
    }

    return words;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the string: ",function(input1){

    const result = sortWords(input1);
    console.log(result);

    rl.close();
});