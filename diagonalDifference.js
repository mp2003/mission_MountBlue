function diagonalDifference(arr) {
    // Write your code here
    let dia1 = 0, dia2 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) {
                dia1 += arr[i][j];
            }
            if (i + j === arr.length - 1) {
                dia2 += arr[i][j];
            }
        }
    }
    return Math.abs(dia1 - dia2);
}
