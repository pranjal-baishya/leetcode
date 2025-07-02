// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

/*
pseudo code:
  1. Initialize an array of the same length as nums with all elements set to 1.
  2. Use two pointers, prev and next, to keep track of the product of the elements before and after the current index.
  3. Iterate through the array and calculate the product of the elements before the current index.
  4. Iterate through the array and calculate the product of the elements after the current index.
  5. Return the result array.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  let res = new Array(nums.length)
  let prev = nums[0]
  let next = 1
  res[0] = 1
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * prev
    prev = nums[i]
  }
  console.log(res)
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * next
    next *= nums[i]
  }
  return res
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))