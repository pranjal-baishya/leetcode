// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

/*
pseudo code:
  1. Count the frequency of each number in the array.
  2. Create a frequency array where the index represents the frequency and the value is an array of numbers with that frequency.
  3. Collect the k most frequent elements from the frequency array.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  let count = {}
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1
  }

  let freq = Array(nums.length + 1)
    .fill()
    .map(() => [])
  for (let num in count) {
    freq[count[num]].push(parseInt(num))
  }

  let result = []
  for (let i = freq.length - 1; i >= 0; i--) {
    for (let num of freq[i]) {
      result.push(num)
      if (result.length === k) {
        return result
      }
    }
  }
  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6], 2)) // [6, 1]
