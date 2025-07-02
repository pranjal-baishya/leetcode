// 271. Encode and Decode Strings
// https://leetcode.com/problems/encode-and-decode-strings/

/*
pseudo code:
  1. Encode:
    1.1 For each string in the array, append its length followed by a '#' and the string itself to the result.
    1.2 Return the encoded string.

  2. Decode:
    2.1 Initialize an empty array to store the decoded strings.
    2.2 Use a pointer to traverse the encoded string.
    2.3 For each segment, extract the length (until the '#') and decode the string using the length.
    2.4 Add the decoded string to the result array.
    2.5 Return the decoded array.
*/

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = ""
    for (let s of strs) {
      res += s.length + "#" + s
    }
    return res
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = []
    let i = 0
    while (i < str.length) {
      let j = i
      while (str[j] !== "#") j++
      let length = parseInt(str.slice(i, j))
      res.push(str.slice(j + 1, j + 1 + length))
      i = j + 1 + length
    }
    return res
  }
}

const solution = new Solution()
console.log(solution.encode(["lint", "code", "love", "you"]))
console.log(solution.decode("4#lint4#code4#love3#you"))
