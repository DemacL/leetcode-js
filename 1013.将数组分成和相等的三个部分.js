/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    const sum = A.reduce((s, x) => s + x);// 总和
    const qnum = sum / 3;// 每部分应该都等于qnum
    let arr = [[], []];// 记录用来划分三个部分所用到的两个索引位置可能的数组
    let curSum = 0;
    for (let i = 0; i < A.length; i++) {
        curSum += A[i];
        if (curSum === qnum) {
            arr[0].push(i);// 第一部分可能存在的终点位置
        } else if (curSum === 2 * qnum) {
            arr[1].push(i); // 第二部分可能存在的终点位置
        }
    }
    // 存在第二个终点位置在第一个终点位置后面即可
    return arr[0].length > 0 && arr[1].length > 0 &&
        Math.max(...arr[1]) > Math.min(...arr[0])
};

