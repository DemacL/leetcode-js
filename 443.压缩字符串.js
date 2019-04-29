/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let count = 0;// 当前字符的累计总数
    let char = chars[0];// 当前字符
    let index = 0;// 当前可放入压缩后字符的索引
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === char) {
            count++
        } else {
            chars[index++] = char;
            if (count > 1) {
                for (let j = 0; j < count.toString().length; j++) {
                    chars[index++] = count.toString()[j]
                }
            }
            char = chars[i];
            count = 1;
        }
    }
    chars[index++] = char;
    if (count > 1) {
        for (let j = 0; j < count.toString().length; j++) {
            chars[index++] = count.toString()[j]
        }
    }
    return index;
};
 compress(["a","b","c"])
