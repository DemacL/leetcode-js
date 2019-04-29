/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let arr = [];//以当前元素结束的最长子串
    let maxArr = [];//无重复字符的最长子串
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {// 如果重复了
            arr = arr.slice(arr.indexOf(s[i]) + 1) // 把重复字符之前的截取掉
        }
        arr.push(s[i]);
        maxArr = arr.length > maxArr.length ? arr.slice() : maxArr;
    }
    return maxArr.length;
};

