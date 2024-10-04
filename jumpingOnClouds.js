function jumpingOnClouds(c, k) {
    let e = 100;
    let n = c.length;
    for (let i = 0; i < c.length; i = (i + k) % n) {
        if (c[i] === 1)
            e -= 2;
        e -= 1;
        console.log(i, e);

        if ((i + k) % n === 0)
            break;

    }
    return e;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))