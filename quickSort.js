function quickSort(arr) {
    // Write your code here

    let p = arr[0];
    // console.log(arr);
    let first = arr.filter((el) => el < p);
    let last = arr.filter((el) => el > p);
    // console.log(first);

    return [...first, p, ...last];
}

let ans=quickSort([4, 1, 2, 5, 6])
console.log(ans);
