// function minimumAbsoluteDifference(arr) {
//     // Write your code here
//     let minDiff = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length ; j++) {
//             let diff = Math.abs(arr[i] - arr[j]);
//             if ( diff < minDiff)
//                 minDiff = diff;
//         }
//     }
//     return minDiff;
// }


function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    
    let minDiff = Infinity;
    
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    
    return minDiff;
}
