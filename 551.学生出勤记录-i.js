/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    return (s.match(/A/g) || []).length <= 1 // A的次数不超过1个
        && (s.match(/L{3}/g) || []).length === 0// 没有连续的三个L的情况
};

