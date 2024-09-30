function gridChallenge(grid) {
    // Write your code here


    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join("");
    }

    let transpose = [];

    for (let i = 0; i < grid[0].length; i++) {
        let str = "";

        for (let j = 0; j < grid.length; j++) {
            str += (grid[j][i]);
        }
        transpose.push(str);

    }
    console.log(grid, transpose);
    for (let i = 0; i < transpose.length; i++) {
        let str = transpose[i].split("").sort().join("");
        if (str !== transpose[i])
            return "NO";
    }

    return "YES";
}


let ans = gridChallenge(["bca", "xde", "bxz"])
console.log(ans);
