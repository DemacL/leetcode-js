/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {

    words.sort((x, y) => y.length - x.length || x.localeCompare(y));//按长度和字典序排序好 从最长的单词开始判断是否满足条件
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let index = word.length - 1;
        let isFind = true;
        while (index > 0) {
            if (!words.includes(word.slice(0, index--))) {
                isFind = false;
                break;
            }
        }
        if (isFind) {
            return word;
        }
    }
};

