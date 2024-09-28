
function birthdayCakeCandles(candles) {
    // Write your code here
    let map = new Map();
    for (let num of candles) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let tallest = 0;
    let h = 0;
    for (let [val, freq] of map) {
        if (val > tallest) {
            tallest = val;
            h = freq;
        }
    }
    return h;
}
console.log(birthdayCakeCandles([1, 3, 3,3, 1, 1, 1]));
