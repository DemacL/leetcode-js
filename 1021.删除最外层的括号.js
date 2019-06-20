/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let res = '';
    let group = ''
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        const ele = S[i];
        if (ele === '(') {
            stack.push(ele);
        } else {
            stack.pop(ele);
        }
        group += ele;
        if (stack.length === 0) {
            res += group.substring(1, group.length - 1)// 记录去掉最外层的括号的这一组
            group = ''; // 这一组已处理重置
        }
    }
    return res;
};

