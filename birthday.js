function birthday(s, d, m) {
    // Write your code here
    let i = 0, j = 0;
    let sum = 0, count = 0;
    while (j < s.length) {

        sum += s[j];
        // console.log(s[j], s[i], sum);

        if (j - i + 1 === m) {
            if (sum === d) {
                count++;
            }
            sum -= s[i];
            i++;
        }
        j++;
    }
    return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));

