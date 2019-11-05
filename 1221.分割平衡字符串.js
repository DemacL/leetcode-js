/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let flag = 0, sum = 0;

    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? flag-- : flag++;
        if (flag === 0) {
            sum++;
        }
    }
    return sum;
};
// @lc code=end

