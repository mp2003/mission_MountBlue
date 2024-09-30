
function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let ans = 0;
    let isValley = false;
    for (let ch of path) {

        if (seaLevel < 0) {
            isValley = true;
        } else {
            isValley = false;
        }

        if (ch === "U")
            seaLevel += 1;
        if (ch === "D")
            seaLevel -= 1;


        if (isValley) {
            if (seaLevel === 0) ans++;
        }
    }
    return ans;
}

console.log(countingValleys(3, "DDUUUUDD"));
