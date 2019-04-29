/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    // const repeat = nums.filter(x => nums.indexOf(x) != nums.lastIndexOf(x))[0];// 重复的数字

    const set = new Set();
    let repeat = 0;
    for (num of nums) {
        if (set.has(num)) {
            repeat = num;
            break
        } else {
            set.add(num);
        }
    }

    const sum = nums.reduce((sum, x) => sum + x, 0);// // 实际和 
    const total = (1 + nums.length) * nums.length / 2;//  当前1-n应该的和
    return [repeat, total - (sum - repeat)]
};

