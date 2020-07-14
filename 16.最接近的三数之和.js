/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((x, y) => x - y)
  console.log(nums)
  let distance = Number.MAX_SAFE_INTEGER;
  let sum;
  for (let i = 0; i < nums.length - 2; i++) {
    console.log(nums[i]);
    // const curr = nums[i];
    // let left = i + 1;
    // let right = nums.length - 1
    // let currentSum = curr + nums[left] + nums[right];
    // while (left < right) {
    //   currentDistance = Math.abs(target - sum)
    //   if (currentDistance < distance) {
    //     sum = currentSum
       
    //   } 
    //   left++
    // }
  }

  return sum
};
// @lc code=end

