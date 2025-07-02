// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

/*
pseudo code:
1. Set low = 0, high = nums.length - 1.
2. While low <= high:
  a. Compute mid = Math.floor((low + high) / 2)
  b. If nums[mid] === target, return mid
  c. Determine which side is sorted:
    . Left sorted: nums[low] <= nums[mid]
        If nums[low] <= target < nums[mid] → move high = mid - 1
        Else → move low = mid + 1
    . Right sorted: else
        If nums[mid] < target <= nums[high] → move low = mid + 1
        Else → move high = mid - 1
3. If not found, return -1. 
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

    if (nums[mid] >= nums[l]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([3, 1], 1)) // 1
