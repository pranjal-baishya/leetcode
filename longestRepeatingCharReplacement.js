// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

/*
pseudo code:
  1. Initialize a count object to keep track of character frequencies.
  2. Use two pointers, left and right, to create a sliding window.
  3. Expand the window by moving the right pointer.
  4. Calculate the window size and the maximum frequency of any character in the current window.
  5. If the window is invalid (i.e., window size - max frequency > k),
    5.1 Shrink the window by moving the left pointer.
    5.2 Update the window size and the maximum frequency.
  6. Update the maximum length if the current window is valid.
  7. Return the maximum length.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  let count = {}
  let l = 0,
    maxLength = 0

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1

    let windowSize = r - l + 1
    let maxFreq = Math.max(...Object.values(count))

    while (windowSize - maxFreq > k) {
      count[s[l]]--
      l++
      windowSize = r - l + 1
      maxFreq = Math.max(...Object.values(count))
    }

    maxLength = Math.max(maxLength, windowSize)
  }

  return maxLength
}

console.log(characterReplacement("ABAB", 2)) // Output: 4
console.log(characterReplacement("AABABBA", 1)) // Output: 4
console.log(characterReplacement("ABAB", 0)) // Output: 1
