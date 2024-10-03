function viralAdvertising(n) {
    // Write your code here
    let sum = 0;
    let recp = 5;
    for (let i = 0; i < n; i++) {
        console.log(sum, recp);
        sum += Math.floor(recp / 2);
        recp = Math.floor(recp / 2) * 3;
    }
    return sum;
}

console.log(viralAdvertising(4));
