/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {

    const dic = ['a', 'b', 'l', 'o', 'n'];
    const frequencyMap = [...text].reduce((m, c) => {
        if (dic.includes(c)) {
            m.set(c, m.get(c) + 1);
        }
        return m
    }, new Map(dic.map(c => [c, 0])))
    return Math.min(...[...frequencyMap].map(n => (n[0] === 'o' || n[0] === 'l') ? Math.floor(n[1] / 2) : n[1]));
};
// @lc code=end

