/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((x, y) => x - y)
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right]
      if (sum + nums[i] === 0) {
        res.push([nums[i], nums[left], nums[right]])
        break;
      } else if (sum < 0) {
        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++

      } else {
        right--
      }
    }
  }

  return res

};

// @lc code=end

