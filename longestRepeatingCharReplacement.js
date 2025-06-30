/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  let count = {};
  let l = 0, maxLength = 0;
  
  for (let r = 0; r < s.length; r++) {
    // Count current character
    count[s[r]] = (count[s[r]] || 0) + 1;
    
    // Calculate window size and max frequency in current window
    let windowSize = r - l + 1;
    let maxFreq = Math.max(...Object.values(count));
    
    // If window is invalid, shrink it
    while (windowSize - maxFreq > k) {
      count[s[l]]--;
      l++;
      windowSize = r - l + 1;
      maxFreq = Math.max(...Object.values(count));
    }
    
    maxLength = Math.max(maxLength, windowSize);
  }
  
  return maxLength;
};

console.log(characterReplacement("ABAB", 2));     // Output: 4
console.log(characterReplacement("AABABBA", 1));  // Output: 4
console.log(characterReplacement("ABAB", 0));  // Output: 1
