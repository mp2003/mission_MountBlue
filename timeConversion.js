function timeConversion(s) {
    // Write your code here
    let time = s.slice(8, 9);

    let hr = s.slice(0, 2);
    let min = s.slice(3, 5);
    let sec = s.slice(6, 8);
    console.log(hr, min, sec);

    if (time === "P") {
        if (hr !== "12") {
            hr = Number(hr) + 12;
        }
    } else {
        if (hr === "12")
            hr = "00";
    }

    return `${hr}:${min}:${sec}`
}

let ans = timeConversion("08:01:00PM");
console.log(ans);
