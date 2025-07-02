// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/*
1. Set low = 0, high = nums.length - 1.
2. While low < high:
  a. Calculate mid = Math.floor((low + high) / 2).
  b. If nums[mid] > nums[high]:
    . Minimum is in the right half → low = mid + 1
  c. Else:
    . Minimum is in the left half or at mid → high = mid
3. When loop ends, low points to the minimum. 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let l = 0,
    r = nums.length - 1

  while (l < r) {
    let mid = Math.floor((l + r) / 2)

    if (nums[r] < nums[mid]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return nums[l]
}

console.log(findMin([3, 4, 5, 1, 2])) // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin([11, 13, 15, 17])) // 11
