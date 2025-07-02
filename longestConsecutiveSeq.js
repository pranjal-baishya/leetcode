// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

/*
pseudo code:
  1. Convert the array to a set for O(1) lookups.
  2. Iterate through each number in the set.
  3. If the number is the start of a sequence (i.e., num - 1 is not in the set),
    3.1 Initialize a length counter.  
    3.2 Increment the counter while the next number is in the set.
    3.3 Update the longest sequence length.
  4. Return the longest sequence length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const numSet = new Set(nums)
  let longest = 0

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 0
      while (numSet.has(num + length)) {
        length++
      }
      longest = Math.max(longest, length)
    }
  }
  return longest
}
