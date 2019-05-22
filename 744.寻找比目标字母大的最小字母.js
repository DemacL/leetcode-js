/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let min = Number.MAX_SAFE_INTEGER;
    let res = '';
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (letter !== target) {
            const distance = (letter.charCodeAt() - target.charCodeAt() + 26) % 26;
            if (distance < min) {
                res = letter;
                min = distance;
            }
        }
    }
    return res;
};

