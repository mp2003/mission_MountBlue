function gameOfStones(n) {
    // Write your code here
    let t = 0;
    while (n > 0) {

        if (n >= 5) {
            n -= 5;
            t++;
        }
        else if (n >= 3) {
            n -= 3;
            t++;
        }
        else if (n >= 2) {
            n -= 2;
            t++;
        }
        console.log(n, t);

        if (n === 0) {
            break;
        }
    }
    return t % 2 === 0 ? "Second" : "First";
}

let ans = gameOfStones(10);
console.log(ans);
