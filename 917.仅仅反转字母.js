/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let left = 0;// 左指针
    let right = S.length - 1;// 右指针
    const charArr = S.split('');
    while (left < right) {
        while (!(/[a-zA-Z]/).test(charArr[left])) {
            left++
        }
        while (!(/[a-zA-Z]/).test(charArr[right])) {
            right--
        }
        if (left < right) {
            [charArr[left], charArr[right]] = [charArr[right], charArr[left]]
        }
        left++;
        right--;
    }

    return charArr.join('')
};

