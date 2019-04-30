/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) || [...map.values()].includes(t[i])) {//如果之前有映射关系
            if (map.get(s[i]) !== t[i]) { // 但是这一次映射的值不一样返回false
                return false;
            }
        } else {
            map.set(s[i], t[i]);// 建立映射关系
        }
    }
    return true;
};

