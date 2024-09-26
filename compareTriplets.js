function compareTriplets(a, b) {
    let x = 0, y = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i])
            x++;
        else if (a[i] < b[i])
            y++;
    }
    return [x, y];
}

console.log(compareTriplets([1,6,7], [3,16,10]));
