/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = [...s]
    let left = 0;
    let right = s.length - 1;
    while (left < right) { // 迭代的每一次找到左右端对应的元音字母对
        while (left < s.length && !/[aeiou]/i.test(s[left])) {
            left++;
        }
        while (right >= 0 && !/[aeiou]/i.test(s[right])) {
            right--;
        }
        if (left < right) {
            [s[left], s[right]] = [s[right], s[left]];// js 交换变量值 ES6 解构赋值 
            left++;
            right--;
        }
    }
    return s.join('');
};

