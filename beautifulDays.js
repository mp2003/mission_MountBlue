function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;
    for (let x = i; x <= j; x++) {
        let rev = Number(x.toString().split('').reverse().join(''));
        if ((Math.abs(x - rev) % k) === 0) {
            count++;
        }
    }
    return count;
}