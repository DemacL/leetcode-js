/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const res = [];// 整个杨辉三角
    for (let i = 0; i <= rowIndex; i++) {
        if (i === 0) {
            res.push([1])// 第一行 基础行
        } else {
            const arrs = [1];// 初始化当前行的第一个元素为1
            const preRows = res[i - 1];// 上一行数据
            for (let j = 0; j < preRows.length; j++) {// 上一行遍历获取左上方和右上方的数的和
                arrs.push(preRows[j] + (preRows[j + 1] || 0));
            }
            res.push(arrs);
        }
    }// 生成杨辉三角数据
    return res.pop();
};

