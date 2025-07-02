// 704. Binary Search
// https://leetcode.com/problems/binary-search/

/*
pseudo code:
  1. Initialize two pointers, left and right, to the start and end of the array.
  2. While left is less than or equal to right:
    2.1 Calculate the middle index.
    2.2 If the middle element is equal to the target, return the middle index.
    2.3 If the middle element is greater than the target, move the right pointer to the left of the middle.
    2.4 If the middle element is less than the target, move the left pointer to the right of the middle.
  3. If the target is not found, return -1.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return nums[l] === target ? l : -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
console.log(search([5], 5)) // 0
console.log(search([2, 5], 5)) // 1
