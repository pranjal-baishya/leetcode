/* Plan (Pseudocode)
1. If s1.length > s2.length, return false early.
2. Create frequency counters for s1 and for the initial window of s2.
3. Slide a window of size s1.length across s2, updating the window frequency count:
  a. Compare the s1 count with current s2 window count.
  b. If match found, return true.
4. If no match found by end of s2, return false. */
// file: checkInclusion.js

function checkInclusion(s1, s2) {
  const len1 = s1.length
  const len2 = s2.length

  if (len1 > len2) return false

  const count1 = new Array(26).fill(0)
  const count2 = new Array(26).fill(0)

  const aCharCode = "a".charCodeAt(0)

  for (let i = 0; i < len1; i++) {
    count1[s1.charCodeAt(i) - aCharCode]++
    count2[s2.charCodeAt(i) - aCharCode]++
  }

  let matches = 0
  for (let i = 0; i < 26; i++) {
    if (count1[i] === count2[i]) matches++
  }

  for (let i = len1; i < len2; i++) {
    if (matches === 26) return true

    const indexAdd = s2.charCodeAt(i) - aCharCode
    const indexRemove = s2.charCodeAt(i - len1) - aCharCode

    count2[indexAdd]++
    if (count2[indexAdd] === count1[indexAdd]) matches++
    else if (count2[indexAdd] === count1[indexAdd] + 1) matches--

    count2[indexRemove]--
    if (count2[indexRemove] === count1[indexRemove]) matches++
    else if (count2[indexRemove] === count1[indexRemove] - 1) matches--
  }

  return matches === 26
}

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false