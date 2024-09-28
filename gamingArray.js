
function gamingArray(arr) {
    // Write your code here
    let c = 0;
    while (arr.length != 0) {
        let max = Math.max(...arr);
        // let nums = [];
        arr.splice(arr.indexOf(max));
        // console.log(arr);
        c++;
    }
    // console.log(c);

    return c % 2 == 0 ? "ANDY" : "BOB";
}

let arr = [5, 2, 6, 3, 4];
let arr2 = [1, 3, 5, 7, 9];
let arr3 = [7, 4, 6, 5, 9]
let n = gamingArray(arr3);
console.log(n);
