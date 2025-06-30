const topKFrequent = function (nums, k) {
  // Count frequencies of each number
  let count = {}
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1
  }
  
  // Create frequency array where index represents frequency
  // and value is array of numbers with that frequency
  let freq = Array(nums.length + 1).fill().map(() => [])
  for (let num in count) {
    freq[count[num]].push(parseInt(num))
  }
  
  // Collect k most frequent elements
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

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6], 2)) // [6, 1]
