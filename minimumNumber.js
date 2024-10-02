function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";

    let count = 0;
    let numSet = new Set(numbers);
    let lowerSet = new Set(lower_case);
    let upperSet = new Set(upper_case);
    let specialSet = new Set(special_characters);

    let hasNum = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;

    for (let ch of password) {
        if (numSet.has(ch))
            hasNum = true;
        if (lowerSet.has(ch))
            hasLower = true;
        if (upperSet.has(ch))
            hasUpper = true;
        if (specialSet.has(ch))
            hasSpecial = true;
    }

    if (!hasNum)
        count++;
    if (!hasLower)
        count++;
    if (!hasUpper)
        count++;
    if (!hasSpecial)
        count++;

    if (n + count < 6) return (6 - n)
    else return count;
}

console.log(minimumNumber(1, "a")); // Output: 3