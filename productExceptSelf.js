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
  for (let i = nums.length - 1; i >=0; i--) {
    res[i] = res[i] * next
    next *= nums[i]
  }
  return res
}

console.log(productExceptSelf([1, 2, 3, 4]))
