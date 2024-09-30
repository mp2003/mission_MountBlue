function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((acc, val) => BigInt(acc) + BigInt(val), BigInt(0));

    // console.log(sum);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log((sum - BigInt(max)).toString(), (sum - BigInt(min)).toString());
}

miniMaxSum([1, 2, 2])