/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 * 只需要重复因子长度是否完全等于即可
 * 用正则转弯好几次效率极其低下
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let count = s.length;
    // 从1遍历到最多一半长度
    for (let sublength = 1; sublength <= count / 2; sublength++) {
        if (count % sublength === 0) {// 跳过不能整除的子字符串长度
            // const res = s.match(new RegExp(`.{${sublength}}`, 'g'));
            // if (res && res.join('').length === count &&
            //     res.length > 1 && new Set(res).size === 1) {
            //     return true;
            // }
            if (s.slice(0, sublength).repeat(count / sublength) === s) {
                return true;
            }
        }
    }
    return false;
};

