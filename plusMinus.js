function plusMinus(arr) {
    // Write your code here
    let positive = 0, negative = 0, zero = 0;
    for (let num of arr) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    }

    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));


}
