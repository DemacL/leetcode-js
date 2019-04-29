/* eslint-disable no-unused-vars */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
const isPalindrome = x => [...x.toString()].reverse().join('') === x.toString()

