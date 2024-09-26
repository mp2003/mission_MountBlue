function superReducedString(s) {
    // Write your code here
    // let map = new Map();
    // let ans = '';
    // for (let ch of s) {
    //     map.set(ch, (map.get(ch) || 0) + 1);
    // }
    // for (let [ch, freq] of map) {
    //     map.set(ch, freq % 2);
    //     if (map.get(ch) === 0)
    //         map.delete(ch);
    // }
    // for (let keys of map.keys())
    //     ans += keys;

    // console.log(map, ans);
    // return map.size === 0 ? "Empty String" : ans;

    let stack = [];
    for (let ch of s) {
        if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    console.log(stack);
    return stack.length === 0 ? "Empty String" : stack.join("");
}
superReducedString("aabcccd");