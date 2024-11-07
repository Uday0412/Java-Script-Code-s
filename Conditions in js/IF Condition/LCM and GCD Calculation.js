function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcmAndGcd(a, b) {
    const gcdValue = gcd(a, b);
    const lcmValue = (a * b) / gcdValue;
    return { lcm: lcmValue, gcd: gcdValue };
}

console.log(lcmAndGcd(12, 15)); // { lcm: 60, gcd: 3 }
