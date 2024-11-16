function ispalindrome(str){
    let lowerstr = "";
    for (let i = 0; i < str.length; i++) {
        lowerstr += str[i] >= 'A' && str[i] <= 'Z' ? String.fromCharCode(str[i].charCodeAt(0) + 32) : str[i];
    }

    let start = 0;
    let end = lowerstr.length -1;

    while(start < end){
        if (lowerstr[start] !== lowerstr[end]){
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(ispalindrome("radar"));  // Output: true
console.log(ispalindrome("hello"));  // Output: false
console.log(ispalindrome("RaceCar"));
