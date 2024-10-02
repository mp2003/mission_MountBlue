function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max(...height);
    return max >= k ? max - k : 0;
}
