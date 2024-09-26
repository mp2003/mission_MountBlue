function staircase(n) {
    // Write your code here
    let str = "";

    for (let i = 1; i <= n; i++) {
        let level = "";
        for (let j = n - i; j > 0; j--) {
            level += " ";
        }
        for (let k = 1; k <= i; k++)
            level += "*";
        str += level;
        if (i !== n)
            str += "\n";
    }
    return str;
}

console.log(staircase(4));
