function migratoryBirds(arr) {
    // Write your code here
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let minNum = Infinity;
    let maxFreq = -Infinity;
    for (let [num, freq] of map) {
        if (freq >= maxFreq) {


            if (freq === maxFreq)
                minNum = Math.min(minNum, num);
            else
                minNum = num;
            maxFreq = freq;
        }
    }
    return minNum;
}

console.log(migratoryBirds([1, 4, 4, 5, 3, 3]));
