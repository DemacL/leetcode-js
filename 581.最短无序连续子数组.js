/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray1 = function (nums) {
    sortNums = [...nums].sort((x, y) => x - y)// 先升序排好
    let left = 0;
    let right = nums.length - 1;
    let leftIndex = -1;
    let rightIndex = -1;
    while (left < right && (leftIndex < 0 || rightIndex < 0)) {
        if (leftIndex < 0) {
            if (nums[left] !== sortNums[left]) {
                leftIndex = left;
            } else {
                left++;
            }
        }
        if (rightIndex < 0) {
            if (nums[right] !== sortNums[right]) {
                rightIndex = right;
            } else {
                right--;
            }
        }
    }
    return rightIndex === leftIndex ? 0 : (rightIndex - leftIndex + 1);
};


var findUnsortedSubarray = function (nums) {

    let high = 0;// 第一个大值不正确的索引
    let low = 1; // 第一个小值不正确的索引
    let maxValue;// 记录从左到右的当前最大值
    let minValue;// 记录从右到左的当前最小值
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            maxValue = nums[i];
        } else {
            if (nums[i] < maxValue) {
                high = i;
            }
            maxValue = Math.max(maxValue, nums[i]);
        }
    }
    console.log(high);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            minValue = nums[i];
        } else {
            if (nums[i] > minValue) {
                low = i;
            }
            minValue = Math.min(minValue, nums[i]);
        }
    }
    console.log(low);
    return high - low + 1;
};

