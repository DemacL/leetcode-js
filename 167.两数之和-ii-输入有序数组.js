/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */


var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [++left, ++right]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
var twoSum1 = function (numbers, target) {
    const invalidSet = new Set(); // 记录没有匹配过的数字避免重复计算
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (!invalidSet.has(num)) {
            let targetIndex = numbers.findIndex((val, index) => val === target - num && index !== i);
            if (targetIndex >= 0) {
                return [i + 1, targetIndex + 1]
            } else {
                invalidSet.add(num);
            }
        }
    }
};

