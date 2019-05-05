/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const magazineChars = [...magazine];
    // 遍历ransomNote所有的字符,magazine有该字符，置为空字符串，直到最后，省去splice的耗时
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazineChars.indexOf(ransomNote[i])
        if (index >= 0) { 
            magazineChars[index] = '';
        } else {
            return false;
        }
    }
    return true;
};

var canConstruct1 = function (ransomNote, magazine) {
    const ransomNoteChars = [...ransomNote];
    // 遍历magazine所有的字符,遇到ransomNote中有的字符，删除掉，直到最后看ransomNote是否还剩字符
    for (let i = 0; i < magazine.length && ransomNoteChars.length > 0; i++) {
        let index = ransomNoteChars.indexOf(magazine[i])
        if (index >= 0) {
            ransomNoteChars.splice(index, 1);
        }
    }
    return ransomNoteChars.length === 0;
};

