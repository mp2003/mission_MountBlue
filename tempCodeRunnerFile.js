function saveThePrisoner(n, m, s) {
    // Write your code here
    for (let i = 0; i < m; i++) {
        let num = (i + s) % n;
        if (num === 0) {
            num = n;
        }
        if (i === m - 1)
            return num;
    }
}