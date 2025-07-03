// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

/*
pseudo code:
  1. Initialize two pointers, `slow` and `fast`, both starting at the first index.
  2. Move `slow` one step at a time and `fast` two steps at a time until they meet.
  3. Reset `slow` to the start and move both `slow` and `fast` one step at a time until they meet again.
  4. Return the value of `slow`.
*/  

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    let slow = nums[0]
    let fast = nums[0]

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break
    }

    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2
console.log(findDuplicate([3, 1, 3, 4, 2])) // 3
console.log(findDuplicate([1, 1])) // 1
console.log(findDuplicate([1, 1, 2])) // 1  