/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 * 判断一个字母是否是元音不需要用正则 性能杀手
 * 用字符串字典判断即可
 */
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    return S.split(' ')
        .map((word, index) =>
            ('aeiouAEIOU'.includes(word[0]) ? (word + 'ma') : (word.slice(1) + word[0] + 'ma')) + 'a'.repeat(index + 1))
        .join(' ')
};

