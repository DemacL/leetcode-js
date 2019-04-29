/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
   /** 最长公共前缀最大长度为最短字符串的长度 */
   let minlen = Math.min(...strs.map(x => x.length))
   let res = '';
   for (let i = 0; i < minlen; i++) {
      // 所有字符串同一个索引的Set集合
      const sameIndexSet = new Set(strs.map(x => x[i]));
      if (sameIndexSet.size === 1) {
         res += [...sameIndexSet][0]
      } else {
         break;
      }
   }
   return res;
};

