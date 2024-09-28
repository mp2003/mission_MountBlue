function bonAppetit(bill, k, b) {
    // Write your code here
    let x = (bill.reduce((acc, cval) => acc + cval, 0) - bill[k]) / 2;

    return b - x === 0 ? "Bon Appetit" : x;
}

bonAppetit()