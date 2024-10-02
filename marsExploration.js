function marsExploration(s) {
    // Write your code here
    let str = "SOS";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== str[i % 3]) {
            count++;
        }
    }

    return count;
}

marsExploration("SOSSOSTOP")