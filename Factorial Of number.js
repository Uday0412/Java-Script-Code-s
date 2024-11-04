function fact(num){
    if(num===1 || num === 0){
        return 1;
    }

    return num * fact(num-1);
}

let a = fact(5);
console.log(a);