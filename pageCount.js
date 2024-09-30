function pageCount(n, p) {
    // Write your code here
    let start = 0, end = 0;
    start = Math.floor(p / 2);
    end = Math.floor(n / 2) - Math.floor(p / 2);
   
    return Math.min(start, end);
}

console.log(pageCount(5, 5));
