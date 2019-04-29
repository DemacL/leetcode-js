/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) { 
    this.cacheMap = new Map();
    this.cacheMap.set(-1, 0);
    for (let i = 0; i < nums.length; i++) {
        this.cacheMap.set(i, this.cacheMap.get(i - 1) + nums[i])
    }

};
 
NumArray.prototype.sumRange = function (i, j) {
    return this.cacheMap.get(j) - this.cacheMap.get(i - 1)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

