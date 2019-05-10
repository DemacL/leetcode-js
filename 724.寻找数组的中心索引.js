/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sumleft = 0;// 中心索引左边和
    let sumright = nums.reduce((x, y) => x + y, 0);// 中心索引右边和
    for (let i = 0; i <= nums.length - 1; i++) {
        const num = nums[i];
        sumright -= num;// 当前元素不计入右边和
        if (sumleft === sumright) {// 判断是否满足中心索引条件
            return i;
        }
        sumleft += num;// 判断下一个元素之前，当前元素计入左边和
    }
    return -1;
};

