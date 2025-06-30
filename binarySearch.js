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